export class Kilometrage {
    idVehicule: string;
    date: string;
    debutKm: string;
    finKm: number;

    public constructor(idVehicule: string, date: string, debutKm: string,finKm: number) {
        this.idVehicule = idVehicule;
        this.date = date;
        this.debutKm = debutKm;
        this.finKm=finKm;
    }
}