/* importando o react */
import React, { useEffect, useState } from 'react'
/* importando o icone do link */
import { Link } from 'react-router-dom'
/* importando a imagem do mapa */
import mapMakerImg from '../images/map-marker.svg'
/* importando o icone de sinal de + */
import { FiPlus, FiArrowRight } from 'react-icons/fi'
/* importando o estilo da página */
import '../styles/pages/orphanages-map.css'
/* importando o react leaflet para utilizar o mapa */
import { Map, TileLayer, Marker, Popup } from 'react-leaflet'


import mapIcon from '../utils/mapIcon'
import api from '../services/api'

interface Orphanage {
    id: number;
    latitude: number;
    longitude: number;
    name: string;
};


function OrphanagesMap() {
    /* utilizando o hooks para listar e mostrar os orfanatos no mapa */
    const [orphanages, setOrphanages] = useState<Orphanage[]>([]);

    console.log(orphanages);

    useEffect(() => {
        api.get('orphanages').then(response => {
            setOrphanages(response.data);
            
        })
    }, [])

    return (
        <div id="page-map">
            <aside>
                {/* cabeçalho */}
                <header>
                    <img src={mapMakerImg} alt="Happy"/>

                    <h2>Escolha um orfanato no mapa</h2>
                    <p>Muitas crianças estão esperando a sua visita :)</p>
                </header>
                {/* rodapé */}
                <footer>
                    <strong>Maceió </strong>
                    <span>Alagoas</span>
                </footer>
            </aside>
            {/* configurando o posicionamento do mapa para mostrar na tela */}
            <Map
                center={[-9.5578549,-35.7297673]}
                zoom={15}
                style={{ width: '100%', height: '100%' }}
            >
                <TileLayer url="https://a.tile.openstreetmap.org/{z}/{x}/{y}.png" />

                {orphanages.map(orphanage => {
                    return (
                     <Marker 
                        key={orphanage.id}
                        icon={mapIcon}
                        position={[orphanage.latitude,orphanage.longitude]}
                        >
                        <Popup closeButton={false} minWidth={240} maxWidth={240} className="map-popup">
                            {orphanage.name}
                            <Link to={`/orphanages/${orphanage.id}`}>
                            <FiArrowRight  size={20} color="#FFF" />
                            </Link>
                        </Popup>
                     </Marker>
                    )
                })}

            </Map>
            {/* botão da página de cadastro de orfanato */}
            <Link to="/orphanages/create" className="create-orphanage">
                <FiPlus size={32} color="#FFF" />
            </Link>
        </div>
    );
}
/* exportando a página de mapa dos orfanatos */
export default OrphanagesMap;
