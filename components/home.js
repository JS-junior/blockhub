import React, { useState, useEffect, useLayoutEffect, useRef  } from "react"

import { Text, View, Image, StyleSheet,FlatList, TouchableOpacity, ScrollView, Platform, Linking, ToastAndroid, Switch, Dimensions } from "react-native"

import { Text as Heading } from "react-native-elements";
import { Avatar } from "react-native-elements"
import { Entypo } from '@expo/vector-icons';
import { AntDesign } from '@expo/vector-icons';
import styles from "./styles"

const { width, height } = Dimensions.get("window")

function TutorialCard({ navigation }){
         return(
              <TouchableOpacity onPress={()=> navigation.navigate("LearnPage")} style={styles.card}>
              <Image style={styles.cardImage} source={{ uri: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRa_QgmSW4n9JXniwB4aixDvPZxElV2XbHN5g&usqp=CAU" }} />
         <Heading h4>Learn about Web3</Heading>
         <Text style={{ color: "darkgray", width: 200}}>This module covers everything from scratch. You will learn the fundamentals</Text>
              </TouchableOpacity>
         )
}

function Row({ title, navigation }){

          const [ tutorials, setTutorials ] = useState([1,2,3,4,5])
          
          return(
                <View style={{ display: "flex",flexDirection: "column", marginLeft: "3%" ,marginVertical: 20,  }}>
                <Heading h3 style={{ color: "black", marginLeft: 25 }}>{title}</Heading>
                <ScrollView showsVerticalScrollIndicator={false}>
                <FlatList data={tutorials} horizontal={true} renderItem={()=> <TutorialCard navigation={navigation} />} />
                </ScrollView>
                </View>
          )
}

export default function Home({ navigation }){
    
    useLayoutEffect(()=>{
         navigation.setOptions({
              tabBarIcon: ()=> <AntDesign name="home" size={24} color="black" />,
              headerRight: ()=> <Avatar onPress={()=> navigation.navigate("Settings")} rounded source={{ uri: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRa_QgmSW4n9JXniwB4aixDvPZxElV2XbHN5g&usqp=CAU"}} />
         })
    },[navigation])

    return(
          <View style={styles.container}>
          
          <ScrollView style={{ display: "flex", flexDirection: "column" }} showsVerticalScrollIndicator={false}>
          <Image source={{ uri: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRa_QgmSW4n9JXniwB4aixDvPZxElV2XbHN5g&usqp=CAU" }} style={{ width: width - 30, height: 200, borderRadius: 10, display: "flex", flexDirection: "column", justifySelf: "center", alignSelf: "center"}} />
          <Row title="NFT" navigation={navigation} />
          <Row title="DeFi" navigation={navigation} />
          <Row title="DAO" navigation={navigation} />
          <Row title="Web3" navigation={navigation} />
          </ScrollView>
           </View>
          )
}