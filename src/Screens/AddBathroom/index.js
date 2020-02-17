import React, {useRef, useState, useEffect} from 'react';
import Geolocation from '@react-native-community/geolocation';
import Geocoder from 'react-native-geocoding';
import Icon from 'react-native-vector-icons/AntDesign';
import {RNCamera} from 'react-native-camera';
import firebase from '../../FirebaseConnection.js';

import Input from '../../Components/Inputs';
import ButtonCustom from '../../Components/ButtonCustom';

import LeftArrow from '../../Assets/icons/LeftArrow';

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
  Header,
  ErrorText,
  ScrollView,
} from './styles';

const AddBathroom = ({navigation}) => {
  const [photoTaken, setPhotoTaken] = useState({
    image: false,
    approved: false,
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
  const [ButtonActivated, setButtonActivated] = useState('');

  const [Description, setDescription] = useState('');
  const [BathroomTitle, setBathroomTitle] = useState('');

  const [CurrentPosition, setCurrentPosition] = useState('');

  const [error, setError] = useState('');

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
            base64: `data:image/png;base64,${data.base64}`,
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
            coordinate: {
              latitude,
              longitude,
            },
          };
          setCurrentPosition(location);
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
    if (BathroomTitle === '' || Description === '') {
      setError('Preencha todos os campos.');
    } else if (BathroomTitle.length < 7) {
      setError('O titulo deve ter mais de 7 caracteres.');
    } else if (Description.length < 10) {
      setError('A Descrição deve ter mais de 10 caracteres.');
    } else if (ButtonActivated === '') {
      setError('Escola um dos Valores.');
    } else {
      setError('');
      const Bathroom = firebase.database().ref('Bathrooms/');
      const key = Bathroom.push().key;

      Bathroom.child(key).set({
        ...CurrentPosition,
        title: BathroomTitle,
        description: Description,
        Image: photoTaken.base64,
      });
    }
  };

  useEffect(() => {
    // Fazer verificação de permissaaa~~aaooo !!!!!!!!!!1

    Geocoder.init('AIzaSyDrHG4BLGyFyw62vRI50d_M745hKv983FI', {
      language: 'pt-br',
    });
    getMyCurrentPosition();
  }, []);

  return (
    <>
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
            <ScrollView contentInsetAdjustmentBehavior="automatic">
              <Container>
                <FormContainer>
                  <Header onPress={() => navigation.navigate('Home')}>
                    <LeftArrow height={32} width={32} />
                    <Title>Cadastro</Title>
                  </Header>
                  <Input
                    Label="Titulo:"
                    Value={BathroomTitle}
                    onChangeText={text => setBathroomTitle(text)}
                  />
                  <P style={{marginTop: 24}}>Descrição do banheiro:</P>
                  <DetailsContainer>
                    <Input
                      Type="textArea"
                      Value={Description}
                      onChangeText={text => setDescription(text)}
                    />
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
                              : `R$ ${Number(price)
                                  .toFixed(2)
                                  .replace('.', ',')
                                  .replace(/(\d)(?=(\d{3})+(?!\d))/g)} `
                          }
                          Active={active}
                          onPress={() => selectButton(index)}
                        />
                      );
                    })}
                  </ButtonsContainer>
                  {error !== '' && <ErrorText>{error}</ErrorText>}
                  <ButtonCustom Title="Enviar" onPress={() => register()} />
                </FormContainer>
              </Container>
            </ScrollView>
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
    </>
  );
};

AddBathroom.navigationOptions = {
  header: true,
};

export default AddBathroom;
