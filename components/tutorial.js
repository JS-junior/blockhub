import React, { useState, useEffect, useLayoutEffect, useRef } from 'react';

import {
  Text,
  View,
  Image,
  StyleSheet,
  FlatList,
  TouchableOpacity,
  ScrollView,
  Platform,
  Linking,
  ToastAndroid,
  Switch,
} from 'react-native';
import TouchableScale from 'react-native-touchable-scale';
import LinearGradient from 'react-native-linear-gradient';
import { ListItem } from 'react-native-elements';
import styles from './styles';
import { Feather } from '@expo/vector-icons';
import { Ionicons } from '@expo/vector-icons';
import { Avatar } from 'react-native-elements';
import Swiper from 'react-native-swiper';

export default function Tutorial({ navigation }) {
  useLayoutEffect(() => {
    navigation.setOptions({
      tabBarIcon: () => <Feather name="settings" size={24} color="black" />,
      headerLeft: () => (
        <Ionicons
          onPress={() => navigation.goBack()}
          name="arrow-back"
          size={24}
          color="lightblue"
        />
      ),
      headerRight: () => (
        <Avatar
          onPress={() => navigation.navigate('Settings')}
          rounded
          source={{
            uri: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRa_QgmSW4n9JXniwB4aixDvPZxElV2XbHN5g&usqp=CAU',
          }}
        />
      ),
    });
  }, [navigation]);


const [userData] = useState([
    {
      img: 'https://randomuser.me/api/portraits/men/81.jpg',
      name: 'Maurice Davis',
    },
    {
      img: 'https://randomuser.me/api/portraits/women/20.jpg',
      name: 'Bernice Alvarez',
    },
    {
      img: 'https://randomuser.me/api/portraits/women/19.jpg',
      name: 'Jennie Barnett',
    },
    {
      img: 'https://randomuser.me/api/portraits/men/55.jpg',
      name: 'Matthew Wagner',
    },
    {
      img: 'https://randomuser.me/api/portraits/men/71.jpg',
      name: 'Christian Wilson',
    },
    {
      img: 'https://randomuser.me/api/portraits/women/21.jpg',
      name: 'Sophia Fernandez',
    },
    {
      img: 'https://randomuser.me/api/portraits/women/42.jpg',
      name: 'Sylvia Lynch',
    },
  ]);

  return (
    <View style={styles.container}>
    
      <Swiper showsButtons={true} style={{ height: 600 }}>
        {userData.map((user) => (
          <View style={{ alignItems: 'center' }}>
            <Image
              style={{ width: 340, height: 600, borderRadius: 20 }}
              source={{ uri: user.img }}
            />
          </View>
        ))}
      </Swiper>
    </View>
  );
}
