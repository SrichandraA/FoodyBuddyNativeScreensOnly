import React, { Component } from 'react';
import { Container, Header, Content, TabHeading, Card, View, CardItem, Tab, Tabs, Thumbnail, Button, Text ,Form, Item, Input,Left, Body, Right, Icon, Title } from 'native-base';
import Expo from 'expo';
import { Image, TouchableHighlight, Alert,Dimensions ,StyleSheet} from 'react-native';


export default class First extends React.Component {
  render() {
    return (
        <Container style={{backgroundColor:'#E93F3F'}}>
            <View style={{flex:1,flexDirection:'column'}}>
            
                <View style={{flexDirection:'row',width:'90%',height:160,backgroundColor:'white',borderRadius:7,alignSelf:'center',marginTop:110,marginBottom:20}}>
                    <Image style={{width:'40%',height:'100%'}} resizeMode='contain' source={require('../pics/foody.jpg')}/>                
                    <View style={{padding:20}}>
                        <Text style={{fontSize:18,fontWeight:'bold',color:'#959595',fontFamily:'Roboto'}}>Be a Foody</Text>
                        <Button transparent danger>
                            <Text >ORDER FOOD</Text>
                            <Icon name='arrow-forward'/>
                        </Button>
                    </View>
                </View>

                <View style={{flexDirection:'row',width:'90%',height:160,backgroundColor:'white',borderRadius:7,alignSelf:'center'}}>
                    <Image style={{width:'40%',height:'100%'}} resizeMode='contain' source={require('../pics/buddy.png')}/>                
                    <View style={{padding:20}}>
                        <Text style={{fontSize:18,fontWeight:'bold',color:'#959595',fontFamily:'Roboto'}}>Be a Buddy</Text>
                        <Button transparent danger>
                            <Text>SELL FOOD</Text>
                            <Icon name='arrow-forward'/>

                        </Button>                   
                    </View>
                </View>

            </View>
      </Container>
    );
  }
}



