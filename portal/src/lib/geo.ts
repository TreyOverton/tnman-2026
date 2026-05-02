export type GpsFix = { lat: number; lon: number; accuracy: number };

export function getCurrentPosition(timeoutMs = 8000): Promise<GpsFix> {
  return new Promise((resolve, reject) => {
    if (typeof navigator === 'undefined' || !navigator.geolocation) {
      reject(new Error('Geolocation not available on this device.'));
      return;
    }
    navigator.geolocation.getCurrentPosition(
      (pos) => {
        resolve({
          lat: pos.coords.latitude,
          lon: pos.coords.longitude,
          accuracy: pos.coords.accuracy,
        });
      },
      (err) => reject(new Error(humanGeoError(err))),
      { enableHighAccuracy: true, timeout: timeoutMs, maximumAge: 30000 }
    );
  });
}

function humanGeoError(err: GeolocationPositionError): string {
  switch (err.code) {
    case err.PERMISSION_DENIED:
      return 'Location permission denied. Enable in browser settings to attach GPS.';
    case err.POSITION_UNAVAILABLE:
      return 'Location unavailable. Try again outdoors or near a window.';
    case err.TIMEOUT:
      return 'Location lookup timed out. Try again.';
    default:
      return 'Could not get location.';
  }
}

export function formatLatLon(fix: GpsFix): string {
  return `${fix.lat.toFixed(5)}, ${fix.lon.toFixed(5)} (±${Math.round(fix.accuracy)}m)`;
}
