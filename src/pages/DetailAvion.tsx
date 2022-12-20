import { useEffect, useState } from 'react';
import { useParams } from 'react-router';
import { Avion } from '../modele/Avion';
import DetailsAvion from '../modele/GetData';
import { Kilometrage } from '../modele/Kilometrage';

export const DetailAvion: React.FC = () => {
  const [avion, setAvion] = useState<Avion>(new Avion("", "", 0, "", ""));
  const id = useParams<{ id: string }>();
  const idAv = id.id;
  const [statue, setStatue] = useState<boolean>(false);
  useEffect(() => {
    DetailsAvion(idAv).then(av => {
      setAvion(av);
      setStatue(true);
    });
  }, [])
  if (localStorage.getItem("token") != null) {
    //if (avion.listeKilometrage.length != 0) {
    if (statue == false) {
      return (<p>Loading...</p>);
    }
    return (
      <div>
        <h1>Detail Avion: {avion.idAvion}</h1>
        <p>id de l'avion:{avion.idAvion}</p>
        <p>Nom de l'avion:{avion.nom}</p>
        <p>Modele de l'avion:{avion.modele}</p>
        <p>Nombre de place:{avion.nbrPlace}</p>
        <h2>Kilometrage</h2>
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
              avion.listeKilometrage.map(elements =>
                <tr>
                  <td>{elements.date}</td>
                  <td>{elements.debutKm}</td>
                  <td>{elements.finKm}</td>
                </tr>
              )
            }
          </tbody>
        </table>
        <h2>Entretien</h2>
        <table border={1}>
          <thead>
            <tr>
              <th>Date</th>
              <th>Intitule</th>
            </tr>
          </thead>
          <tbody>
            {
              avion.listeEntretien.map(elements =>
                <tr>
                  <td>{elements.date}</td>
                  <td>{elements.intitule}</td>
                </tr>
              )
            }
          </tbody>
        </table>
      </div>
    );
    //}
  }
  return (
    <p>vous devez vous logger <a href='/Login'>Login</a></p>
  );
};

export default DetailAvion;