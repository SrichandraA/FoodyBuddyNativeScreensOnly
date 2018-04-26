import React, { Component } from 'react';
import { Container, Header, Content, TabHeading, Card,Toast, View,List,ListItem ,CardItem, Tab, Tabs, Thumbnail, Button, Text ,Form, Item, Input,Left, Body, Right, Icon, Title } from 'native-base';
import Expo from 'expo';
import { Image, TouchableHighlight, Alert,Dimensions ,StyleSheet, TextInput} from 'react-native';



export default class AppartmentTab extends React.Component {
    constructor(props){
		super(props);
		this.state = {value:'',addresses:[],list:'',isLoaded:false,a:['Simon Mignolet','Nathaniel Clyne','Dejan Lovren','Mama Sakho','Emre Can']};
        
       this.onChangeHandler = this.onChangeHandler.bind(this);
    }
    
    onChangeHandler(text){
            this.setState({value:text,list:'',addresses:[]});
            if(text === ''){
                this.setState({list:'',addresses:[],isLoaded:false});
                this.setState({value:text});
            }
            else{
                
                fetch("http://maps.googleapis.com/maps/api/geocode/json?address="+text+"&sensor=true%27")
				.then(res => res.json())
				.then(
					(result) => {
						this.setState({
                            isLoaded: true
							
                        });
						for(let i = 0; i < result.results.length; i++){
                            this.state.addresses.push(JSON.stringify(result.results[i].formatted_address));
                          // console.log(JSON.stringify(result.results[i].formatted_address))
                         
						}
                    //      var listItems = this.state.addresses.map((answer) =>
                    //    console.log("d")

					// );
					// this.setState({list: listItems});
					},
		
					(error) => {
						this.setState({
							isLoaded: false,
							
						});
					}
				)
            }


    }
  render() {

    var items = ['Simon Mignolet','Nathaniel Clyne','Dejan Lovren','Mama Sakho','Emre Can'];


    const screenHT = Dimensions.get('window').height;
    const screenWT = Dimensions.get('window').width;
    return (
        <Container>
             <Content>
            <View style={{width:screenWT,
                         backgroundColor:'#EDEAEA',
                         height:100, 
                         padding:20,
                         justifyContent:'center',
                         alignItems:'center'}}>

                <Item style={{backgroundColor:'white',elevation:3}}>
                    <Icon active name='search' style={{paddingLeft:5}} />
                    <Input  placeholder='Search your appartment' onChangeText={this.onChangeHandler } />
                </Item>
            	
            </View>
      
            <View >
            
                <List dataArray={this.state.addresses}
                    renderRow={(item) =>
                    <ListItem>
                        <Text>{item}</Text>
                    </ListItem>
                    }>
                </List>
            
                                
            </View>
            
        </Content>
      </Container>
    );
   
  }
}



