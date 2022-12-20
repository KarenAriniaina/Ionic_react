import { Redirect, Route } from 'react-router-dom';
import {
  IonApp,
  IonButton,
  IonIcon,
  IonLabel,
  IonRouterOutlet,
  IonTabBar,
  IonTabButton,
  IonTabs,
  setupIonicReact
} from '@ionic/react';
import { IonReactRouter } from '@ionic/react-router';
import { ellipse, square, triangle } from 'ionicons/icons';
import Tab1 from './pages/Tab1';
import Tab2 from './pages/Tab2';
import Tab3 from './pages/Tab3';
import Avi from './pages/ListeAvion';
import DetailAvion from './pages/DetailAvion';

/* Core CSS required for Ionic components to work properly */
import '@ionic/react/css/core.css';

/* Basic CSS for apps built with Ionic */
import '@ionic/react/css/normalize.css';
import '@ionic/react/css/structure.css';
import '@ionic/react/css/typography.css';

/* Optional CSS utils that can be commented out */
import '@ionic/react/css/padding.css';
import '@ionic/react/css/float-elements.css';
import '@ionic/react/css/text-alignment.css';
import '@ionic/react/css/text-transformation.css';
import '@ionic/react/css/flex-utils.css';
import '@ionic/react/css/display.css';

/* Theme variables */
import './theme/variables.css';
import Assur from './pages/ListeAssurance';
import Login from './pages/Login';

setupIonicReact();

const App: React.FC = () => (
  <IonApp>
    <IonReactRouter>
      <IonTabs>
        <IonRouterOutlet>
          <Route exact path="/ListeAvion">
            <Avi />
          </Route>
          <Route exact path="/">
            <Avi />
          </Route>
          <Route exact path="/DetailAvion/:id" >
            <DetailAvion />
          </Route>
          <Route exact path="/Login">
            <Login />
          </Route>
          <Route exact path="/Assurance">
            <Assur />
          </Route>
        </IonRouterOutlet>
        <IonTabBar slot="bottom">
          <IonTabButton tab="Avi" href="/ListeAvion" onClick={()=>{window.location.assign("/ListeAvion")}}>
            <IonIcon icon={ellipse} />
            <IonLabel>ListeAvion</IonLabel>
          </IonTabButton>
          <IonTabButton tab="Assur" href="/Assurance">
            <IonIcon icon={square} />
            <IonLabel>Assurance</IonLabel>
          </IonTabButton>
        </IonTabBar>
      </IonTabs>
    </IonReactRouter>
  </IonApp>
);

export default App;
