import { IonCardSubtitle, IonCol, IonNote, IonRow } from "@ionic/react";
import React, { useEffect, useState } from 'react'
import {WiDayWindy} from "react-icons/wi"
import {BsThermometerSun} from "react-icons/bs"
import {IoMdPartlySunny} from "react-icons/io"
import {IoIosPulse} from "react-icons/io"

const WeatherProperty = ({type,currentWeather}) => {
    const [property,setProperty] =useState(false)
    const properties = {

        wind: {
          isIcon: true,
          icon: <WiDayWindy/>,
          alt: "wind",
          label: "Wind",
          value: `${currentWeather.current.wind_mph}mph`
        },
        feelsLike: {
    
          isIcon: true,
          icon: <BsThermometerSun/>,
          alt: "feels like",
          label: "Feels like",
          value: `${currentWeather.current.feelslike_c}°C`
        },
        indexUV: {
    
          isIcon: true,
          icon: <IoMdPartlySunny/>,
          alt: "index uv",
          label: "Index UV",
          value: currentWeather.current.uv
        },
        pressure: {
    
          isIcon: true,
          icon: <IoIosPulse/>,
          alt: "pressure",
          label: "Pressure",
          value: `${currentWeather.current.pressure_mb} mbar`
        }
      };
      useEffect(()=>{
        setProperty(properties[type]);
      },[type])
    
  return (
    <IonCol size="6">
    <IonRow className="ion-justify-content-center ion-align-items-center">
      <IonCol size="10" color="dark">
        {property.isIcon && property.icon}
      </IonCol>

      <IonCol size="9">
        <IonCardSubtitle>{property.label}</IonCardSubtitle>
        <IonNote>{property.value}</IonNote>
      </IonCol>
    </IonRow>
  </IonCol>
  )
}

export default WeatherProperty