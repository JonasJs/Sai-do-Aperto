import React, {useRef, useState} from 'react';
import MapView, {Marker} from 'react-native-maps';

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

  return (
    <Container>
      <MapView
        ref={map}
        style={{flex: 1}}
        provider="google"
        initialRegion={{
          latitude: 45.52220671242907,
          longitude: -122.6653281029795,
          latitudeDelta: 0.04864195044303443,
          longitudeDelta: 0.040142817690068,
        }}>
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
