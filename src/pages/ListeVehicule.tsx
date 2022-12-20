import { IonButton, IonContent, IonGrid, IonItem, IonLabel, IonRow, IonTab } from '@ionic/react';
import { useEffect, useState } from 'react';
import { Vehicule } from '../modele/Vehicule';
import { Details } from '../modele/GetData';

export const Vehic: React.FC = () => {
  const [vehicules, setVehicules] = useState<Vehicule[]>([]);
  useEffect(() => {
    Details.call(vehicules).then(vehic=>setVehicules(vehic))
  }, [])
  var link:string="/DetailVehicule/";
  return (
    <div>
      {
        vehicules.map(element =>
          <IonItem>
            <IonLabel>{element.idVehicule}: { element.nomMarque }</IonLabel>
            <IonButton slot="end" href={link.concat(element.indice.toString())}>
              Voir detail
            </IonButton>
          </IonItem>
        )
      }
    </div>

  );
};

export default Vehic;