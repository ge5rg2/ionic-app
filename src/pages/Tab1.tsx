import { IonContent, IonPage, IonIcon } from "@ionic/react";
import { caretBack, caretForward, caretUp, caretDown } from "ionicons/icons";
import "./Tab1.css";
import { useState } from "react";
import { Scene, Scenes } from "../interface/types";

const Tab1: React.FC = () => {
  const [x, setX] = useState<number>(0);
  const [scenes, setScenes] = useState<Scene[]>(Scenes);

  /** fn: Functions that work on left click */
  const handleScrollLeft = () => {
    if (x - 10 < 0) {
      return setX(60);
    }
    return setX((prevPosition) => prevPosition - 10);
  };

  /** fn: Functions that work on right click */
  const handleScrollRight = () => {
    if (x + 10 > 60) {
      return setX(0);
    }
    return setX((prevPosition) => prevPosition + 10);
  };

  /** fn: Functions that work on Marker click */
  const handleMarkerClick = (goto: number) => {
    const scene = Scenes.find((s) => s.id === goto);
    if (scene) {
      setScenes([scene]);
      if (scene.id == 9) {
        alert("Congratulations, you've reached the top.");
      }
    }
  };

  return (
    <IonPage>
      <IonContent fullscreen>
        <div className="panorama-container">
          {scenes.map((scene) => (
            <div
              key={scene.id}
              className="panorama-image"
              style={{ transform: `translateX(-${x}%)` }}
            >
              <img src={scene.background_url} alt="Panorama" />
              {scene.hitzones.map((hitzone, index) => {
                const isUpIcon = hitzone.goto > scene.id;
                const icon = isUpIcon ? caretUp : caretDown;

                return (
                  <div
                    key={index}
                    className="marker"
                    style={{ left: hitzone.x, top: hitzone.y }}
                    onClick={() => handleMarkerClick(hitzone.goto)}
                  >
                    <IonIcon icon={icon} />
                  </div>
                );
              })}
            </div>
          ))}
          <div className="panorama-button left" onClick={handleScrollLeft}>
            <IonIcon icon={caretBack} />
          </div>
          <div className="panorama-button right" onClick={handleScrollRight}>
            <IonIcon icon={caretForward} />
          </div>
        </div>
      </IonContent>
    </IonPage>
  );
};

export default Tab1;
