import React, { useState } from 'react';
import { View, Text, StyleSheet, TextInput, TouchableOpacity, Image, ScrollView } from 'react-native';
import { widthPercentageToDP as wp, heightPercentageToDP as hp } from 'react-native-responsive-screen';
import { RFPercentage } from 'react-native-responsive-fontsize';
import Icon from 'react-native-vector-icons/MaterialIcons';
import { useSelector } from 'react-redux';
import { Colors } from '../../Constants/themeColors';
import StackHeader from '../../components/Header/StackHeader';
import TxtInput from '../../components/TextInput/Txtinput';
import CustomButton from '../../components/Buttons/customButton';
import { Fonts } from '../../Constants/Fonts';

const UpdateProfile = ({ navigation }) => {
    const { isDarkMode } = useSelector(store => store.theme);
    const [name, setName] = useState('Adewole Abdulazeez');
    const [phoneNumber, setPhoneNumber] = useState('0810 666 6666');
    const [email, setEmail] = useState('example@domainname.com');
    const [dateOfBirth, setDateOfBirth] = useState('');



    const styles = StyleSheet.create({
        container: {
            flex: 1,
            backgroundColor: isDarkMode ? Colors.darkTheme.backgroundColor : Colors.lightTheme.backgroundColor,
        },
      
        profileContainer: {
            alignItems: 'center',
            marginTop: hp('3%'),
        },
        profileImage: {
            width: wp('25%'),
            height: wp('25%'),
            borderRadius: wp('12.5%'),
            marginBottom: hp('1%'),
        },
        editIcon: {
            position: 'absolute',
            bottom: 0,
            right: wp('37%'),
            backgroundColor: isDarkMode ? Colors.darkTheme.primaryColor : Colors.lightTheme.primaryColor,
            borderRadius: wp('5%'),
            padding: wp('2%'),
            borderWidth: wp(0.5),
            borderColor: isDarkMode ? Colors.darkTheme.secondryColor : Colors.lightTheme.secondryColor
        },
        form: {
            marginTop: hp('2%'),
            paddingHorizontal: wp('4%'),
        },
        label: {
            fontSize: RFPercentage(2.2),
            fontFamily: Fonts.Medium,
            color: isDarkMode ? Colors.darkTheme.primaryTextColor : Colors.lightTheme.primaryTextColor,
            marginVertical: hp('1%'),
        },

        row: {
            flexDirection: 'row',
            alignItems: 'center',
        },
        flex: {
            flex: 1,
        },
        changeButton: {
            color: isDarkMode ? Colors.darkTheme.primaryColor : Colors.lightTheme.primaryColor,
            fontSize: RFPercentage(2),
            marginLeft: wp('3%'),
        },

        btn: {
            backgroundColor: isDarkMode ? Colors.darkTheme.primaryBtn.BtnColor : Colors.lightTheme.primaryBtn.BtnColor,
            paddingVertical: hp(1.5),
            borderRadius: wp(2),
            justifyContent: 'center',
            alignItems: 'center',
            marginVertical: hp(2),
            marginHorizontal: wp(4)
            // borderColor:  isDarkMode ? Colors.darkTheme.primaryBtn.BtnColor : Colors.lightTheme.primaryBtn.BtnColor,
            // borderWidth: scaleHeight(2)
        },
        btnText: {
            color: isDarkMode ? Colors.darkTheme.primaryBtn.TextColor : Colors.lightTheme.secondryBtn.TextColor,
            fontFamily: Fonts.Bold,
            fontSize: RFPercentage(2),

        },

    });


    return (
        <ScrollView style={styles.container}>
            {/* Header */}
            {/* <View style={styles.header}>
        <TouchableOpacity>
          <Icon name="arrow-back" size={RFPercentage(3)} color="#000" />
        </TouchableOpacity>
        <Text style={styles.headerTitle}>Profile</Text>
      </View> */}
            <StackHeader title={'Update Profile'} />
            {/* Profile Picture Section */}
            <View style={styles.profileContainer}>
                <Image
                    source={{ uri: 'https://avatar.iran.liara.run/public/43' }} // Replace with actual image
                    style={styles.profileImage}
                />
                <TouchableOpacity style={styles.editIcon}>
                    <Icon name="edit" size={RFPercentage(2.5)} color={isDarkMode? Colors.darkTheme.backgroundColor: Colors.lightTheme.backgroundColor} />
                </TouchableOpacity>
            </View>

            {/* Form Section */}
            <View style={styles.form}>
                {/* Name */}
                <Text style={styles.label}>Name</Text>
                <TxtInput placeholder={'Full Name'} style={{ width: wp(90) }} value={name} onChangeText={setName} containerStyle={{ paddingHorizontal: wp(5) }} />
                {/* Phone Number */}
                <Text style={styles.label}>Phone Number</Text>
                <View style={styles.row}>
                    {/* <TextInput
                        style={[styles.input, styles.flex]}
                        value={phoneNumber}
                        onChangeText={setPhoneNumber}
                        keyboardType="phone-pad"
                    /> */}
                    <TxtInput placeholder={'Full Name'} style={{ width: wp(75) }} value={phoneNumber} onChangeText={setPhoneNumber} containerStyle={{ paddingHorizontal: wp(5) }} />

                    <TouchableOpacity>
                        <Text style={styles.changeButton}>Change</Text>
                    </TouchableOpacity>
                </View>

                {/* Email */}
                <Text style={styles.label}>Email</Text>
                {/* <TextInput
                    style={styles.input}
                    value={email}
                    onChangeText={setEmail}
                    keyboardType="email-address"
                    placeholder="example@domainname.com"
                    placeholderTextColor="#ccc"
                /> */}
                <TxtInput placeholder={'example@domainname.com'} style={{ width: wp(90) }} value={email} onChangeText={setEmail} containerStyle={{ paddingHorizontal: wp(5) }} />


                {/* Date of Birth */}
                <Text style={styles.label}>Date of Birth</Text>

                <TxtInput placeholder={'DD / MM / YYYY'} style={{ width: wp(90) }} value={dateOfBirth} onChangeText={setDateOfBirth} containerStyle={{ paddingHorizontal: wp(5) }} />


                {/* Gender */}
                <Text style={styles.label}>Gender</Text>
                {/* <View style={styles.row}>
                    <TextInput
                        style={[styles.input, styles.flex]}
                        value={gender}
                        onChangeText={setGender}
                        placeholder="Select"
                        placeholderTextColor="#ccc"
                    />
                    <Icon name="arrow-drop-down" size={RFPercentage(3)} color="#aaa" />
                </View> */}
                <TxtInput leftIcon={'chevron-down'} leftIconSize={RFPercentage(3)} leftIconColor={isDarkMode ? Colors.darkTheme.primaryColor : Colors.lightTheme.primaryColor} placeholder={'Male/Female'} style={{ width: wp(90) }} value={dateOfBirth} onChangeText={setDateOfBirth} containerStyle={{ paddingHorizontal: wp(5) }} />

            </View>

            {/* Update Button */}
            {/* <TouchableOpacity style={styles.updateButton}>
                <Text style={styles.updateButtonText}>Update Profile</Text>
            </TouchableOpacity> */}
            <CustomButton containerStyle={styles.btn} text={'Update Profile'} textStyle={[styles.btnText, { color: isDarkMode ? Colors.darkTheme.primaryBtn.TextColor : Colors.lightTheme.primaryBtn.TextColor, }]} onPress={() => navigation.goBack()} />


        </ScrollView>
    );
};



export default UpdateProfile;
