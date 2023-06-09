import {
  IonContent,
  IonHeader,
  IonPage,
  IonTitle,
  IonToolbar,
} from "@ionic/react";
import "./Tab1.css";
import { useState } from "react";

const Tab1: React.FC = () => {
  const [scrollPosition, setScrollPosition] = useState(0);

  const handleScrollLeft = () => {
    setScrollPosition((prevPosition) => prevPosition - 25);
  };

  const handleScrollRight = () => {
    setScrollPosition((prevPosition) => prevPosition + 25);
  };

  return (
    <IonPage>
      <IonContent fullscreen>
        <div className="panorama-container">
          <div
            className="panorama-image"
            style={{ transform: `translateX(-${scrollPosition}%)` }}
          >
            <img src="./public/img/m1.jpg" alt="Panorama" />
          </div>
          <div className="panorama-button left" onClick={handleScrollLeft}>
            <img src={""} alt="Left Arrow" />
          </div>
          <div className="panorama-button right" onClick={handleScrollRight}>
            <img src={""} alt="Right Arrow" />
          </div>
        </div>
      </IonContent>
    </IonPage>
  );
};

export default Tab1;
