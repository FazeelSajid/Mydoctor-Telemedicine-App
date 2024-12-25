import React from 'react';
import { View, Text, StyleSheet, Image, TouchableOpacity, FlatList } from 'react-native';
import { widthPercentageToDP as wp, heightPercentageToDP as hp } from 'react-native-responsive-screen';
import { RFPercentage } from 'react-native-responsive-fontsize';
import Icon from 'react-native-vector-icons/MaterialIcons'; // Import vector icons
import { SCREENS } from '../../../Constants/Screens';
import { Colors } from '../../../Constants/themeColors';
import { useSelector } from 'react-redux';
import StackHeader from '../../../components/Header/StackHeader';
import { Fonts } from '../../../Constants/Fonts';

const profileOptions = [
  { id: '1', name: 'Update Profile', icon: 'person-outline', screen: SCREENS.UPDATEPROFILE },
  { id: '2', name: 'Favorite', icon: 'favorite-outline', screen: SCREENS.FAVORITES },
  { id: '3', name: 'Help Center', icon: 'help-outline', screen: SCREENS.HELPCENTER},
  { id: '4', name: 'Privacy Policy', icon: 'security' , screen: SCREENS.TERMSANDCONDITION},
  { id: '5', name: 'Settings', icon: 'settings', screen: SCREENS.SETTINGS },
  { id: '6', name: 'Payment Options', icon: 'payment', screen: SCREENS.PAYMENTOPTION },
  { id: '7', name: 'Password Manager', icon: 'lock', screen: SCREENS.PASSWORDMANAGER },
  { id: '8', name: 'Log out', icon: 'logout' , screen: SCREENS.MESSAGES, button: true},
];

const Profile = ({navigation}) => {
  const { isDarkMode } = useSelector(store => store.theme);
  const styles = StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: isDarkMode? Colors.darkTheme.backgroundColor: Colors.lightTheme.backgroundColor,
    },
      header: {
        flexDirection: 'row',
        alignItems: 'center',
        padding: wp('4%'),
      },
      headerTitle: {
        fontSize: RFPercentage(2.8),
        fontWeight: 'bold',
        color: isDarkMode? Colors.darkTheme.primaryTextColor: Colors.lightTheme.primaryTextColor,
        marginLeft: wp('4%'),
      },
      profileContainer: {
        alignItems: 'center',
        // marginTop: hp('0%'),
      },
      profileImage: {
        width: wp('25%'),
        height: wp('25%'),
        borderRadius: wp('12.5%'),
        marginBottom: hp('1%'),
      },
      editIcon: {
        position: 'absolute',
        bottom: wp(10.2),
        right: wp('33%'),
        backgroundColor: isDarkMode? Colors.darkTheme.primaryColor: Colors.lightTheme.primaryColor,
        borderRadius: wp('5%'),
        padding: wp('2%'),
        borderWidth: wp(0.5),
        borderColor: isDarkMode?Colors.darkTheme.secondryColor: Colors.lightTheme.secondryColor
      },
      profileName: {
        fontSize: RFPercentage(2.5),
        fontFamily: Fonts.Bold,
        color: isDarkMode? Colors.darkTheme.primaryTextColor: Colors.lightTheme.primaryTextColor,
        marginTop: hp('1%'),
      },
      optionsList: {
        marginTop: hp('3%'),
        paddingHorizontal: wp('4%'),
      },
      optionContainer: {
        flexDirection: 'row',
        alignItems: 'center',
        paddingVertical: hp('2%'),
        borderBottomWidth: wp(0.5),
        borderBottomColor: isDarkMode?Colors.darkTheme.BorderGrayColor: Colors.lightTheme.BorderGrayColor,
        marginLeft: wp(2)
      },
      optionIcon: {
        marginRight: wp('4%'),
      },
      optionText: {
        flex: 1,
        fontSize: RFPercentage(2.2),
        color: isDarkMode? Colors.darkTheme.primaryTextColor: Colors.lightTheme.primaryTextColor,
        fontFamily: Fonts.Regular
      },
    });
  const renderOption = ({ item }) => (
    <TouchableOpacity style={styles.optionContainer} onPress={()=> !item.button && navigation.navigate(item.screen)} >
      <Icon name={item.icon} size={RFPercentage(3.2)} color={isDarkMode?Colors.darkTheme.primaryColor: Colors.lightTheme.primaryColor} style={styles.optionIcon} />
      <Text style={styles.optionText}>{item.name}</Text>
      <Icon name="chevron-right" size={RFPercentage(3)} color={isDarkMode?Colors.darkTheme.primaryColor: Colors.lightTheme.primaryColor} />
    </TouchableOpacity>
  );

  return (
    <View style={styles.container}>
      
      <StackHeader title={'Profile'}/>

      <View style={styles.profileContainer}>
        <Image
          source={{ uri: 'https://avatar.iran.liara.run/public/43' }} // Replace with actual image
          style={styles.profileImage}
        />
        <TouchableOpacity style={styles.editIcon}>
          <Icon name="edit" size={RFPercentage(2.5)} color={isDarkMode? Colors.darkTheme.backgroundColor: Colors.lightTheme.backgroundColor} />
        </TouchableOpacity>
        <Text style={styles.profileName}>Adewole Abdulazeez</Text>
      </View>

      {/* Options List */}
      <FlatList
        data={profileOptions}
        keyExtractor={(item) => item.id}
        renderItem={renderOption}
        contentContainerStyle={styles.optionsList}
      />
    </View>
  );
};



export default Profile;
