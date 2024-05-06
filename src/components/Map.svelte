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
          const createRotatedIcon = (yaw:number) => L.divIcon({
            html: `<img src="/drone.svg" style="transform: rotate(${yaw}deg); width: 38px; height: 95px;">`,
            iconSize: [38, 95],
            iconAnchor: [19, 47] // Adjusted to center the icon based on size
          });
  
          // Create and manage markers for drones
          const markers = new Map(); // Using a Map to track markers by drone ID
  
          const unsubscribe = droneStore.subscribe(drones => {
            // Update existing markers or create new ones
            drones.forEach(drone => {
              let marker = markers.get(drone.id);
              if (marker) {
                // Update position and rotation
                marker.setLatLng([drone.latitude, drone.longitude]);
                marker.setIcon(createRotatedIcon(drone.yaw));
              } else {
                // Create new marker
                marker = L.marker([drone.latitude, drone.longitude], {
                  icon: createRotatedIcon(drone.yaw),
                }).addTo(map);
                // marker.bindPopup(`<b>${drone.callsign}</b><br>Speed: ${drone.speed} km/h`);
                markers.set(drone.id, marker);
              }
            });
  
            // Remove markers not in the current data
            markers.forEach((marker, id) => {
              if (!drones.some(drone => drone.id === id)) {
                map.removeLayer(marker);
                markers.delete(id);
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
        duration: 1.0 // Duration in seconds
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
  