export class DateEntretien{
    idAvion:string;
    intitule:string;
    date:string;

    public constructor(idAvion:string,intitule:string,date:string){
        this.idAvion=idAvion;
        this.intitule=intitule;
        this.date=date;
    }
}