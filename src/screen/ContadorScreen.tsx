import React, {useState} from 'react';
import {StyleSheet, Text, TouchableOpacity, View} from 'react-native';

const ContadorScreen = () => {
  const [number, setnumber] = useState(10);
  return (
    <>
      <View style={styles.container}>
        <TouchableOpacity
          style={styles.btnR}
          onPress={() => setnumber(number + 1)}>
          <View style={styles.fab}>
            <Text style={styles.title}>+1</Text>
          </View>
        </TouchableOpacity>

        <TouchableOpacity
          style={styles.btnL}
          onPress={() => setnumber(number - 1)}>
          <View style={styles.fab}>
            <Text style={styles.title}>-1</Text>
          </View>
        </TouchableOpacity>
      </View>
      <View>
        <Text style={styles.result}>{number}</Text>
      </View>
    </>
  );
};
const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
  },
  btnR: {
    position: 'absolute',
    bottom: 10,
    right: 10,
  },
  btnL: {
    position: 'absolute',
    bottom: 10,
    left: 10,
  },
  title: {
    fontSize: 30,
    color: 'white',
    alignSelf: 'center',
  },
  fab: {
    backgroundColor: 'rgb(255,125,125)',
    width: 60,
    height: 60,
    borderRadius: 100,
    justifyContent: 'center',
  },
  result: {
    fontSize: 30,
    justifyContent: 'center',
    alignSelf: 'center',
  },
});
export default ContadorScreen;
