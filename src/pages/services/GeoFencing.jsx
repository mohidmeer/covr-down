import React, { useRef } from 'react'
import { MapContainer, Marker, Polygon, Popup, TileLayer } from 'react-leaflet'
import 'leaflet/dist/leaflet.css';

const GeoFencing = () => {
    const triangleCoords = [
        [51.5074, -0.1278],
        [51.5112, -0.1237],
        [51.5074, -0.1195],
    ];

    const mapRef = useRef(null);
    return (
        <div className='flex flex-col gap-4 w-full'>
            <div className='f'>
                <h5>GeoFencing</h5>
            </div>
            <div className='h-[70vh] overflow-hidden border'>
                <MapContainer
                    ref={mapRef}
                    center={[51.5074, -0.1278]}
                    zoom={16}
                    style={{ height: '100%' }}
                >
                    <TileLayer
                        url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
                        maxZoom={19}
                    />
                    <Polygon positions={triangleCoords} color="red" />
                    <Marker position={[51.5074, -0.1278]}>
                        <Popup>
                            London City Hall <br /> Home of the Mayor of London
                        </Popup>
                    </Marker>
                </MapContainer>
            </div>
        </div>
    )
}

export default GeoFencing