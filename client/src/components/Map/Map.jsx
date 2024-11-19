import React, { useState, useEffect } from 'react';
import GoogleMapReact from 'google-map-react';
import { useMediaQuery } from '@mui/material';
import LocationOnOutlinedIcon from '@mui/icons-material/LocationOnOutlined';
import useStyles from './styles';
const apiKey = process.env.REACT_APP_GOOGLE_MAPS_API_KEY

const Map = ({ address }) => {

    const classes = useStyles();
    const isMobile = useMediaQuery('(min-width:600px)');
    const [coordinates, setCoordinates] = useState({ lat: 40.7128, lng: -74.0060 }); // Default to NYC
    const [marker, setMarker] = useState(null);

    useEffect(() => {
        if (address) {
            const geocoder = new window.google.maps.Geocoder();
            geocoder.geocode({ address }, (results, status) => {
                if (status === "OK") {
                    const location = results[0].geometry.location;
                    setCoordinates({ lat: location.lat(), lng: location.lng() });
                } else {
                    console.error("Geocode was not successful:", status);
                }
            });
        }
    }, [address]);

    return (
        <div className={classes.mapContainer}>
            <GoogleMapReact
                bootstrapURLKeys={{ key: apiKey }}
                defaultCenter={coordinates}
                center={coordinates}
                defaultZoom={14}
                margin={[50, 50, 50, 50]}
                options={''}
                onChange={''}
                onChildClick={''}
            >
                {/* Add a marker at the updated coordinates */}
                <div
                    lat={coordinates.lat}
                    lng={coordinates.lng}
                    className={classes.markerContainer}
                >
                    <LocationOnOutlinedIcon color="primary" fontSize="large" />
                </div>
            </GoogleMapReact>
        </div>
    );
};

export default Map;
