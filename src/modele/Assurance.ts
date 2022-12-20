export class Assurance {
    idAvion: string;
    dateDebut: string;
    dateFin: string;
    moisFin: number;

    public constructor(idAvion: string, dateDebut: string, dateFin: string,moisFin: number) {
        this.idAvion = idAvion;
        this.dateDebut = dateDebut;
        this.dateFin = dateFin;
        this.moisFin=moisFin;
    }
}