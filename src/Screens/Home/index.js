import React, {useRef, useState, useEffect} from 'react';
import MapView, {Marker} from 'react-native-maps';
import Geolocation from '@react-native-community/geolocation';
import Geocoder from 'react-native-geocoding';
import Icon from 'react-native-vector-icons/AntDesign';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';

import {
  Container,
  Text,
  PinMyPosition,
  Modal,
  Items,
  AndressText,
  DurationText,
  DescriptionText,
  Line,
  ModalContent,
  Image,
  HeaderModal,
  ItemsDetails,
  IconContainer,
  AddBathroom,
} from './styles';

const Home = ({navigation}) => {
  const map = useRef();
  const [markers, setMarkers] = useState([
    {
      id: 1,
      coordinate: {
        latitude: 45.524548,
        longitude: -122.6749817,
      },
      title: 'Best Place',
      description: 'This is the best place in Portland',
    },
    {
      id: 2,
      coordinate: {
        latitude: 45.524698,
        longitude: -122.6655507,
      },
      title: 'Second Best Place',
      description: 'This is the second best place in Portland',
    },
    {
      id: 3,
      coordinate: {
        latitude: -22.8675954,
        longitude: -43.2841584,
      },
      title: 'Third Best',
      description: 'This is the third best place in Portland',
    },
    {
      id: 4,
      coordinate: {
        latitude: 45.521016,
        longitude: -122.6561917,
      },
      title: 'Fourth Best Place',
      description: 'This is the fourth best place in Portland',
    },
  ]);

  const [mapLocation, setMapLocation] = useState({
    center: {
      latitude: 0,
      longitude: 0,
    },
    zoom: 16,
    pitch: 0,
    altitude: 0,
    heading: 0,
  });

  const [currentPosition, setCurrentPosition] = useState('');
  const [modalVisible, setModalVisible] = useState(false);

  const getMyCurrentPosition = () => {
    Geolocation.getCurrentPosition(
      async info => {
        const {latitude, longitude} = info.coords;
        const geo = await Geocoder.from(latitude, longitude);

        if (geo.results.length > 0) {
          const location = {
            name: geo.results[0].formatted_address,
            center: {
              latitude,
              longitude,
            },
            zoom: 16,
            pitch: 0,
            altitude: 0,
            heading: 0,
          };

          setMapLocation(location);
          setCurrentPosition({
            coordinate: {
              latitude: 45.521016,
              longitude: -122.6561917,
            },
            title: 'Fourth Best Place',
            description: 'This is the fourth best place in Portland',
          });
        }
      },
      error => {
        alert(error);
      },
    );
  };
  const onMarkerClick = env => {
    alert(env);
  };

  const closeModal = () => {
    setModalVisible(false);
  };

  useEffect(() => {
    Geocoder.init('AIzaSyDrHG4BLGyFyw62vRI50d_M745hKv983FI', {
      language: 'pt-br',
    });
    getMyCurrentPosition();
  }, []);

  return (
    <Container>
      <MapView
        ref={map}
        style={modalVisible ? {height: '60%'} : {flex: 1}}
        provider="google"
        camera={mapLocation}>
        {markers.map(({coordinate, title, description}, key) => {
          return (
            <Marker
              key={key}
              coordinate={coordinate}
              onPress={() => setModalVisible(true)}
            />
          );
        })}

        <Marker
          coordinate={{
            latitude: mapLocation.center.latitude,
            longitude: mapLocation.center.longitude,
          }}>
          <PinMyPosition />
        </Marker>
      </MapView>

      <Modal animationType="slide" transparent={true} visible={modalVisible}>
        <ModalContent>
          <Icon
            name="closecircle"
            size={28}
            color="#DCDEE5"
            style={{textAlign: 'right', marginBottom: 8}}
            onPress={() => closeModal()}
          />
          <Items>
            <Text>Banheiro Bom e cheiroso</Text>
            <ItemsDetails>
              <IconContainer>
                <Icon
                  name="enviroment"
                  size={20}
                  color="#3D56F5"
                  style={{marginRight: 8}}
                />
                <AndressText>{mapLocation.name}</AndressText>
              </IconContainer>
              <IconContainer>
                <Icon
                  name="clockcircle"
                  size={20}
                  color="#D1345B"
                  style={{marginRight: 8}}
                />
                <DurationText>30min Andando</DurationText>
              </IconContainer>
              <IconContainer>
                <MaterialIcons
                  name="attach-money"
                  size={20}
                  color="#D1345B"
                  style={{marginRight: 8}}
                />
                <DurationText>Grátis</DurationText>
              </IconContainer>
            </ItemsDetails>
          </Items>
          <Line />
          <Text>Foto</Text>
          <HeaderModal>
            <Image
              style={{width: 120, height: 180, marginRight: 16}}
              source={{
                uri:
                  'https://cdn.leroymerlin.com.br/contents/banheiro_clean_e_com_personalidade_5a93_original.jpg',
              }}
            />
            <DescriptionText style={{flex: 1}}>
              Economic comfortable car, which lets you easily get around the
              city. It has 5 seats, so you can take your colleagues for a ride!
              150 horse power and you will never miss a green light.
            </DescriptionText>
          </HeaderModal>
        </ModalContent>
      </Modal>

      <AddBathroom>
        <Icon
          name="pluscircle"
          size={50}
          color="#FFBE0B"
          backgroundColor="#fff"
          onPress={() => navigation.navigate('AddBathroom')}
        />
      </AddBathroom>
    </Container>
  );
};

Home.navigationOptions = {};

export default Home;
