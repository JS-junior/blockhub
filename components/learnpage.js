import React, { useState, useEffect, useLayoutEffect, useRef  } from "react"

import { Text, View, Image, StyleSheet,FlatList, TouchableOpacity, ScrollView, Platform, Linking, ToastAndroid, Switch, Dimensions } from "react-native"
import { Ionicons } from '@expo/vector-icons';
import { Avatar } from 'react-native-elements';
import { ListItem } from 'react-native-elements'
import styles from "./styles"
import { Text as Heading } from "react-native-elements";

const { height, width } = Dimensions.get("window")

function ListBox(){
        return(
            <TouchableOpacity style={styles.listBox}>
            <Image style={styles.listBoxImage} source={{ uri: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRa_QgmSW4n9JXniwB4aixDvPZxElV2XbHN5g&usqp=CAU" }} />
            <View style={{ display: "flex", flexDirection: "column", justifyItems: "center", alignItems: "center", marginLeft: 10 }}>
            <Heading h4>Hello World</Heading>
            <Text style={{ color: "darkgray", marginLeft: 10}}>introduction to python</Text>
            </View>
            </TouchableOpacity>
        )
}

export default function LearnPage({ navigation }){

    const [ tutorials, setTutorials ] = useState([1,2,3,4,5,6,7,8,9])
    useLayoutEffect(()=>{
           navigation.setOptions({
               headerRight: ()=> <Avatar onPress={()=> navigation.navigate("Settings")} rounded source={{ uri: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRa_QgmSW4n9JXniwB4aixDvPZxElV2XbHN5g&usqp=CAU"}} />,
               headerLeft: ()=> <Ionicons onPress={()=> navigation.goBack()} name="arrow-back" size={24} color="black" />,
           })
           
    }, [navigation])
    
    return(
          <View style={styles.container}>
          <Image source={{ uri: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRa_QgmSW4n9JXniwB4aixDvPZxElV2XbHN5g&usqp=CAU" }} style={{ width: width, height: 200 }} />
            <Heading h1 style={styles.textHeading}>All New Courses</Heading>
            <Text selectable style={{ color:"darkgray", width: "80%", marginBottom: 20 }}>This module covers everything from scratch, you will have the basic fundamental understanding of python programming language</Text>
            <ScrollView showsVerticalScrollIndicator={false}>
            <FlatList style={styles.listBoxContainer} data={tutorials} renderItem={ListBox} />
            </ScrollView>
          </View>
          )
}