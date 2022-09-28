import { IonHeader, IonTitle, IonToolbar } from "@ionic/react";

const Header: React.FC = () => {
  return (
    <IonHeader>
      <IonToolbar color="danger">
        <IonTitle>Know The Weather!</IonTitle>
      </IonToolbar>
    </IonHeader>
  );
};
export default Header;
