import React from "react";
// import { Route } from 'react-router-dom';

import Header from "./components/Header";
import Router from "./Router";
/* Core CSS required for Ionic components to work properly */
import "@ionic/react/css/core.css";
import "./variables.css";
/* Basic CSS for apps built with Ionic */
import "@ionic/react/css/normalize.css";
import "@ionic/react/css/structure.css";
import "@ionic/react/css/typography.css";

/* Optional CSS utils that can be commented out */
import "@ionic/react/css/padding.css";
import "@ionic/react/css/float-elements.css";
import "@ionic/react/css/text-alignment.css";
import "@ionic/react/css/text-transformation.css";
import "@ionic/react/css/flex-utils.css";
import "@ionic/react/css/display.css";
import {
  IonApp,
  IonLabel,
  IonTabBar,
  IonTabButton,
  setupIonicReact,
} from "@ionic/react";
import {HiHome} from "react-icons/hi"
import {TiWeatherPartlySunny} from "react-icons/ti"
setupIonicReact();
const App: React.FC = () => {
  return (
    <IonApp>
      <Header />
      <Router />
      <IonTabBar slot="bottom">
        <IonTabButton tab="home" href="/">
          <HiHome/>
          <IonLabel>Home</IonLabel>
        </IonTabButton>
        <IonTabButton tab="weather" href="/weather">
        <TiWeatherPartlySunny/>
          <IonLabel>Weather</IonLabel>
        </IonTabButton>
      </IonTabBar>
    </IonApp>
  );
};

export default App;
