export class Assurance {
    idVehicule: string;
    dateDebut: string;
    dateFin: string;
    moisFin: number;

    public constructor(idVehicule: string, dateDebut: string, dateFin: string,moisFin: number) {
        this.idVehicule = idVehicule;
        this.dateDebut = dateDebut;
        this.dateFin = dateFin;
        this.moisFin=moisFin;
    }
}