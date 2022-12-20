import { defaultMaxListeners } from 'events';
import { Vehicule } from '../modele/Vehicule';
import { Assurance } from './Assurance';
import { Kilometrage } from './Kilometrage';
export const Details= async ()=> {
    const response = await Promise.all([
        // fetch(dataUrl),
        fetch("http://localhost:8080/Vehicules/"),
        fetch("http://localhost:8080/Kilometrages/"),
        fetch("http://localhost:8080/Assurances/")
    ]);
    const vehic=await response[0].json().then(res=>res.data as Vehicule[])
    const Kilometrages=await response[1].json().then(res=>res.data as Kilometrage[]);
    const Assurances=await response[2].json().then(res=>res.data as Assurance[]);
    for (let index = 0; index < vehic.length; index++) {
        const element = vehic[index];
        const listeKm:Kilometrage[]=[];
        for (let i = 0; i < Kilometrages.length; i++) {
            const Km = Kilometrages[i];
            if(Km.idVehicule==element.idVehicule) listeKm.push(Km);
        }
        vehic[index].listeKilometrage=listeKm;
        const listeAss:Assurance[]=[];
        for (let i = 0; i < Assurances.length; i++) {
            const Km = Assurances[i];
            if(Km.idVehicule==element.idVehicule) listeAss.push(Km);
        }
        vehic[index].listeAssurance=listeAss;
        vehic[index].indice=index;
    }
    const data={
        vehic,
        Kilometrages,
        Assurances
    };
    return vehic;
};

export default Details;
