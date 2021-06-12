import AsyncStorage from '@react-native-async-storage/async-storage';

export const authMiddleWare = async (naviagtion: any) => {
  const authToken = await AsyncStorage.getItem('AuthToken');
};
