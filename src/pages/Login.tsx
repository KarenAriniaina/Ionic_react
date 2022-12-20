import { IonButton, IonContent, IonInput, IonItem, IonLabel, IonPage, IonSelect, IonSelectOption, IonText } from "@ionic/react";
import { stat } from "fs";
import { request } from "http";
import { Method } from "ionicons/dist/types/stencil-public-runtime";
import { useEffect, useState } from "react";
import { useForm } from "react-hook-form";
import { useParams } from "react-router";
import { Personne } from "../modele/Personne"

export const Login: React.FC = () => {
    const { control, handleSubmit } = useForm();
    const [email, setEmail] = useState<string>("");
    const [password, setpassword] = useState<string>("");
    const [personne, setPersonne] = useState<Personne>(new Personne("", "", email, "", password));
    const [error, setError] = useState<string>("");
    const [statue, setStatue] = useState<boolean>(false);
    var f = document.getElementById('forme');
    useEffect(() => {
        if (f != null) {
            var form = new FormData();
            form.append("email", email);
            form.append("passwords", password);
            /*statue*/
            fetch("https://webservice-production.up.railway.app/Personne", {
                method: 'POST',
                body: form
            })
                .then(res => res.json())
                .then(res => res.status as boolean)
                .then(res => setStatue(res))
            /*message*/
            fetch("https://webservice-production.up.railway.app/Personne", {
                method: 'POST',
                body: form
            })
                .then(res => res.json())
                .then(res => res.message as string)
                .then(res => setError(res))
            /* */
            if (statue != false) {
                fetch("https://webservice-production.up.railway.app/Personne", {
                    method: 'POST',
                    body: form
                })
                    .then(res => res.json())
                    .then(res => res.data as Personne[])
                    .then(res => {

                        setPersonne(res[0]);
                        localStorage.setItem("token", personne.token);
                        localStorage.setItem("idPersonne", personne.idPersonne);
                        window.location.assign("/ListeAvion");
                    })
            }
        }
    });
    if (localStorage.getItem("token") != null) {
        window.location.assign("/ListeAvion");
        return (<p></p>);
    }
    const registerUser = (data: any) => {
    }
    return (
        <IonPage>
            <IonContent className="ion-padding">
                <IonText color="muted">
                    <h2>Login</h2>
                </IonText>
                <form onSubmit={handleSubmit(registerUser)} id="forme">
                    <IonItem>
                        <IonLabel>Email</IonLabel>
                        <IonInput name="email" value={email} type="email" onIonChange={(e: any) => { setEmail(e.target.value) }} ></IonInput>
                    </IonItem>
                    <IonItem>
                        <IonLabel>Password</IonLabel>
                        <IonInput name="password" value={password} type="password" onIonChange={(e: any) => { setpassword(e.target.value) }} ></IonInput>
                    </IonItem>
                    <IonButton expand="block" type="submit" className="ion-margin-top">
                        se connecter
                    </IonButton>
                </form>
                {
                    <p>{error}</p>
                }
            </IonContent>
        </IonPage>
    );
}
export default Login;