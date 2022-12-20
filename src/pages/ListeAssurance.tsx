import { IonButton, IonContent, IonInput, IonItem, IonLabel, IonPage, IonSelect, IonSelectOption, IonText } from "@ionic/react";
import { ChangeEvent, useEffect, useState } from "react";
import { ListeAvion } from "../modele/GetData";
import { Controller, useForm } from 'react-hook-form';
import { Avion } from "../modele/Avion";

export const Assur: React.FC = () => {
    const [avion, setAvions] = useState<Avion[]>([]);
    const [statue, setStatue] = useState<boolean>(false);
    useEffect(() => {
        ListeAvion.call(avion).then(avi => {
            setAvions(avi);
            setStatue(true);
        });
    }, [])
    const [selectValue, setSelectValue] = useState<number>(1);
    console.log(selectValue);
    const listevehic: Avion[] = [];
    let now = new Date();
    console.log("Date=" + selectValue);
    now.setMonth(now.getMonth() + selectValue);
    avion.forEach(element => {
        if (element.listeAssurance.length != 0) {
            let fin = new Date(element.listeAssurance[0].dateFin);
            console.log(fin + ",," + now)
            console.log(fin >= now)
            if (fin >= now) {
                listevehic.push(element);
            }
        }
    });

    var link: string = "/DetailAvion/";
    if (statue == false) {
        return (<p>Loading...</p>);
    }
    return (
        <IonPage>
            <IonContent className="ion-padding">
                <IonText color="muted">
                    <h2>Assurance</h2>
                </IonText>
                <form>
                    <IonItem>
                        <IonLabel>Expiré en </IonLabel>
                        <IonSelect placeholder="Make a Selection" onIonChange={(e: any) => { setSelectValue(parseInt(e.target.value)) }} onClick={(e:any)=>{ setStatue(false)}}>
                            <IonSelectOption value="1">1 mois</IonSelectOption>
                            <IonSelectOption value="3">3 mois</IonSelectOption>
                        </IonSelect>
                    </IonItem>
                </form>
                {
                    listevehic.map(element =>
                        <IonItem>
                            <IonLabel>{element.idAvion}: {element.nom}-nombre de place:{element.nbrPlace}-modele:{element.modele} </IonLabel>
                            <IonButton slot="end" href={link.concat(element.idAvion)}>
                                Voir detail
                            </IonButton>
                        </IonItem>
                    )
                }
            </IonContent>
        </IonPage>
    );
};
export default Assur;