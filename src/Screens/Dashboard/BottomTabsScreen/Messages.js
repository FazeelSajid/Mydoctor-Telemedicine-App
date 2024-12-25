import React from 'react';
import { View, Text, StyleSheet, Image, FlatList, TouchableOpacity } from 'react-native';
import { widthPercentageToDP as wp, heightPercentageToDP as hp } from 'react-native-responsive-screen';
import { RFPercentage } from 'react-native-responsive-fontsize';
import StackHeader from '../../../components/Header/StackHeader';
import { useSelector } from 'react-redux';
import { Colors } from '../../../Constants/themeColors';
import { Fonts } from '../../../Constants/Fonts';

const contacts = [
  {
    id: '1',
    name: 'Rehan Usman Jazz',
    message: 'Sehi ha',
    time: '1:04 PM',
    avatar: 'https://avatar.iran.liara.run/public/43', // Replace with actual image URL or asset
  },
  {
    id: '2',
    name: 'Ali Khan',
    message: 'Meeting at 2 PM?',
    time: '12:30 PM',
    avatar: 'https://avatar.iran.liara.run/public/44',
  },
  {
    id: '3',
    name: 'Sarah Ahmed',
    message: 'Got it!',
    time: '11:15 AM',
    avatar: 'https://avatar.iran.liara.run/public/40',
  },
];

const Messages = () => {
  const { isDarkMode } = useSelector(store => store.theme);
  const styles = StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: isDarkMode? Colors.darkTheme.backgroundColor: Colors.lightTheme.backgroundColor, // Dark background for theme
      paddingHorizontal: wp('4%'),
    },
    contactContainer: {
      flexDirection: 'row',
      alignItems: 'center',
      backgroundColor: isDarkMode? Colors.darkTheme.secondryColor: Colors.lightTheme.secondryColor,
      padding: wp('3%'),
      borderRadius: wp('2%'),
      marginBottom: hp('1%'),
      elevation: 3
    },
    avatar: {
      width: wp('12%'),
      height: wp('12%'),
      borderRadius: wp('6%'),
      marginRight: wp('4%'),
    },
    textContainer: {
      flex: 1,
    },
    name: {
      color: isDarkMode? Colors.darkTheme.primaryTextColor: Colors.lightTheme.primaryTextColor,
      fontSize: RFPercentage(2.3),
      fontFamily: Fonts.Bold,
    },
    message: {
      color: isDarkMode? Colors.darkTheme.secondryTextColor: Colors.lightTheme.secondryTextColor,
      fontSize: RFPercentage(2),
      marginTop: hp('0.5%'),
    },
    time: {
      color: isDarkMode? Colors.darkTheme.secondryTextColor: Colors.lightTheme.secondryTextColor,
      fontSize: RFPercentage(1.8),
    },
  });
  
  const renderContact = ({ item }) => (
    <TouchableOpacity style={styles.contactContainer}>
      <Image source={{ uri: item.avatar }} style={styles.avatar} />
      <View style={styles.textContainer}>
        <Text style={styles.name}>{item.name}</Text>
        <Text style={styles.message}>{item.message}</Text>
      </View>
      <Text style={styles.time}>{item.time}</Text>
    </TouchableOpacity>
  );

  return (
    <View style={styles.container}>
      <StackHeader title={'Messages'}/>
      <FlatList
        data={contacts}
        keyExtractor={(item) => item.id}
        renderItem={renderContact}
        style={{paddingHorizontal: wp(2)}}
      />
    </View>
  );
};


export default Messages;
