import React, { Component } from "react";

import { DrawerNavigator } from "react-navigation";
import SecondScreen from "./Second";
import Welcome from "./welcome";

const NavigationDrawer = DrawerNavigator(
  {
    SecondScreen: { screen: SecondScreen },
    Home: { screen: Welcome },
    ContactUs: { screen: Welcome },
    About: { screen: Welcome },
  }
);
export default NavigationDrawer;