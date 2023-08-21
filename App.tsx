import React from 'react';
import { Hola } from './src/screen/Hola';
import { ScrollView, SafeAreaView } from 'react-native';
import ContadorScreen from './src/screen/ContadorScreen';

const App = () => {
  return (
    <>
    <ScrollView>
    <SafeAreaView>
       <Hola name='loor14'/>
      <Hola name='loures22'/>
      <Hola name='loures12'/>
      <Hola name='loures45'/>
      <Hola name='loures14'/>
      <ContadorScreen />
     
    </SafeAreaView>
    </ScrollView>
   

    </>
  );
};

export default App;
