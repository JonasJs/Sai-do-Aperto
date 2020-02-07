import React, {useRef, useState, useEffect} from 'react';
import Geolocation from '@react-native-community/geolocation';
import Geocoder from 'react-native-geocoding';
import Icon from 'react-native-vector-icons/AntDesign';
import {RNCamera} from 'react-native-camera';

import Input from '../../Components/Inputs';
import ButtonCustom from '../../Components/ButtonCustom';

import {
  Container,
  CapturePhotoButton,
  Image,
  Text,
  ButtonPhoto,
  ButtonContainer,
  DetailsContainer,
  FormContainer,
  P,
  Title,
  ButtonsContainer,
} from './styles';

const AddBathroom = ({navigation}) => {
  const [photoTaken, setPhotoTaken] = useState({
    image:
      'https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcTekiIYJkVARYKvbxpTsCQ_0HVZJYhyi9Jhb01ADoWlDhgLARDY',
    approved: true,
  });

  const [ButtonToggle, setButtonToggle] = useState([
    {
      price: 'Free',
      active: false,
    },
    {
      price: '1',
      active: false,
    },
    {
      price: '2',
      active: false,
    },
    {
      price: '3',
      active: false,
    },
    {
      price: '4',
      active: false,
    },
    {
      price: '5',
      active: false,
    },
  ]);
  const [ButtonActivated, setButtonActivated] = useState();

  const [Description, setDescription] = useState();

  const photoApproved = () => {
    setPhotoTaken({
      ...photoTaken,
      approved: true,
    });
  };
  const resetPhoto = () => {
    setPhotoTaken({
      image: '',
      approved: false,
    });
  };
  const CapturePhoto = async () => {
    if (this.camera) {
      await this.camera
        .takePictureAsync({quality: 0.8, width: 500, base64: true})
        .then(data => {
          setPhotoTaken({
            image: data.uri,
            approved: false,
          });
        })
        .catch(e => {
          alert(e);
        });
    }
  };
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
          //alert(JSON.stringify(location));
        }
      },
      error => {
        alert(error);
      },
    );
  };

  const selectButton = index => {
    ButtonToggle.forEach(button => {
      button.active = false;
    });

    ButtonToggle[index].active = true;

    const newButtons = [...ButtonToggle];
    setButtonToggle(newButtons);
    setButtonActivated(ButtonToggle[index]);
  };

  const register = () => {
    console.log(JSON.stringify(ButtonActivated));
  };

  useEffect(() => {
    // Fazer verificação de permissaaa~~aaooo !!!!!!!!!!1

    Geocoder.init('AIzaSyDrHG4BLGyFyw62vRI50d_M745hKv983FI', {
      language: 'pt-br',
    });
    getMyCurrentPosition();
  }, []);

  return (
    <Container>
      {photoTaken.image ? (
        <>
          {!photoTaken.approved ? (
            <>
              <Image
                style={{width: '100%', height: '100%', marginRight: 16}}
                source={{uri: photoTaken.image}}
              />
              <ButtonContainer>
                <ButtonPhoto
                  style={{backgroundColor: '#E71D36'}}
                  onPress={() => resetPhoto()}>
                  <Text>Excluir</Text>
                </ButtonPhoto>
                <ButtonPhoto
                  style={{backgroundColor: '#30BA18'}}
                  onPress={() => photoApproved()}>
                  <Text>Concluir</Text>
                </ButtonPhoto>
              </ButtonContainer>
            </>
          ) : (
            <FormContainer>
              <Title>Cadastro</Title>
              <Input Label="Titulo:" />
              <P style={{marginTop: 24}}>Selecione um valor:</P>
              <DetailsContainer>
                <Input Label="Titulo:" Type="textArea" />
                <Image
                  style={{
                    width: 120,
                    height: 180,
                    marginLeft: 16,
                  }}
                  source={{uri: photoTaken.image}}
                />
              </DetailsContainer>
              <P>Selecione um valor:</P>
              <ButtonsContainer>
                {ButtonToggle.map(({price, active}, index) => {
                  return (
                    <ButtonCustom
                      Theme="toggle"
                      Title={
                        price === 'Free'
                          ? price
                          : Number(price)
                              .toFixed(2)
                              .replace('.', ',')
                              .replace(/(\d)(?=(\d{3})+(?!\d))/g)
                      }
                      Active={active}
                      onPress={() => selectButton(index)}
                    />
                  );
                })}
              </ButtonsContainer>
              <ButtonCustom Title="Enviar" onPress={() => register()} />
            </FormContainer>
          )}
        </>
      ) : (
        <RNCamera
          style={{flex: 1}}
          ref={ref => {
            this.camera = ref;
          }}
          type={RNCamera.Constants.Type.back}
          permissionDialogTitle="Persimissão para usar a camera"
          permissionDialogMenssage="Precisamos usar a sua camera">
          <CapturePhotoButton onPress={() => CapturePhoto()}>
            <Icon
              name="camerao"
              size={28}
              color="#000"
              style={{textAlign: 'center'}}
            />
          </CapturePhotoButton>
        </RNCamera>
      )}
    </Container>
  );
};

AddBathroom.navigationOptions = {
  header: true,
};

export default AddBathroom;
