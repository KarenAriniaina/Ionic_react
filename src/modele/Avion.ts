import { Assurance } from "./Assurance";
import { DateEntretien } from "./DateEntretien";
import { Kilometrage } from "./Kilometrage";

export class Avion{
    idAvion:string;
    nom:string;
    nbrPlace:number;
    modele:string;
    photoAvion:string;
    listeKilometrage:Kilometrage[];
    listeAssurance:Assurance[];
    listeEntretien:DateEntretien[];

    public constructor(idAvion:string,nom:string,nbrPlace:number,modele:string,photo:string){
        this.idAvion=idAvion;
        this.nom=nom;
        this.nbrPlace=nbrPlace;
        this.modele=modele;
        this.photoAvion=photo;
        this.listeKilometrage=[];
        this.listeAssurance=[];
        this.listeEntretien=[];
    }
}