
export default function randomCoordinate(lat: number, lon: number, distance: number): { latitude: number, longitude: number } {
    const earthRadius = 6371000; // Earth's radius in meters
    const angularDistance = distance / earthRadius; // Convert distance to radians

    // Convert latitude and longitude from degrees to radians
    const latRad = (lat * Math.PI) / 180;
    const lonRad = (lon * Math.PI) / 180;

    // Calculate new latitude
    const newLatRad = Math.asin(
        Math.sin(latRad) * Math.cos(angularDistance) +
        Math.cos(latRad) * Math.sin(angularDistance) * Math.cos(Math.random() * 2 * Math.PI)
    );

    // Calculate new longitude
    const newLonRad = lonRad + Math.atan2(
        Math.sin(Math.random() * 2 * Math.PI) * Math.sin(angularDistance) * Math.cos(latRad),
        Math.cos(angularDistance) - Math.sin(latRad) * Math.sin(newLatRad)
    );

    // Convert new latitude and longitude from radians to degrees
    const newLat = (newLatRad * 180) / Math.PI;
    const newLon = (newLonRad * 180) / Math.PI;

    return { latitude: newLat, longitude: newLon };
}

