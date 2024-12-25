import React, { useState } from 'react';
import {
  View,
  Text,
  TextInput,
  TouchableOpacity,
  StyleSheet,
  FlatList,
  ScrollView,
} from 'react-native';
import { widthPercentageToDP as wp, heightPercentageToDP as hp } from 'react-native-responsive-screen';
import { RFPercentage } from 'react-native-responsive-fontsize';
import Icon from 'react-native-vector-icons/MaterialIcons';
import StackHeader from '../../components/Header/StackHeader';
import { useSelector } from 'react-redux';
import { Colors } from '../../Constants/themeColors';
import { Fonts } from '../../Constants/Fonts';
import TxtInput from '../../components/TextInput/Txtinput';

const NewAppointment = () => {
  const [selectedDate, setSelectedDate] = useState(14);
  const [selectedTime, setSelectedTime] = useState('');
  const [selectedGender, setSelectedGender] = useState('Male');
  const { isDarkMode } = useSelector(store => store.theme);
  const [pName, setPName] = useState('')
  const [age, setAge] = useState('')
  const [problem, setProblem] = useState('')

  const dates = [
    { day: '13', label: 'MON' },
    { day: '14', label: 'TUE' },
    { day: '15', label: 'WED' },
    { day: '16', label: 'THUR' },
  ];

  const morningTimes = ['09:00 AM', '09:30 AM', '10:00 AM', '10:30 AM'];
  const afternoonTimes = ['12:00 PM', '12:30 PM', '01:30 PM', '02:00 PM'];
  const eveningTimes = ['03:00 PM', '04:30 PM', '05:00 PM'];

  const renderDateItem = ({ item }) => (
    <TouchableOpacity
      style={[
        styles.dateButton,
        selectedDate === parseInt(item.day) && styles.selectedDateButton,
      ]}
      onPress={() => setSelectedDate(parseInt(item.day))}
    >
      <Text style={[styles.dateText,  selectedDate === parseInt(item.day) && styles.seletedDateText]}>{item.day}</Text>
      <Text style={[styles.dateLabel, selectedDate === parseInt(item.day) && styles.seletedDateText]}>{item.label}</Text>
    </TouchableOpacity>
  );

  const renderTimeItem = ({ item }) => (
    <TouchableOpacity
      style={[
        styles.timeButton,
        selectedTime === item && styles.selectedTimeButton,
      ]}
      onPress={() => setSelectedTime(item)}
    >
      <Text
        style={[
          styles.timeText,
          selectedTime === item && styles.selectedTimeText,
        ]}
      >
        {item}
      </Text>
    </TouchableOpacity>
  );
  const styles = StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: isDarkMode ? Colors.darkTheme.backgroundColor : Colors.lightTheme.backgroundColor
    },
    monthTitle: {
      fontSize: RFPercentage(2.5),
      fontFamily: Fonts.Bold,
      color: isDarkMode ? Colors.darkTheme.primaryTextColor : Colors.lightTheme.primaryTextColor,
      marginBottom: hp('1.5%'),

    },
    flatList: {
      marginBottom: hp('2%'),
    },
    dateButton: {
      alignItems: 'center',
      paddingHorizontal: wp('5%'),
      paddingVertical: wp('3%'),
      marginHorizontal: wp('1%'),
      borderRadius: wp('2%'),
      backgroundColor: isDarkMode ? Colors.darkTheme.secondryColor: Colors.lightTheme.secondryColor,
      borderColor: isDarkMode ? Colors.darkTheme.BorderGrayColor: Colors.lightTheme.BorderGrayColor,
      borderWidth: wp(0.4)
    },
    selectedDateButton: {
      backgroundColor: isDarkMode?Colors.darkTheme.primaryColor: Colors.lightTheme.primaryColor,
      borderColor: isDarkMode ? Colors.darkTheme.primaryColor: Colors.lightTheme.primaryColor,
      borderWidth: wp(0.4)
    },
    seletedDateText:{
      color: Colors.white
    },
    dateText: {
      fontSize: RFPercentage(2.4),
      fontFamily: Fonts.Medium,
      color: isDarkMode ? Colors.darkTheme.secondryTextColor : Colors.lightTheme.secondryTextColor,
    },
    dateLabel: {
      fontSize: RFPercentage(1.8),
      fontFamily: Fonts.Regular,
      color: isDarkMode ? Colors.darkTheme.secondryTextColor : Colors.lightTheme.secondryTextColor,
      marginTop: hp('1.5%'),
    },
    sectionTitle: {
      fontSize: RFPercentage(2.5),
      fontFamily: Fonts.Bold,
      color: isDarkMode ? Colors.darkTheme.primaryTextColor : Colors.lightTheme.primaryTextColor,
      marginBottom: hp('1%'),
    },
    subSectionTitle: {
      fontSize: RFPercentage(2),
      fontFamily: Fonts.Bold,
      color: isDarkMode ? Colors.darkTheme.primaryTextColor : Colors.lightTheme.primaryTextColor,
      marginBottom: hp('1%'),
    },
    timeButton: {
      padding: wp('3%'),
      marginHorizontal: wp('1%'),
      alignItems: 'center',
      borderRadius: wp('2%'),
      backgroundColor: isDarkMode ? Colors.darkTheme.secondryColor: Colors.lightTheme.secondryColor,
      borderColor: isDarkMode ? Colors.darkTheme.BorderGrayColor: Colors.lightTheme.BorderGrayColor,
      borderWidth: wp(0.4)
    },
    selectedTimeButton: {
      backgroundColor: isDarkMode?Colors.darkTheme.primaryColor: Colors.lightTheme.primaryColor,
      borderColor: isDarkMode ? Colors.darkTheme.primaryColor: Colors.lightTheme.primaryColor,
      borderWidth: wp(0.4)
    },
    timeText: {
      fontSize: RFPercentage(1.7),
      fontFamily: Fonts.Regular,
      color: isDarkMode ? Colors.darkTheme.secondryTextColor : Colors.lightTheme.secondryTextColor,
    },
    selectedTimeText: {
      color: Colors.darkTheme.primaryTextColor,
      fontFamily: Fonts.Bold
    },
    input: {
      borderWidth: 1,
      borderColor: '#ccc',
      borderRadius: wp('2%'),
      padding: wp('3%'),
      fontSize: RFPercentage(2),
      marginBottom: hp('2%'),
      color: '#000',
    },
    problemInput: {
      height: hp('10%'),
      textAlignVertical: 'top',
    },
    genderContainer: {
      flexDirection: 'row',
      justifyContent: 'space-between',
      marginBottom: hp('1%'),
    },
    genderButton: {
      flex: 1,
      marginHorizontal: wp('1%'),
      padding: wp('3%'),
      alignItems: 'center',
      borderRadius: wp('2%'),
      borderWidth: 1,
      borderColor: isDarkMode ? Colors.darkTheme.BorderGrayColor: Colors.lightTheme.BorderGrayColor,
      borderWidth: wp(0.4),
      backgroundColor: isDarkMode ? Colors.darkTheme.secondryColor: Colors.lightTheme.secondryColor,
    },
    selectedGenderButton: {
      backgroundColor: isDarkMode?Colors.darkTheme.primaryColor: Colors.lightTheme.primaryColor,
      borderColor: isDarkMode ? Colors.darkTheme.primaryColor: Colors.lightTheme.primaryColor,
      borderWidth: wp(0.4)
    },
    genderText: {
      fontSize: RFPercentage(2),
      fontFamily: Fonts.Regular,
      color: isDarkMode ? Colors.darkTheme.secondryTextColor : Colors.lightTheme.secondryTextColor,
    },
    selectedGenderText: {
      color: Colors.white,
      fontFamily: Fonts.Bold
    },
    label:{
      fontFamily: Fonts.Regular,
      fontSize: RFPercentage(2),
      color: isDarkMode? Colors.darkTheme.primaryTextColor: Colors.lightTheme.secondryTextColor,
      marginVertical: wp(2)
    }
  });
  return (
    <ScrollView style={styles.container} >
      {/* <View style={styles.header}>
        <Icon name="arrow-back" size={RFPercentage(3)} color="#000" />
        <Text style={styles.headerTitle}>New Appointment</Text>
      </View> */}
      <StackHeader title={'New Appointment'} />
      <View style={{ paddingHorizontal: wp(5) }} >
        <Text style={styles.monthTitle}>Nov, 2023</Text>
        <FlatList
          horizontal
          data={dates}
          renderItem={renderDateItem}
          keyExtractor={(item) => item.day}
          showsHorizontalScrollIndicator={false}
          style={styles.flatList}
        />
        <Text style={styles.sectionTitle}>Available Time</Text>
        <Text style={styles.subSectionTitle}>Morning</Text>
        <FlatList
          horizontal
          data={morningTimes}
          renderItem={renderTimeItem}
          keyExtractor={(item) => item}
          showsHorizontalScrollIndicator={false}
          style={styles.flatList}
        />
        <Text style={styles.subSectionTitle}>Afternoon</Text>
        <FlatList
          horizontal
          data={afternoonTimes}
          renderItem={renderTimeItem}
          keyExtractor={(item) => item}
          showsHorizontalScrollIndicator={false}
          style={styles.flatList}
        />
        <Text style={styles.subSectionTitle}>Evening</Text>
        <FlatList
          horizontal
          data={eveningTimes}
          renderItem={renderTimeItem}
          keyExtractor={(item) => item}
          showsHorizontalScrollIndicator={false}
          style={styles.flatList}
        />
        <Text style={styles.sectionTitle}>Patient Details</Text>
        <Text style={[styles.label, {marginTop: wp(0)}]} >Full Name</Text>
        <TxtInput placeholder={'John Doe'} style={{ flex:1,  }} value={pName} onChangeText={setPName} containerStyle={{ paddingHorizontal: wp(3) }} />
        <Text style={styles.label} >Age</Text>
        <TxtInput placeholder={'26 - 30'} style={{ flex:1,  }} value={age} onChangeText={setAge} containerStyle={{ paddingHorizontal: wp(3) }} leftIcon={'chevron-down'} leftIconColor={isDarkMode? Colors.darkTheme.primaryTextColor: Colors.lightTheme.secondryTextColor} leftIconSize={wp(7)} />
        <Text style={styles.label} >Gender</Text>
        <View style={styles.genderContainer}>
          <TouchableOpacity
            style={[
              styles.genderButton,
              selectedGender === 'Male' && styles.selectedGenderButton,
            ]}
            onPress={() => setSelectedGender('Male')}
          >
            <Text
              style={[
                styles.genderText,
                selectedGender === 'Male' && styles.selectedGenderText,
              ]}
            >
              Male
            </Text>
          </TouchableOpacity>
          <TouchableOpacity
            style={[
              styles.genderButton,
              selectedGender === 'Female' && styles.selectedGenderButton,
            ]}
            onPress={() => setSelectedGender('Female')}
          >
            <Text
              style={[
                styles.genderText,
                selectedGender === 'Female' && styles.selectedGenderText,
              ]}
            >
              Female
            </Text>
          </TouchableOpacity>
        </View>
        <Text style={styles.label} >Write your problem</Text>
        <TxtInput placeholder={'Describe your problem'} style={{ flex:1, marginBottom: hp(4), }}  value={problem} onChangeText={setProblem} containerStyle={{ paddingHorizontal: wp(3),  }} multiline={true} numberOfLines={5}  />

      </View>

    </ScrollView>
  );
};



export default NewAppointment;
