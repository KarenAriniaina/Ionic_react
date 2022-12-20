import { IonButton, IonContent, IonInput, IonItem, IonLabel, IonPage, IonSelect, IonSelectOption, IonText } from "@ionic/react";
import { ChangeEvent, useEffect, useState } from "react";
import Details from "../modele/GetData";
import { Vehicule } from "../modele/Vehicule";
import { Controller, useForm } from 'react-hook-form';

export const Assur: React.FC = () => {
    const [vehicules, setVehicules] = useState<Vehicule[]>([]);
    useEffect(() => {
        Details.call(vehicules).then(vehic => setVehicules(vehic))
    }, [])
    const [selectValue, setSelectValue] = useState<number>(1);
    console.log(selectValue);
    const listevehic: Vehicule[] = [];
        let now = new Date();
        console.log("Date="+selectValue);
        now.setMonth(now.getMonth() + selectValue);
        vehicules.forEach(element => {
            if (element.listeAssurance.length != 0) {
                let fin = new Date(element.listeAssurance[0].dateFin);
                console.log(fin+",,"+now)
                console.log(fin>=now)
                if (fin >= now) {
                    console.log("vari")
                    listevehic.push(element);
                }
            }
        });

    const { control, handleSubmit } = useForm();
    const registerUser = (data: any) => {
        //Update();
        console.log(listevehic)
        //console.log('creating a new user account with: ', email);
    }
    var link: string = "/DetailVehicule/";
    return (
        <IonPage>
            <IonContent className="ion-padding">
                <IonText color="muted">
                    <h2>Assurance</h2>
                </IonText>
                <form onSubmit={handleSubmit(registerUser)}>
                    <IonItem>
                        <IonLabel>Expiré en </IonLabel>
                        <IonSelect placeholder="Make a Selection" onIonChange={(e: any) => { setSelectValue(parseInt(e.target.value)) }}>
                            <IonSelectOption value="1">1 mois</IonSelectOption>
                            <IonSelectOption value="3">3 mois</IonSelectOption>
                        </IonSelect>
                    </IonItem>
                    <IonButton expand="block" type="submit" className="ion-margin-top">
                        Register
                    </IonButton>
                </form>
                {
                listevehic.map(element =>
                    <IonItem>
                        <IonLabel>{element.idVehicule}: {element.nomMarque}</IonLabel>
                        <IonButton slot="end" href={link.concat(element.indice.toString())}>
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