import React from 'react'
import MissionImage from './Images/purpose.png';
import VisionImage from './Images/vision.png';
import OnlineImage from './Images/online.png';
import './Styles/Cards.css'

function Cards() {
    return (
      <div className="Cards">
        <div className="CardItem" id="MissionCard">
            <img className="CardImage" src={MissionImage} width="100" height="100" alt="Mission"></img>
            <div className="CardContent">
                <h2 className="CardTitle">Notre Mission</h2>
                <p className="CardText">Chez JN Freight, notre mission est de fournir des solutions logistiques efficaces et fiables adaptées aux besoins uniques de nos clients. Nous nous engageons à assurer un transport sans faille, des livraisons ponctuelles et des services économiques. En tirant parti de notre expertise et de technologies innovantes, nous visons à simplifier les complexités de la logistique pour nos clients, leur permettant ainsi de prospérer sur le marché mondial.</p>
            </div>
        </div>
        <div className="CardItem" id="VisionCard">
            <img className="CardImage" src={VisionImage} width="100" height="100" alt="Vision"></img>
            <div className="CardContent">
                <h2 className="CardTitle">Notre Vision</h2>
                <p className="CardText">Notre vision chez JN Freight est de devenir une force de premier plan dans l'industrie de la logistique, reconnue pour notre dévouement inébranlable à la satisfaction du client, à l'excellence opérationnelle et à la durabilité. Nous aspirons à étendre notre portée à l'échelle mondiale tout en maintenant une approche locale, en favorisant des partenariats solides avec nos clients et nos parties prenantes. Grâce à l'innovation continue et à une orientation centrée sur le client, nous visons à établir de nouvelles normes dans le secteur de la logistique, créant ainsi un impact positif sur les entreprises et les communautés que nous servons.</p>
            </div>
        </div>
        <div className="CardItem" id="OnlineCard">
            <img className="CardImage" src={OnlineImage} width="100" height="100" alt="Services Enligne"></img>
            <div className="CardContent">
                <h2 className="CardTitle">Services Enligne</h2>
                <p className="CardText">Notre plateforme logistique offre aux utilisateurs la possibilité de passer des commandes, de suivre en temps réel l'état de leurs marchandises et de consulter l'historique complet de leurs transactions, garantissant ainsi une expérience client transparente et efficace.</p>
            </div>
        </div>
      </div>
    );
  }
  
  export default Cards;