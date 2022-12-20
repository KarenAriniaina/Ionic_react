import { IonButton, IonContent, IonGrid, IonItem, IonLabel, IonRow, IonTab } from '@ionic/react';
import { useEffect, useState } from 'react';
import { Avion } from '../modele/Avion';
import { ListeAvion } from '../modele/GetData';
export const Avi: React.FC = () => {
  const [avions, setAvion] = useState<Avion[]>([]);
  const [statue, setStatue] = useState<boolean>(false);
  useEffect(() => {
    ListeAvion.call(avions).then(avi =>{
      setAvion(avi);
      setStatue(true);
    });
  }, [])
  var link: string = "/DetailAvion/";
  if (statue == false) {
    return (<p>Loading...</p>);
  }
  else {
    return (
      <div>
        {
          avions.map(element =>
            <IonItem>
              <IonLabel>{element.idAvion}: {element.nom}-nombre de place:{element.nbrPlace}-modele:{element.modele} </IonLabel>
              <IonButton slot="end" href={link.concat(element.idAvion)}>
                Voir detail
              </IonButton>
            </IonItem>
          )
        }
      </div>

    );
  }
};

export default Avi;