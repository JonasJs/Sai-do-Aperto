import React, {useRef, useState, useEffect} from 'react';
import MapView, {Marker} from 'react-native-maps';
import Geolocation from '@react-native-community/geolocation';
import Geocoder from 'react-native-geocoding';

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
        style={{flex: 1}}
        provider="google"
        camera={mapLocation}>
        {markers.map(({coordinate, title, description}, key) => {
          return (
            <Marker
              key={key}
              coordinate={coordinate}
              onPress={() => onMarkerClick(title)}
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

        {/* <Marker
          coordinate={currentPosition.coordinate}
          title={currentPosition.title}
          description={currentPosition.description}
        /> */}
      </MapView>
      <Modal>
        <Text>Banheiro Bom</Text>
        <Items>
          <AndressText>Rua antonio claudio</AndressText>
          <DurationText>30min a pé</DurationText>
        </Items>
        <Line />
        <DescriptionText>
          Economic comfortable car, which lets you easily get around the city.
          It has 5 seats, so you can take your colleagues for a ride! 150 horse
          power and you will never miss a green light.
        </DescriptionText>
        <Text>Foto</Text>
      </Modal>
    </Container>
  );
};

Home.navigationOptions = {
  header: {
    visible: false,
  },
};

export default Home;
