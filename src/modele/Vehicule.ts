import { Assurance } from "./Assurance";
import { Kilometrage } from "./Kilometrage";

export class Vehicule {
    idVehicule: string;
    plaque: string;
    nomMarque: string;
    listeAssurance:Assurance[];
    listeKilometrage:Kilometrage[];
    indice:number;

    public constructor(idVehicule: string, plaque: string, nomMarque: string,listeAssurance:Assurance[],listeKilometrage:Kilometrage[],indice:number) {
        this.idVehicule = idVehicule;
        this.plaque = plaque;
        this.nomMarque = nomMarque;
        this.listeAssurance=listeAssurance;
        this.listeKilometrage=listeKilometrage;
        this.indice=indice;
    }

    public getListeAssurance() : Assurance[] {
        return this.listeAssurance;
    }
    public setListeAssurance(as:Assurance[]){
        this.listeAssurance=as;
    }
}