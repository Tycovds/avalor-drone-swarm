// DroneStore.ts
  import { writable, derived } from 'svelte/store';

  // Initial drone data
  const initialDrones: DroneData[] = [
    // {
    //   id: 'drone1',
    //   callsign: 'Drone 1',
    //   latitude: 51.476931,
    //   longitude: 5.343987,
    //   altitude: 22030,
    //   speed: 10,
    //   roll: 5,
    //   pitch: 3,
    //   yaw: 0,
    //   targetMode: 'locked',
    //   battery: 75,
    //   activetime: 20
    // },
    // {
    //   id: 'drone2',
    //   callsign: 'Drone 2',
    //   latitude: 51.479043,
    //   longitude:5.345811,
    //   altitude: 10000,
    //   speed: 8,
    //   roll: 5,
    //   pitch: 3,
    //   yaw: 120,
    //   targetMode: 'locked',
    //   battery: 20,
    //   activetime: 40
    // },

  ];

  // Create writable store with initial data
  export const droneStore = writable<DroneData[]>(initialDrones);
  export const selectedDroneId = writable<string | null>(null);


// Derived store to get the selected drone data
export const selectedDrone = derived(
  [droneStore, selectedDroneId],
  ([$droneStore, $selectedDroneStore]) => {
    if ($selectedDroneStore) {
      return $droneStore.find(drone => drone.id === $selectedDroneStore) || null;
    }
    return null;
  }
);


