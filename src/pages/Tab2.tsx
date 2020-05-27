/* eslint-disable @typescript-eslint/no-unused-vars */
import React from 'react';
import { IonContent, IonHeader, IonPage, IonTitle, IonToolbar, IonButton, IonLabel } from '@ionic/react';
import { BarcodeScanner } from '@ionic-native/barcode-scanner';

import ExploreContainer from '../components/ExploreContainer';
import './Tab2.css';

const Tab2: React.FC = () => {
  const openScanner = async () => {
    const data = await BarcodeScanner.scan();
    console.log(`Barcode data: ${data.text}`);
    alert(data.text)
  };
  // ionic capacitor copy android && cd android && ./gradlew assembleDebug && ./gradlew installDebug && cd ..
  return (
    <IonPage>
      <IonHeader>
        <IonToolbar>
          <IonTitle>Scan</IonTitle>
        </IonToolbar>
      </IonHeader>
      <IonContent>
      <IonButton onClick={openScanner}>Scan barcode/Qr Code</IonButton>
      </IonContent>
    </IonPage>
  );
};

export default Tab2;
