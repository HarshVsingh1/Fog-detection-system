import { useState, useEffect } from 'react';
import { GoogleMap, LoadScript, Marker, DirectionsService, DirectionsRenderer } from '@react-google-maps/api';

function Map() {

  const [currentPos, setCurrentPos] = useState(null); 
  const [directions, setDirections] = useState(null);

  const apiKey = "AIzaSyC7PC0MNV1z9dCb_7gUMDDMq7aw4CYuZAE";

  const mapCenter = currentPos?.lat 
    ? currentPos
    : { lat: 40.7831, lng: -73.9712 };
  
  useEffect(() => {
    getUserLocation();
  }, []);

  function getUserLocation() {
    if (navigator.geolocation) {
      navigator.geolocation.getCurrentPosition(position => {
        setCurrentPos({
          lat: position.coords.latitude,
          lng: position.coords.longitude  
        });
      });
    }
  }

  function routeDestination(destination) {
    if (!currentPos) return;

    const directionsService = new window.google.maps.DirectionsService();

    directionsService.route({
      origin: currentPos,
      destination: destination,
      travelMode: window.google.maps.TravelMode.DRIVING
    }, (result, status) => {
      if (status === window.google.maps.DirectionsStatus.OK) {
        setDirections(result);
      }
    });

  }

  function handleClick(event) {
    routeDestination({
     lat: event.latLng.lat(),
     lng: event.latLng.lng() 
    });
  }

  return (
    <LoadScript 
      googleMapsApiKey={apiKey}>
     <GoogleMap
        onClick={handleClick} 
        center={mapCenter}
        zoom={14}
        mapContainerStyle={{ width: '100%', height: '100vh' }}
     >
       {currentPos && <Marker position={currentPos} />}

       {directions && <DirectionsRenderer directions={directions} />}
     </GoogleMap>
    </LoadScript>
  );
}

export default Map;