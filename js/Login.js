import React, { Component } from 'react';
import { Container, Header, Content, TabHeading, Card, View, CardItem, Tab, Tabs, Thumbnail, Button, 
    Text ,Form, Item, Input,Left, Body, Right, Icon, Title, Label } from 'native-base';
import Expo from 'expo';
import { Image, TouchableHighlight, Alert,Dimensions ,StyleSheet,TextInput} from 'react-native';
import { StatusBar } from "react-native";


export default class Login extends React.Component {
  render() {
      
    const screenHT = Dimensions.get('window').height;
    const screenWT = Dimensions.get('window').width;
    const {goBack} = this.props.navigation;

    return (
       <Container>
           <View style={{width:'100%',height:25,backgroundColor:'black'}}>
            </View>
            <Header style={{backgroundColor: '#E93F3F'}}>
                <Left>
                    <Button transparent onPress={() => goBack()}>
                        <Icon name='arrow-back' />
                    </Button>
                </Left>
                <Body>
                    <Title>Profile</Title>
                </Body>
                <Right>
                    <Text style={{color: 'white'}}>Next</Text>
                </Right>
            </Header>
            <View style={{padding:5,width:screenWT,height:screenHT,}}>
                <Image style={{ opacity:0.7,width:screenWT,height:screenHT, position: 'absolute', top: 0, left: 0 }} source={require('../pics/loginBack.jpg')}/>
                <Text style={{fontSize:35,fontWeight:'bold',color:'#2a2f33',fontFamily:'Roboto',alignSelf:'center',position:'absolute'}}>Hey Buddy !</Text>
                <Text style={{fontSize:15,color:'#2a2f33',fontFamily:'Roboto',alignSelf:'center',position:'absolute',marginTop:'15%'}}>Tell us about yourself and get started</Text>

                <View style={{height:325,paddingTop:30,width:'90%',backgroundColor:'white',position:'absolute',borderRadius:5,alignSelf:'center',marginTop:'40%'}}>
                    <Form>
                        <Item floatingLabel>
                            <Label> <Image style={{ width:50,height:50}} source={require('../pics/username.png')}/>    Username</Label>
                            <Input />
                        </Item>
                        <Item floatingLabel last>
                            <Label><Image style={{ width:50,height:50}} source={require('../pics/password.png')}/>    Password</Label>
                            <Input />
                        </Item>
                            <Item floatingLabel last>
                            <Label><Image style={{ width:50,height:50}} source={require('../pics/phone.png')}/>    Phone</Label>
                            <Input />
                        </Item>
                        <Text style={{fontSize:15,color:'#7C7A7A',fontFamily:'Roboto',textAlign:'center',marginTop:20}}>By tapping next you are agreeing to the</Text>
                        <Text style={{fontSize:15,color:'#E93F3F',fontFamily:'Roboto',textAlign:'center',marginTop:10, textDecorationLine:'underline'}}>Privacy Policy Terms of Services</Text>
                    </Form>
                </View>
                <Image style={{ width:70,height:70,alignSelf:'center',marginTop:'30%'  }} source={require('../pics/dinelogo.png')}/>
            </View>
        </Container>
    );
  }
}



