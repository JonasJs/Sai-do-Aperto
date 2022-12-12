
import React, { useState, useEffect } from "react";
import { Linking, Alert } from 'react-native';
import * as Location from 'expo-location';

// Styles
import * as S from "./styles";

export function Home() {
  const [location, setLocation] = useState<Location.LocationObject>();

  useEffect(() => {
    (async () => {
      let { status } = await Location.requestForegroundPermissionsAsync();
      if (status !== 'granted') {
        Alert.alert(
          "Ative a localização",
          "Para que o app funcione corretamente, é necessário ativar a localização.",
          [
            {
              text: "Ativar",
              onPress: async () => await Linking.openSettings()
            }
          ]
        );
        return;
      }

      let location = await Location.getCurrentPositionAsync({});
      setLocation(location);
      console.log(location)
    })();
  }, []);

  return (
    <S.Container>
      {location?.coords.latitude && location?.coords.longitude && (
        <S.Content>
          <S.Map
            showsUserLocation
            initialRegion={{
              latitude: location?.coords.latitude,
              longitude: location?.coords.longitude,
              latitudeDelta: 0.0922,
              longitudeDelta: 0.0421,
            }}
            camera={{
              center: {
                latitude: location?.coords.latitude,
                longitude: location?.coords.longitude,
              },
              zoom: 16,
              pitch: 10,
              altitude: 10,
              heading: 20,
            }}
          />

        </S.Content>
        
      )}
    </S.Container>
  )
}