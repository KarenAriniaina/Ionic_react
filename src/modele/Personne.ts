export class Personne {
    idPersonne: string;
    nom: string;
    mail: string;
    passwords:string;
    token:string;

    public constructor(idPersonne: string, nom: string, mail: string,token:string,passwords:string) {
        this.idPersonne = idPersonne;
        this.nom = nom;
        this.mail = mail;
        this.token=token;
        this.passwords=passwords;
    }

}