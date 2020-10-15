import React from 'react';
import { FiPlus, FiArrowRight } from 'react-icons/fi'
import { Link } from 'react-router-dom';
import { Map, TileLayer, Marker, Popup } from 'react-leaflet';
import mapMarkerImg from '../images/map-marker.svg';
import happyMapIcon from '../utils/mapIcon';

import '../styles/pages/orphanagesMap.css';

function OrphanageMap() {
    return (
        <div id="page-map">
            <aside>
                <header>
                    <img src={mapMarkerImg} alt="Happy" />

                    <h2>Escolha um orfanato no mapa</h2>
                    <p>Muitas crianças estão esperando a sua visita :)</p>
                </header>

                <footer>
                    <strong>São Paulo</strong>
                    <span>Bauru</span>
                </footer>
            </aside>

            <Map 
                center={[-22.3418603,-49.0803652]}   
                zoom={15}
                style={{ width: '100%', height: '100%' }} 
            >
                {/* <TileLayer url="https://a.tile.openstreetmap.org/{z}/{x}/{y}.png" /> */}
                <TileLayer 
                    url={`https://api.mapbox.com/styles/v1/mapbox/light-v10/tiles/256/{z}/{x}/{y}@2x?access_token=${process.env.REACT_APP_MAPBOX_TOKEN}`} 
                />

                <Marker
                    icon={happyMapIcon}
                    position={[-22.3357004,-49.0618727]} 
                >
                    <Popup closeButton={false} minWidth={240} maxWidth={240} className="map-popup">
                        Lar das Meninas
                        <Link to="/orphanages/1">
                            <FiArrowRight size={20} color="#FFF"/>
                        </Link>
                    </Popup>
                </Marker>
                    
                
            </Map>

            <Link to="/orphanages/create" className="create-orphanage">
                <FiPlus size={32} color="#FFF" />
            </Link>
        </div>
    );
}

export default OrphanageMap;