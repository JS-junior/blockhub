import React, { useState, useEffect, useLayoutEffect, useRef  } from "react"

import { Text, View, Image, StyleSheet,FlatList, TouchableOpacity, ScrollView, Platform, Linking, ToastAndroid, Switch } from "react-native"
import TouchableScale from 'react-native-touchable-scale'; 
import LinearGradient from 'react-native-linear-gradient'
import { ListItem } from 'react-native-elements'
import styles from "./styles"
import { Feather } from '@expo/vector-icons';
import { Ionicons } from '@expo/vector-icons';
import { Avatar } from 'react-native-elements';

export default function Settings({ navigation }){

    useLayoutEffect(()=>{
         navigation.setOptions({
              tabBarIcon: ()=> <Feather name="settings" size={24} color="black" />,
              headerLeft:()=> <Ionicons onPress={()=> navigation.goBack()} name="arrow-back" size={24} color="black" />,
              headerRight: ()=> <Avatar onPress={()=> navigation.navigate("Settings")} rounded source={{ uri: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRa_QgmSW4n9JXniwB4aixDvPZxElV2XbHN5g&usqp=CAU"}} />,
         })
    },[navigation])

    return(
          <View style={styles.container}>
            <Text>Settings screen </Text>
           
            
          </View>
          )
}