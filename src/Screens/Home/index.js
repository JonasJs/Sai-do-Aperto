import React, {useRef, useState, useEffect} from 'react';
import MapView, {Marker} from 'react-native-maps';
import Geolocation from '@react-native-community/geolocation';
import Geocoder from 'react-native-geocoding';

import {Container, Text} from './styles';

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
        latitude: 45.5230786,
        longitude: -122.6701034,
      },
      title: 'Third Best Place',
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

  const [currentPosition, setCurrentPosition] = useState();

  const getMyCurrentPosition = () => {
    Geolocation.getCurrentPosition(
      async info => {
        const {latitude, longitude} = info.coords;
        const geo = await Geocoder.from(latitude, longitude);

        alert(geo.results[0].formatted_address);

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
          setCurrentPosition;
          location;
        }
      },
      error => {
        alert(error);
      },
    );
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
        {markers.map(({id, coordinate, title, description}) => {
          return (
            <Marker
              key={id}
              coordinate={coordinate}
              title={title}
              description={description}
            />
          );
        })}
      </MapView>
    </Container>
  );
};

Home.navigationOptions = {
  header: {
    visible: false,
  },
};

export default Home;
