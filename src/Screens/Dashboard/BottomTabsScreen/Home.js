import React, { useState } from 'react';
import { View, Text, TextInput, StyleSheet, FlatList, Image, TouchableOpacity } from 'react-native';
import { Colors } from '../../../Constants/themeColors';
import { useSelector } from 'react-redux';
import CustomButton from '../../../components/Buttons/customButton';
import { scaleHeight, scaleWidth } from '../../../utils/responsive';
import { widthPercentageToDP as wp, heightPercentageToDP as hp } from 'react-native-responsive-screen';
import { RFPercentage } from 'react-native-responsive-fontsize';
import { Fonts } from '../../../Constants/Fonts';
import TxtInput from '../../../components/TextInput/Txtinput';
import UpcomingCard from '../../../components/Card/UpcomingCardd';
import DoctorCard from '../../../components/Card/DoctorCard';
import { SCREENS } from '../../../Constants/Screens';

const doctors = [
  { id: '1', name: 'Dr. Kenny Adeola', specialization: 'General Practitioner', rating: 4.4, reviews: 54 },
  { id: '2', name: 'Dr. Taiwo', specialization: 'General Practitioner', rating: 4.5, reviews: 56 },
  { id: '3', name: 'Dr. Johnson', specialization: 'Pediatrician', rating: 4.8, reviews: 280 },
  { id: '4', name: 'Dr. Nkechi Okeli', specialization: 'Oncologist', rating: 4.3, reviews: 130 },
];

const Home = ({navigation}) => {
  const { isDarkMode } = useSelector(store => store.theme);
  const [searchQuery, setSearchQuery] = useState('')



  const styles = StyleSheet.create({
    container: {
      flex: 1,
      padding: wp(5),
      backgroundColor: isDarkMode? Colors.darkTheme.backgroundColor:Colors.lightTheme.backgroundColor
    },
    rowView: {
      flexDirection: 'row',
      justifyContent: 'space-between'
    },
    header: {
      marginBottom: hp(3),
      flexDirection: 'row'
    },
    greeting: {
      fontSize: RFPercentage(2),
      fontFamily: Fonts.Medium,
      color: isDarkMode
        ? Colors.darkTheme.primaryTextColor
        : Colors.lightTheme.primaryTextColor
    },
    subGreeting: {
      fontSize: RFPercentage(2),
      color: isDarkMode ? Colors.darkTheme.secondryTextColor : Colors.lightTheme.secondryTextColor
    },
    searchBar: {
      marginBottom: hp(2),
      flexDirection: 'row',
      alignItems: 'center',
      justifyContent: 'space-between'
    },
    input: {
      flex: 1,
      padding: wp(3),
      borderRadius: wp(2.5),
      backgroundColor: '#fff',
      elevation: 2
    },
    schedule: {
      marginBottom: hp(2.5)
    },
    sectionTitle: {
      fontSize: RFPercentage(2.2),
      marginBottom: hp(1.5),
      color: isDarkMode ? Colors.darkTheme.primaryTextColor : Colors.lightTheme.primaryTextColor,
      fontFamily: Fonts.Medium
    },
    card: {
      flexDirection: 'row',
      padding: wp(4),
      backgroundColor: '#fff',
      borderRadius: wp(3),
      elevation: 2
    },
    doctorImage: {
      width: wp(12),
      height: wp(12),
      borderRadius: wp(6),
      marginRight: wp(4)
    },

    CategoryLabel:{color: Colors.lightTheme.secondryTextColor, fontFamily: Fonts.Medium, fontSize: RFPercentage(1.6), textAlign: 'center'}
  });


  return (
    <View style={styles.container}>
      {/* Header */}
      <View style={styles.rowView} >
        <View style={styles.header}>
          <Image source={{ uri: 'https://avatar.iran.liara.run/public/48' }} style={styles.doctorImage} />
          <View>
            <Text style={styles.greeting}>Hi, Azeez</Text>
            <Text style={styles.subGreeting}>How are you today?</Text>
          </View>
        </View>
        <CustomButton icon={'bell-outline'} iconSize={RFPercentage(3.2)} iconColor={isDarkMode ? Colors.darkTheme.secondryTextColor : Colors.lightTheme.secondryTextColor} onPress={()=>navigation.navigate(SCREENS.NOTIFICATONS)} />
      </View>


      {/* Search Bar */}
      <View style={styles.searchBar}>
        <TxtInput rightIcon={'magnify'} rightIconSize={RFPercentage(3)}
          rightIconColor={
            isDarkMode
              ? Colors.darkTheme.primaryColor
              : Colors.lightTheme.primaryColor
          } placeholder={'Search doctor, Pharmacy...'} style={{ width: wp(70) }} value={searchQuery} onChangeText={setSearchQuery} containerStyle={{ paddingHorizontal: wp(5) }} />
        <CustomButton icon={'tune-variant'} iconSize={RFPercentage(3.2)} iconColor={isDarkMode ? Colors.darkTheme.secondryColor : Colors.lightTheme.secondryColor} containerStyle={{ backgroundColor: isDarkMode ? Colors.darkTheme.primaryColor : Colors.lightTheme.primaryColor, padding: wp(4), borderRadius: wp(2) }} />
      </View>

      {/* Upcoming Schedule */}
      <View style={styles.schedule}>
        <View style={styles.rowView} >
          <Text style={styles.sectionTitle}>Upcoming schedule</Text>
          <CustomButton text={'See all'} textStyle={{ color: isDarkMode ? Colors.darkTheme.primaryColor : Colors.lightTheme.primaryColor }} />
        </View>
        <UpcomingCard />
      </View>
      <View style={[styles.rowView, {marginBottom: hp(2), paddingHorizontal: wp(6)}]} >
        <View style={{alignItems : 'center', justifyContent: 'center'}} >
      <CustomButton icon={'stethoscope'} iconSize={RFPercentage(3.2)} iconColor={isDarkMode ? Colors.darkTheme.primaryColor : Colors.lightTheme.primaryColor} containerStyle={{alignItems: 'center', justifyContent: 'center'}} />
          <Text style={styles.CategoryLabel} >Doctor</Text>
        </View>
        <View>
        <CustomButton icon={'pill'} iconSize={RFPercentage(3.2)} iconColor={isDarkMode ? Colors.darkTheme.primaryColor : Colors.lightTheme.primaryColor} />
        <Text style={styles.CategoryLabel} >Pharmacy</Text>

        </View>
        <View>
        <CustomButton icon={'ambulance'} iconSize={RFPercentage(3.2)} iconColor={isDarkMode ? Colors.darkTheme.primaryColor : Colors.lightTheme.primaryColor} />
        <Text style={styles.CategoryLabel} >Doctor</Text>

        </View>
        <View>
        <CustomButton icon={'hospital-building'} iconSize={RFPercentage(3.2)} iconColor={isDarkMode ? Colors.darkTheme.primaryColor : Colors.lightTheme.primaryColor} />
        <Text style={styles.CategoryLabel} >Doctor</Text>

        </View>

      </View>
      {/* Top Doctors */}
      <View style={styles.rowView} >
        <Text style={styles.sectionTitle}>Top Doctors</Text>
        <CustomButton text={'See all'} textStyle={{ color: isDarkMode ? Colors.darkTheme.primaryColor : Colors.lightTheme.primaryColor }} onPress={()=> navigation.navigate(SCREENS.SEEALLDOCTORS)} />
      </View>

      <FlatList
        data={doctors}
        keyExtractor={(item) => item.id}
        showsVerticalScrollIndicator={false}
        renderItem={({ item }) => (
         <DoctorCard item={item} />
        )}
      />
    </View>
  );
}



export default Home;
