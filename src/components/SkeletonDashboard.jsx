import {IonCard, IonCardContent, IonCardSubtitle, IonCardTitle, IonCol, IonGrid, IonNote, IonRow, IonSkeletonText, IonText, IonThumbnail } from "@ionic/react";
import {WiDayWindy} from "react-icons/wi"
import {BsThermometerSun} from "react-icons/bs"
import {IoMdPartlySunny} from "react-icons/io"
import {IoIosPulse} from "react-icons/io"
export const SkeletonDashboard = () => (

  <IonGrid>
    <IonCard>
      <IonCardContent className="ion-text-center">
      
        <IonText color="primary">
          <h1>
            <IonSkeletonText animated style={{height: "2rem", width: "90%"}} />
          </h1>
        </IonText>

        <div className="ion-margin-top">
          
          <IonThumbnail>
            <IonSkeletonText animated style={{width: "2rem", height: "2rem"}} />
          </IonThumbnail>
          
          <IonText color="dark">
            <h1 style={{fontWeight: "bold"}}>
              <IonSkeletonText animated style={{height: "2rem", width: "90%"}} />
            </h1>
          </IonText>
          
          <IonText color="medium">
            <p>
              <IonSkeletonText animated style={{height: "2rem", width: "90%"}} />
            </p>
          </IonText>
        </div>

        <IonCardTitle style={{fontSize: "3rem"}} className="ion-margin-top">
          <IonSkeletonText animated style={{height: "3rem", width: "30%", textAlign: "center"}} />
        </IonCardTitle>

        <IonGrid className="ion-margin-top">
          <IonRow>
            <IonCol size="6">
              <IonRow className="ion-justify-content-center ion-align-items-center">
                <IonCol size="6" color="primary">
                  
                  <WiDayWindy/>
                </IonCol>

                <IonCol size="9">
                  <IonCardSubtitle>Wind</IonCardSubtitle>
                  <IonNote>
                    <IonSkeletonText animated style={{height: "2rem", width: "90%"}} />
                  </IonNote>
                </IonCol>
              </IonRow>
            </IonCol>

            <IonCol size="6">
              <IonRow className="ion-justify-content-center ion-align-items-center">
              <IonCol size="6" color="primary">
                  
                  <BsThermometerSun/>
                </IonCol>

                <IonCol size="9">
                  <IonCardSubtitle>Feels like</IonCardSubtitle>
                  <IonNote>
                    <IonSkeletonText animated style={{height: "2rem", width: "90%"}} />
                  </IonNote>
                </IonCol>
              </IonRow>
            </IonCol>
          </IonRow>

          <IonRow className="ion-margin-top">
            <IonCol size="6">
              <IonRow className="ion-justify-content-center ion-align-items-center">
              <IonCol size="6" color="primary">
                  
                  <IoMdPartlySunny/>
                </IonCol>

                <IonCol size="9">
                  <IonCardSubtitle>Index UV</IonCardSubtitle>
                  <IonNote>
                    <IonSkeletonText animated style={{height: "2rem", width: "90%"}} />
                  </IonNote>
                </IonCol>
              </IonRow>
            </IonCol>

            <IonCol size="6">
              <IonRow className="ion-justify-content-center ion-align-items-center">
              <IonCol size="6" color="primary">
                  
                  <IoIosPulse/>
                </IonCol>

                <IonCol size="9">
                  <IonCardSubtitle>Pressure</IonCardSubtitle>
                  <IonNote>
                    <IonSkeletonText animated style={{height: "2rem", width: "90%"}} />
                  </IonNote>
                </IonCol>
              </IonRow>
            </IonCol>
          </IonRow>
        </IonGrid>
      </IonCardContent>
    </IonCard>
  </IonGrid>
);
export default SkeletonDashboard