import React from 'react'
import Dropdown from '../../components/dropdown/dropdown';
import './about.css';



const qualities = [
  {
    title: "Fiabilité",
    description:
      "Les annonces postées sur Kasa garantissent une fiabilité totale. Les photos sont conformes aux logements, et toutes les informations sont régulièrement vérifiées  par nos équipes.",
  },
  {
    title: "Respect",
    description:
      "La bienveillance fait partie des valeurs fondatrices de Kasa. Tout comportement discriminatoire ou de perturbation du voisinage entraînera une exclusion de notre plateforme.",
  },

  {
    title: "Service",
    description:
      "Nos équipes se tiennent à votre disposition pour vous fournir une expérience parfaite. N'hésitez pas à nous contacter si vous avez la moindre question.",
  },

  {
    title: "Sécurité",
    description:
      "La sécurité est la priorité de Kasa. Aussi bien pour nos hôtes que pour les voyageurs, chaque logement correspond aux critères de sécurité établis par nos services. En laissant une note aussi bien à l'hôte qu'au locataire, cela permet à nos équipes de vérifier que les standards sont bien respectés. Nous organisons également des ateliers sur la sécurité domestique pour nos hôtes.",
  },
];
function About() {
  return (
    <main className='about__main'>
      <section className='about__image-container'>
        <div className='about__image'>
          <img src="./kalen-emsley-Bkci_8qcdvQ-unsplash 2.png" alt='aboutImage' />
          <p className='about-overlay'></p>
        </div>
      </section>
      <section className='about__qualities'>
        {qualities.map((quality, index) => (
          <Dropdown key={index} data ={quality.description} title={quality.title}  />
        ))}
      </section>
    </main>
  );
}

export default About;
