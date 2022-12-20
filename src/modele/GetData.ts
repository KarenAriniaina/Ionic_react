import { Assurance } from './Assurance';
import { Avion } from './Avion';
import { DateEntretien } from './DateEntretien';
import { Kilometrage } from './Kilometrage';

export const ListeAvion = async () => {
    const promise = await fetch("http://localhost:8080/Avions/");
    const avion = await promise.json().then(res => res.data as Avion[]);
    for (let index = 0; index < avion.length; index++) {
        const element = avion[index];
        const promiseAssurance = await fetch("http://localhost:8080/Avion/" + element.idAvion + "/Assurances/",{});
        const Assurance = await promiseAssurance.json().then(res => res.data as Assurance[]);
        avion[index].listeAssurance=Assurance;
    }
    return avion;
}

export const DetailsAvion = async (id: string) => {
    const promise = await fetch("http://localhost:8080/Avion/" + id + "/");
    const avion = await promise.json().then(res => res.data as Avion[]);
    const av=avion[0];
    //kilometrage
    const promiseKilometrage = await fetch("http://localhost:8080/Avion/" + id + "/Kilometrages/", {
        headers: {
            'token': `${localStorage.getItem("token")}`,
            'idPersonne': `${localStorage.getItem("idPersonne")}`
        }
    });
    const Kilometrage = await promiseKilometrage.json().then(res => res.data as Kilometrage[]);
    av.listeKilometrage = Kilometrage;
    //entretien
    const promiseDateEntretien = await fetch("http://localhost:8080/Avion/" + id + "/DateEntretiens/", {
        headers: {
            'token': `${localStorage.getItem("token")}`,
            'idPersonne': `${localStorage.getItem("idPersonne")}`
        }
    });
    const DateEntretien = await promiseDateEntretien.json().then(res => res.data as DateEntretien[]);
    av.listeEntretien = DateEntretien;
    //Assurance
    const promiseAssurance = await fetch("http://localhost:8080/Avion/" + id + "/Assurances/");
    const Assurance = await promiseAssurance.json().then(res => res.data as Assurance[]);
    av.listeAssurance = Assurance;
    return av;
}

export default DetailsAvion;
