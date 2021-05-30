import AsyncStorage from '@react-native-async-storage/async-storage';
import {useNavigation} from '@react-navigation/native';

export const authMiddleWare = async (naviagtion: any) => {
  const authToken = await AsyncStorage.getItem('AuthToken');
  if (authToken === null) {
    naviagtion.navigate('Welcome');
  }
};
