
import React, { useEffect } from "react";
import { View, ActivityIndicator } from "react-native";

// Firebase
import { getBathrooms } from "../../firebase/bathrooms";


// Navigation
import { useNavigation } from "@react-navigation/native";

export function Preload() {
  
  const navigation = useNavigation();

  useEffect(() => {
    async function getBathroomsData() {

      const data = await getBathrooms();

      console.log(data);
      navigation.navigate("app");
    }

    getBathroomsData();
  }, []);
  
  return (
    <View>
      <ActivityIndicator />
    </View>
  )
}
