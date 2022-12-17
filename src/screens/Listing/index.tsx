import React, { useEffect, useState } from "react";
import { ListRenderItem, Text } from "react-native";

// Firabase
import { getBathrooms } from "../../firebase/bathrooms";

// Components
import { CardBig } from "../../components/CardBig";

// Styles
import * as S from "./styles";

// Interfaces
export interface IBathrooms {
  description: string;
  location: {
    latitude: string;
    longitude: string;
  };
  photos: string[];
  price: string;
  title: string;
  owner: string;
}

export function Listing() {
  const [listBathrooms, setListBathrooms] = useState<IBathrooms[]>([])

  async function getBathroomsList() {
    const data = await getBathrooms() as IBathrooms[];
    setListBathrooms(data)
  }

  useEffect(() => { 
    getBathroomsList()
  }, []);

  const Item = ({ data }: { data: IBathrooms }) => {
    return (
      <CardBig data={data}/>
    )
  };

  const renderItem: ListRenderItem<IBathrooms> = ({ item }) => <Item data={item} />;

  return (
    <S.Container>
      <S.Bathrooms
        data={listBathrooms}
        keyExtractor={(item: IBathrooms, index) => index.toString()}
        renderItem={renderItem}
      />
    </S.Container>
  )
}