export class Kilometrage {
    idAvion: string;
    date: string;
    debutKm: string;
    finKm: number;

    public constructor(idAvion: string, date: string, debutKm: string,finKm: number) {
        this.idAvion = idAvion;
        this.date = date;
        this.debutKm = debutKm;
        this.finKm=finKm;
    }
}