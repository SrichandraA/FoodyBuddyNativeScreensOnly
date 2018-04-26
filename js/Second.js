import React from "react";
import { StatusBar } from "react-native";
import {
  Button,
  Text,
  Container,
  Card,
  CardItem,
  Body,
  Content,
  Header,
  Title,
  Left,
  Icon,
  Right,Picker,Form, Tab, Tabs, Thumbnail,TabHeading, ScrollableTab 
} from "native-base";
// import { Dropdown } from 'react-native-material-dropdown';
import TodayTab from './SecondScreenTabs/TodayTab';
import TomorrowTab from './SecondScreenTabs/TomorrowTab';
import RequestTab from './SecondScreenTabs/RequestTab';

export default class Second extends React.Component {
  render() {

    return (
      <Container>
        <Header style={{height:80,backgroundColor: '#E93F3F',paddingTop:13}} hasTabs >
          <Left>
            <Button
              transparent
              onPress={() => this.props.navigation.navigate("DrawerOpen")}
            >
              <Icon name="menu" />
            </Button>
          </Left>
          <Body>
            <Picker
                mode="dropdown"
                style={{ width: 160,height:50,color:'white' }}
                
              >
                <Picker.Item label="FoodyBuddy" value="key0" />
                <Picker.Item label="ATM Card" value="key1" />
                <Picker.Item label="Debit Card" value="key2" />
                <Picker.Item label="Credit Card" value="key3" />
                <Picker.Item label="Net Banking" value="key4" />
              </Picker>
            </Body>
          <Right />
        </Header>
        <Tabs initialPage={0} renderTabBar={()=> <ScrollableTab />} >
          <Tab heading={<TabHeading style={{backgroundColor: '#E93F3F'}}>
                  <Text style={{color: '#ffffff',fontSize:12}}>TODAY</Text>
                </TabHeading>}>
                <TodayTab/>
          </Tab> 
          <Tab heading={<TabHeading style={{backgroundColor: '#E93F3F'}}>
                      <Text style={{color: '#ffffff',fontSize:12}}>TOMORROW</Text>
                    </TabHeading>}>
                    <TomorrowTab/>
          </Tab>  
          <Tab heading={<TabHeading style={{backgroundColor: '#E93F3F'}}>
                        <Text style={{color: '#ffffff',fontSize:12}}>REQUEST</Text>
                      </TabHeading>}>
                      <RequestTab/>
          </Tab> 
          <Tab heading={<TabHeading style={{backgroundColor: '#E93F3F'}}>
                      <Text style={{color: '#ffffff',fontSize:12}}>PLANNER</Text>
                    </TabHeading>}>
          </Tab>  
          <Tab heading={<TabHeading style={{backgroundColor: '#E93F3F'}}>
                        <Text style={{color: '#ffffff',fontSize:12}}>FEED</Text>
                      </TabHeading>}>
          </Tab>  

        </Tabs>
      </Container>
    );
  }
}