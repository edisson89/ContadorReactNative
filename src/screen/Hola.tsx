import React from 'react'
import { Text, View } from 'react-native'

interface abc {
  name:string
}
export const Hola:React.FC<abc>  = ({name})=> {
  return (
   <>
   <View
        style={{
          flex: 6,
          backgroundColor: 'rgb(255,25,255)',
          justifyContent: 'center',
        }}>
        <Text
          style={{
            backgroundColor: 'yellow',
            fontSize: 70,
          }}>
          hola mr girls {name}
        </Text>
        <Text></Text>
        <Text
          style={{
            backgroundColor: 'blue',
            fontSize: 50,
            display: 'flex',
          }}>
          hola mr girls
        </Text>
        <Text
          // eslint-disable-next-line react-native/no-inline-styles
          style={{
            backgroundColor: 'red',
            fontSize: 40, 
          }}>
          hola mr girls
        </Text>
      </View>
      <View
        style={{
          flex: 1,
          backgroundColor: 'green',
        }}>
        <Text>bn</Text>
      </View>
   </>
  )
}
