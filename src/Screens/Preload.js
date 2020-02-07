import {StackActions, NavigationActions} from 'react-navigation';

const Preload = ({navigation}) => {
  const status = 1;

  if (status === 1) {
    navigation.dispatch(
      StackActions.reset({
        index: 0,
        actions: [NavigationActions.navigate({routeName: 'Home'})],
      }),
    );
  }

  return null;
};

export default Preload;
