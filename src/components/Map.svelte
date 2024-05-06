<script lang="ts">
  import { onMount } from "svelte";
  import { droneStore, selectedDrone } from "../stores/DroneStore"; // Import the store with drone data

  let L: any;
  let mapContainer: HTMLDivElement;
  let map: any;

  onMount(() => {
    if (typeof window !== "undefined") {
      import("leaflet").then((module) => {
        L = module.default;
        if (!mapContainer) return;

        map = L.map(mapContainer).setView([51.476931, 5.343987], 16);
        L.tileLayer(
          "https://tiles.stadiamaps.com/tiles/alidade_satellite/{z}/{x}/{y}{r}.jpg",
          {
            minZoom: 0,
            maxZoom: 20,
          }
        ).addTo(map);

        // Define a custom icon using an SVG file that supports rotation
        const createDroneIcon = (yaw: number) =>
          L.divIcon({
            html: `<img src="/drone.svg" style="transform: rotate(${yaw}deg); width: 38px; height: 95px;">`,
            iconSize: [38, 95],
            iconAnchor: [19, 47], // Adjusted to center the icon based on size
          });

        const createTargetIcon = () =>
          L.divIcon({
            html: `<img src="/target.svg" style="width: 38px; height: 95px;">`,
            iconSize: [38, 95],
            iconAnchor: [19, 47],
          });

        // Create and manage markers for drones and targets
        const droneMarkers = new Map(); // Using a Map to track markers by drone ID
        const targetMarkers = new Map(); // Using a Map to track markers by target ID

        const unsubscribe = droneStore.subscribe((drones) => {
          // Update existing markers or create new ones for drones
          // Inside the droneStore.subscribe() function
          drones.forEach((drone) => {
            // Update or create drone markers
            let marker = droneMarkers.get(drone.id);
            if (marker) {
              // Update position and rotation
              marker.setLatLng([drone.latitude, drone.longitude]);
              marker.setIcon(createDroneIcon(drone.yaw));
            } else {
              // Create new drone marker
              marker = L.marker([drone.latitude, drone.longitude], {
                icon: createDroneIcon(drone.yaw),
              }).addTo(map);
              droneMarkers.set(drone.id, marker);
            }

            // Update or create target markers
            const targetPosition = drone.targetPosition;
            if (targetPosition) {
              let targetMarker = targetMarkers.get(drone.id); // Use drone ID as the target marker ID
              if (targetMarker) {
                targetMarker.setLatLng([
                  targetPosition.latitude,
                  targetPosition.longitude,
                ]);
              } else {
                targetMarker = L.marker(
                  [targetPosition.latitude, targetPosition.longitude],
                  {
                    icon: createTargetIcon(),
                  }
                ).addTo(map);
                targetMarkers.set(drone.id, targetMarker); // Use drone ID as the target marker ID
              }
            } else {
              // Remove target marker if no target position
              const existingTargetMarker = targetMarkers.get(drone.id);
              if (existingTargetMarker) {
                map.removeLayer(existingTargetMarker);
                targetMarkers.delete(drone.id);
              }
            }
          });
        });

        return () => {
          unsubscribe();
          map.remove();
        };
      });
    }
  });

  // Function to animate map view to a drone's position
  function flyToDrone(latitude: number, longitude: number, zoomLevel = 16) {
    if (map) {
      map.flyTo([latitude, longitude], zoomLevel, {
        animate: true,
        duration: 1.0, // Duration in seconds
      });
    }
  }

  // Reactive statement to react to changes in the selected drone
  $: if ($selectedDrone) {
    flyToDrone($selectedDrone.latitude, $selectedDrone.longitude);
  }
</script>

<div bind:this={mapContainer} class="map-container"></div>

<style lang="scss">
  @import "leaflet/dist/leaflet.css";
  .map-container {
    height: 100%;
    width: 100%;
  }
</style>
