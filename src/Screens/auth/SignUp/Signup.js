import React, { useState, useCallback } from 'react';
import {
  SafeAreaView,
  ScrollView,
  StyleSheet,
  Text,
  TouchableOpacity,
  useWindowDimensions,
  View,
} from 'react-native';
import { useSelector } from 'react-redux';
import { Colors } from '../../../Constants/themeColors';
import { useAlert } from '../../../Providers/AlertContext';
import { Fonts } from '../../../Constants/Fonts';
import { normalizeFontSize, scaleHeight, scaleWidth } from '../../../utils/responsive';
import StackHeader from '../../../components/Header/StackHeader';
import { Svgs } from '../../../assets/Svgs/Svg';
import TxtInput from '../../../components/TextInput/Txtinput';
import CustomButton from '../../../components/Buttons/customButton';
import { SCREENS } from '../../../Constants/Screens';

const CompleteProfile = React.memo(({ name, setName, gender, setGender, email, setEmail, password, setPassword, isDarkMode, handleNext, styles }) => {

 

  return (
    <ScrollView style={styles.contentContainer}>
      <Text style={styles.heading}>Complete your Profile</Text>
      <Text style={styles.subText}>
        Don't worry only you can see your personal info{'\n'}no one else will be able to see it
      </Text>
      <View style={styles.profileImage}>
        <Svgs.Profile />
      </View>
      <TxtInput
        placeholder={'Full Name'}
        style={{ width: scaleWidth(330), marginBottom: scaleHeight(20) }}
        containerStyle={{ paddingHorizontal: scaleWidth(10) }}
        value={name}
        onChangeText={setName}
      />
      <TxtInput
        placeholder={'Gender'}
        style={{ width: scaleWidth(330), marginBottom: scaleHeight(20) }}
        containerStyle={{ paddingHorizontal: scaleWidth(10) }}
        value={gender}
        onChangeText={setGender}
      />
      <TxtInput
        placeholder={'Email'}
        style={{ width: scaleWidth(330), marginBottom: scaleHeight(20) }}
        containerStyle={{ paddingHorizontal: scaleWidth(10) }}
        value={email}
        onChangeText={setEmail}
      />
      <TxtInput
        placeholder={'Password'}
        style={{ width: scaleWidth(330), marginBottom: scaleHeight(20) }}
        containerStyle={{ paddingHorizontal: scaleWidth(10) }}
        value={password}
        onChangeText={setPassword}
      />
      <Text style={styles.subText}>
        By tapping "Next" you agree to our{' '}
        <Text style={{ color: isDarkMode ? Colors.darkTheme.primaryColor : Colors.lightTheme.primaryColor }}>
          Terms & Conditions
        </Text>{' '}
        and{' '}
        <Text style={{ color: isDarkMode ? Colors.darkTheme.primaryColor : Colors.lightTheme.primaryColor }}>
          Privacy Policy.
        </Text>
      </Text>
      <CustomButton
        containerStyle={styles.btn}
        text={'Next'}
        textStyle={[
          styles.btnText,
          { color: isDarkMode ? Colors.darkTheme.primaryBtn.TextColor : Colors.lightTheme.primaryBtn.TextColor },
        ]}
        onPress={handleNext}
      />
    </ScrollView>
  );
});

const SignUp1 = React.memo(({ phone_no, setPhone_no, isDarkMode, handleSignUp, navigation, styles }) => {
  return (
    <View style={styles.contentContainer}>
      <Text style={[styles.heading, { marginTop: scaleHeight(30) }]}>Enter Your Phone Number</Text>
      <TxtInput
        rightIcon={'phone'}
        rightIconSize={normalizeFontSize(25)}
        rightIconColor={isDarkMode ? Colors.darkTheme.secondryTextColor : Colors.lightTheme.secondryTextColor}
        placeholder={'Phone Number'}
        style={{ width: scaleWidth(330) }}
        containerStyle={{ paddingHorizontal: scaleWidth(10) }}
        value={phone_no}
        onChangeText={setPhone_no}
      />
      <CustomButton
        containerStyle={styles.btn}
        text={'Sign Up'}
        textStyle={[
          styles.btnText,
          { color: isDarkMode ? Colors.darkTheme.primaryBtn.TextColor : Colors.lightTheme.primaryBtn.TextColor },
        ]}
        onPress={handleSignUp}
      />
      <Text style={styles.OrTxt}>Or sign up with</Text>
      <View style={[styles.rowView, { height: scaleHeight(40) }]}>
        <CustomButton svg={<Svgs.Facebook height={scaleHeight(40)} width={scaleWidth(40)} />} />
        <CustomButton svg={<Svgs.Google height={scaleHeight(40)} width={scaleWidth(40)} />} />
      </View>
      <View style={{flexDirection: 'row', alignSelf: 'center', marginTop: scaleHeight(20)}} >
        <Text style={[styles.OrTxt, {textAlign: 'center'}]}>
        Already have an account?
      </Text>
      <CustomButton
          text={' Sign In'}
          onPress={() => navigation.navigate(SCREENS.LOGIN)}
          textStyle={[styles.OrTxt, {textAlign: 'center', color: isDarkMode ?Colors.darkTheme.primaryColor: Colors.lightTheme.primaryColor}]}
        />
        </View>
    </View>
  );
});

const Signup = ({ navigation }) => {
  const { isDarkMode } = useSelector((store) => store.theme);
  const { showAlert } = useAlert();
  const [name, setName] = useState('');
  const [gender, setGender] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [phone_no, setPhone_no] = useState('');
  const [index, setIndex] = useState(0);

  const validate = useCallback(() => {

      if (!name || name.length === 0) {
        showAlert('Please Enter Name', 'error');
        return false;
      } else if (name.length < 3) {
        showAlert('Name must be at least 3 characters long', 'error');
        return false;
      }
      if (!gender || gender.length === 0) {
        showAlert('Please Enter Gender', 'error');
        return false;
      }
      if (!email || email.length === 0) {
        showAlert('Please Enter Email Address', 'error');
        return false;
      } else if (!/\S+@\S+\.\S+/.test(email)) {
        showAlert('Please Enter a Valid Email Address', 'error');
        return false;
      }
      if (!password || password.length === 0) {
        showAlert('Please Enter Password', 'error');
        return false;
      } else if (password.length < 8) {
        showAlert('Password must be at least 8 characters long', 'error');
        return false;
      }
  

    return true;
  }, [name, gender, email, password, showAlert]);

  const validate2 = () => {
    if (!phone_no || phone_no.trim().length === 0) {
      showAlert('Please enter a phone number', 'error');
      return false;
    }
  
    if (!/^\d{10,15}$/.test(phone_no)) {
      showAlert('Please enter a valid phone number (10-15 digits)', 'error');
      return false;
    }
  
    // If all validations pass
    return true;
  };

  const handleNext = useCallback(() => {
    console.log('handleNext');
    

      if (validate()) {
        setIndex(1);
      }

    
  }, [validate]);


  const handleSignUp = useCallback(() => {
    if (validate2()) {
      console.log('Sign Up');
      
    }
  }, [])
  const styles = StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: isDarkMode ? Colors.darkTheme.backgroundColor : Colors.lightTheme.backgroundColor,
      // alignItems: 'center',
    },
    rowView: {
      flexDirection: 'row',
      alignItems: 'center',
      alignSelf: 'center',
      justifyContent: 'space-between',
      // backgroundColor: 'green',
      height: scaleHeight(20),
      width: scaleWidth(130)

    },
    seprator: {
      height: scaleHeight(3),
      backgroundColor: isDarkMode ? Colors.darkTheme.secondryColor : Colors.lightTheme.BorderGrayColor,
      width: scaleWidth(50),
    },
    contentContainer: {
      flex: 1,
      paddingHorizontal: scaleWidth(20),
    },
    heading: {
      fontSize: normalizeFontSize(20),
      color: isDarkMode ? Colors.darkTheme.primaryTextColor : Colors.lightTheme.primaryTextColor,
      fontFamily: Fonts.Bold,
      marginTop: scaleHeight(10),
      marginBottom: scaleHeight(10),
    },
    subText: {
      fontSize: normalizeFontSize(13),
      fontFamily: Fonts.Regular,
      color: isDarkMode ? Colors.darkTheme.secondryTextColor : Colors.lightTheme.secondryTextColor,
      // backgroundColor: 'green'
    },
    profileImage: {
      borderWidth: 1,
      borderColor: isDarkMode ? Colors.darkTheme.BorderGrayColor:Colors.lightTheme.BorderGrayColor,
      width: scaleWidth(100),
      height: scaleHeight(100),
      borderRadius: scaleWidth(100) / 2,
      alignSelf: 'center',
      marginBottom: 30,
      alignItems: 'center',
      justifyContent: 'center',
      backgroundColor: isDarkMode ? Colors.darkTheme.secondryColor : Colors.lightTheme.secondryColor,
      marginTop: scaleHeight(30)
    },
    btn: {
      backgroundColor: isDarkMode ? Colors.darkTheme.primaryBtn.BtnColor : Colors.lightTheme.primaryBtn.BtnColor,
      paddingVertical: scaleHeight(13),
      borderRadius: scaleWidth(6),
      justifyContent: 'center',
      alignItems: 'center',
      marginTop: scaleHeight(30),
      // borderColor:  isDarkMode ? Colors.darkTheme.primaryBtn.BtnColor : Colors.lightTheme.primaryBtn.BtnColor,
      // borderWidth: scaleHeight(2)
    },
    btnText: {
      color: isDarkMode ? Colors.darkTheme.primaryBtn.TextColor : Colors.lightTheme.secondryBtn.TextColor,
      fontFamily: Fonts.Bold,
      fontSize: normalizeFontSize(14),

    },
    OrTxt: {
      color: isDarkMode ? Colors.darkTheme.secondryTextColor : Colors.lightTheme.secondryTextColor,
      textAlign: 'center',
      marginTop: scaleHeight(15),
      marginBottom: scaleHeight(15),

    },
 signInText: {
      color: isDarkMode ? Colors.darkTheme.primaryColor : Colors.lightTheme.primaryColor,
      fontSize: normalizeFontSize(14),
      fontFamily: Fonts.Regular,
      // paddingTop: scaleHeight(10)
    },

  })

  return (
    <SafeAreaView style={styles.container}>
      <StackHeader title={'Sign Up'} headerView={{ marginLeft: scaleWidth(20) }} headerStyle={{}} />
      <View style={styles.rowView}>
        <TouchableOpacity
          style={[
            styles.seprator,
            index === 0 && { backgroundColor: isDarkMode ? Colors.darkTheme.primaryColor : Colors.lightTheme.primaryColor },
          ]}
          onPress={() => setIndex(0)}
        />
        <TouchableOpacity
          style={[
            styles.seprator,
            index === 1 && { backgroundColor: isDarkMode ? Colors.darkTheme.primaryColor : Colors.lightTheme.primaryColor },
          ]}
          onPress={() => setIndex(1)}
        />
      </View>
      {index === 0 ? (
        <CompleteProfile
          name={name}
          setName={setName}
          gender={gender}
          setGender={setGender}
          email={email}
          setEmail={setEmail}
          password={password}
          setPassword={setPassword}
          isDarkMode={isDarkMode}
          handleNext={handleNext}
          styles={styles}

        />
      ) : (
        <SignUp1
          phone_no={phone_no}
          setPhone_no={setPhone_no}
          isDarkMode={isDarkMode}
          handleSignUp={handleSignUp}
          navigation={navigation}
          styles={styles}
        />
      )}
    </SafeAreaView>
  );
};

export default Signup;
