import React, { useState, useContext } from 'react'

import { StyleSheet, Dimensions } from "react-native"

const { height, width } = Dimensions.get("window")

const styles = StyleSheet.create({
      container: {
           flex: 1,
           backgroundColor: '#fff',
           alignItems: 'center',
           justifyContent: 'center',
      },
      
      textHeading: {
           marginVertical: 8,
           display: "flex",
           justifyContent: "flex-start",
           alignItems: "flex-start",
      },
      
      listBox: {
           marginBottom: 10,
           display: "flex",
           flexDirection: "row",
           width: width - 40,
           borderRadius: 10,
           backgroundColor: "#ebf0f7",
           paddingVertical: 10 ,
      },
      
      listBoxContainer: {
           marginTop: 20,
           backgroundColor: "#fcfcfc",
           borderRadius: 10,
           display: "flex",
           flexDirection: "column",
           justifyItems: "center",
           alignItems: "center",
      },
      
      listBoxImage: {
           height: 70,
           width: 70,
           borderRadius: 10,
           borderWidth: 1,
           borderColor: "#fff",
      },
      
      card: {
           display: "flex",
           flexDirection: "column",
           justifyContent: "flex-start",
           alignItems: "center",
           borderRadius: 10,
           borderWidth: 1,
           borderColor: "white",
           backgroundColor: "#dfe7f2",
           paddingBottom: 8,
      },
      
      cardImage: {
           height: 180,
           width: 200,
           margin: 10,
      },
 
})

export default styles; 