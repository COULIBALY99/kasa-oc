import React,{useState} from 'react'
import {useParams, Navigate} from 'react-router-dom';
import Dropdown from '../../components/dropdown/dropdown';
import LogementHeader from '../../components/section/logementHeader/logementHeader'
import logements from '../../assets/data.json'
import Carrousel from '../../components/carousel/carousel';
import './logement.css';



function Logement() {
  const [details] = useState(logements || []);
  const { logementId } = useParams();
  const logement = details.filter((elm) => elm.id === logementId)[0];
  /* 
   La methode "some" pour vérifier si l'ID du logement (logementId) correspond à l'un des IDs présents
   dans le tableau details. Si c'est le cas, le contenu du logement est rendu à l'écran. 
   Sinon, la page est redirigée vers /404 à l'aide de la fonction Navigate de react-router-dom.
  */
  const isValidLogementId = details.some((elm) => elm.id === logementId);

  return (
    <main className="logement">
      {isValidLogementId ? (
        <>
          <Carrousel slides={logement.pictures} />
          <LogementHeader
            title={logement.title}
            location={logement.location}
            host={logement.host}
            tags={logement.tags}
            rating={logement.rating}
          />
          <section className="details-container">
            <Dropdown data={logement.description} title={'Description'} />
            <Dropdown data={logement.equipments} title={'Equipement'} />
          </section>
        </>
      ) : (
        /* Rediriger vers /404 à l'aide de la fonction Navigate de react-router-dom. */
        <Navigate to="/404"/>
      )}
    </main>
  );
}

export default Logement;







