// place files you want to import through the `$lib` alias in this folder.
interface DroneData {
    id: string;
    callsign: string;
    longitude: number;
    latitude: number;
    altitude: number;
    speed: number;
    roll: number;
    pitch: number;
    yaw: number;
    targetMode: 'locked' | 'circle' | 'search';
    battery: number,
    activetime: number
  }