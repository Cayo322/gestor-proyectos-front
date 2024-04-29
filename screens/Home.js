import React from 'react';
import { View, Button } from 'react-native';
import { useNavigation } from '@react-navigation/native';

const Home = () => {
  const navigation = useNavigation();

  const navigateToCarrera = () => {
    navigation.navigate('Carrera');
  };

  const navigateToSupervisor = () => {
    navigation.navigate('Supervisor');
  };

  const navigateToPersona = () => {
    navigation.navigate('Persona');
  };

  const navigateToProyecto = () => {
    navigation.navigate('Proyecto');
  };

  return (
    <View>
      <Button title="Carrera" onPress={navigateToCarrera} />
      <Button title="Supervisor" onPress={navigateToSupervisor} />
      <Button title="Persona" onPress={navigateToPersona} />
      <Button title="Proyecto" onPress={navigateToProyecto} />
    </View>
  );
};

export default Home;
