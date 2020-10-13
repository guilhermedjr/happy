import React from 'react';
import {Link} from 'react-router-dom';
import {FiPlus} from 'react-icons/fi';
import {Map, TileLayer} from 'react-leaflet';
import mapMakerImg from '../images/map-marker.svg';
import '../styles/pages/orphanages-map.css';

function OrphanagesMap(){
    return (
      <div id="page-map">
         <aside>
            <header>
               <img src={mapMakerImg} alt="Happy"/>
               <h2>Escolha um orfanato no mapa</h2>
               <p>Muitas crianças estão esperando a sua visita :)</p>
            </header>
            <footer>
               <strong>Santos</strong>
               <strong>São Paulo</strong>
            </footer>
        </aside>
        <Map 
          center={[-23.947202,-46.3336866]}
          zoom={15}
          style={{ width: '100%', height: '100%' }}
        >
           <TileLayer 
           url={`https://api.mapbox.com/styles/v1/mapbox/light-v10/tiles//{z}/{x}/{y}@2x?access_token=${process.env.REACT_APP_MAPBOX_TOKEN}`} 
           />
        </Map>
        <Link to='' className='create-orphanate'>
           <FiPlus size={32} color="#fff"/>
        </Link>
      </div>
    );
}

export default OrphanagesMap;