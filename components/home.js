import React, { useState, useEffect, useLayoutEffect, useRef  } from "react"

import { Text, View, Image, StyleSheet,FlatList, TouchableOpacity, ScrollView, Platform, Linking, ToastAndroid, Switch } from "react-native"

import styles from "./styles"

export default function Home(){
    return(
          <View style={styles.container}>
            <Text>Home screen </Text>
          </View>
          )
}