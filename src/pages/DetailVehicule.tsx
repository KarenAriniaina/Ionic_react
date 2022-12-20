import { useEffect, useState } from 'react';
import { useParams } from 'react-router';
import Details from '../modele/GetData';
import { Kilometrage } from '../modele/Kilometrage';
import { Vehicule } from '../modele/Vehicule';

export const DetailVehic: React.FC = () => {
  const [vehicules, setVehicules] = useState<Vehicule>(new Vehicule("", "", "", [], [], 0));
  const id = useParams<{ id: string }>();
  const indice = parseInt(id.id);
  const [Kilometrages, setKilometrage] = useState<Kilometrage[]>([]);
  useEffect(() => {
    Details.call(vehicules).then(vehic => setVehicules(vehic[indice]));
    Details.call(vehicules).then(vehic => setKilometrage(vehic[indice].listeKilometrage))
  }, [])
  if (localStorage.getItem("token") != null) {
    if (Kilometrages.length != 0) {
      return (
        <div>
          <h1>Detail vehicule {vehicules.idVehicule}</h1>
          <p>id du vehicule:{vehicules.idVehicule}</p>
          <p>Marque du vehicule:{vehicules.nomMarque}</p>
          <p>Plaque du vehicule:{vehicules.plaque}</p>
          <table border={1}>
            <thead>
              <tr>
                <th>Date</th>
                <th>DebutKm</th>
                <th>FinKm</th>
              </tr>
            </thead>
            <tbody>
              {
                Kilometrages.map(elements =>
                  <tr>
                    <td>{elements.date}</td>
                    <td>{elements.debutKm}</td>
                    <td>{elements.finKm}</td>
                  </tr>
                )
              }
            </tbody>
          </table>
        </div>
      );
    }
    return (
      <div>
        <h1>Detail vehicule {vehicules.idVehicule}</h1>
        <p>id du vehicule:{vehicules.idVehicule}</p>
        <p>Marque du vehicule:{vehicules.nomMarque}</p>
        <p>Plaque du vehicule:{vehicules.plaque}</p>
        <p>aucun kilometrage a montrer</p>
      </div>
    );
  }
  return (
    <p>vous devez vous logger <a href='/Login'>Login</a></p>
  );
};

export default DetailVehic;