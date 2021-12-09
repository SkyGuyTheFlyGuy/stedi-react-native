import { enableExpoCliLogging } from "expo/build/logs/Logs";
import React from "react";
import { StyleSheet, Text, View, Image } from 'react-native';
import { Card, ListItem, Button, Icon } from 'react-native-elements';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';


function Login() {
    return(
      <View>
      <Button
      title="Log In"
      onPress={() => document.write("Hello")}
    />
      </View>
    )
  }

export default Login