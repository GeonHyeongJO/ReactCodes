import React, { useState } from 'react';
import { StatusBar } from 'expo-status-bar';
import { Platform, Button, SafeAreaView, ScrollView, StyleSheet, Text, TextInput, View } from 'react-native';
import _ from 'underscore';
import styled from 'styled-components/native';
import Constants from 'expo-constants';

const Row = styled.View`
  flex-direction: row;
`

const Input = styled.TextInput`
  width: 300;
  border-color: #000;
  border-bottom-width: 1;
`

const TodoItem = styled.View`
  flex-direction: row;
  width: 350;
  justify-Content: space-between;
`

const CustomButton = styled.Button`

`

const str = 'string here';
const replaceStr = str.replace( ' ', '%20' );
console.log( str );
console.log( replaceStr );

export default function App() {
  const [ content, setContent ] = useState( 'Text Here ');
  const [ list, setList ] = useState( [] );
  const addItem = () => {
    const item = {
      id: new Date().getTime().toString(),
      content: content,
    }
    setList( [ ...list, item ] ); //전개 연산자 Spread Operation
    // setList 에는 항상 새로운 배열을 생성해서 입력한다. "불변성"
  }
  const remove = id => {
    setList( _.reject( list, item => item.id === id ) );
  }
  let marginTop = 0;
  if(Platform.OS === 'android'){
    marginTop = Constants.statusBarHeight;
  }
  return (
    <SafeAreaView style={ [ styles.container, { marginTop } ]}>
      <ScrollView>
      <View style={ [ styles.row, { marginBottom: 12, width: 340, justifyContent:'space-between' } ] }>
        <Input value={ content } 
                  onChangeText={ text => setContent( text ) }/>
        <Button title="추가" onPress={ () => addItem() }/>
      </View>
      { list.map( item => (
        <TodoItem key={ item.id }>
          <Text>{ item.content }</Text>
          <Button color={'#f00'} title="삭제" onPress={ () => { remove( item.id )} } />
        </TodoItem>
      ))
      }
      <StatusBar style="auto" />
      </ScrollView>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'flex-start',
  },
  row: {
    flexDirection: 'row',
  },
  todoItem: {
    width: 340,
    justifyContent: 'space-between',
    alignItems: 'center',

  },
  inputStyle: {
    width: 300, 
    borderColor: "#000", 
    borderBottomWidth: 1,
  }
});