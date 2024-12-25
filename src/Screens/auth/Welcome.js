import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { Svgs } from '../../assets/Svgs/Svg'
import { useDispatch, useSelector } from 'react-redux';
import { SafeAreaView } from 'react-native';
import CustomLayout from '../../components/CustomLayout'
import { Colors } from '../../Constants/themeColors';
import { normalizeFontSize, scaleHeight, scaleWidth } from '../../utils/responsive';
import { Fonts } from '../../Constants/Fonts';
import CustomButton from '../../components/Buttons/customButton';
import { setDarkMode } from '../../redux/Slices/Theme';
import { SCREENS } from '../../Constants/Screens';

const Welcome = ({navigation}) => {
  const { isDarkMode } = useSelector(store => store.theme);
  const dispatch = useDispatch()
  const styles = StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: isDarkMode? Colors.darkTheme.backgroundColor: Colors.lightTheme.backgroundColor,
      justifyContent: 'center'
    },
    contentContainer:{
      alignItems: 'center',
    },
    heading:{
      color: isDarkMode ? Colors.darkTheme.primaryTextColor :Colors.lightTheme.primaryTextColor,
      fontSize : normalizeFontSize(23),
      fontFamily: Fonts.Medium,
      width: scaleWidth(300),
      textAlign: 'center',
      letterSpacing: 1
    },
    highlightedText:{
      color:isDarkMode? Colors.darkTheme.primaryColor : Colors.lightTheme.primaryColor
    },
    subHeading:{
      color: isDarkMode? Colors.darkTheme.primaryTextColor : Colors.lightTheme.secondryTextColor,
      fontSize : normalizeFontSize(13),
      fontFamily: Fonts.Regular,
      textAlign: 'center',
      width: scaleWidth(350),
      marginVertical: scaleHeight(18)
    },
 btn: {
      backgroundColor: isDarkMode? Colors.darkTheme.primaryBtn.BtnColor : Colors.lightTheme.primaryBtn.BtnColor,
      paddingVertical: scaleHeight(13),
      borderRadius: scaleWidth(6),
      justifyContent: 'center',
      alignItems: 'center',
    },
    btnText:{
      color: isDarkMode? Colors.darkTheme.primaryBtn.TextColor : Colors.lightTheme.primaryBtn.TextColor,
      fontFamily: Fonts.Bold,
      fontSize: normalizeFontSize(14),
    }
    
  })
  return (
    <SafeAreaView style={styles.container} >
      <View style={styles.contentContainer}  >
      <Svgs.Onboarding1 height={scaleHeight(400)} />
      <Text style={styles.heading} >Your <Text style={styles.highlightedText} >Everyday Doctor</Text> Appointment Medical App</Text>
      <Text style={styles.subHeading} >Talk to doctors, buy medications or request an ambulance with ease.</Text>
      </View>
      <View style={{paddingHorizontal: scaleWidth(20), marginBottom: scaleHeight(10),}}>
      <CustomButton containerStyle={styles.btn} text={'Sign Up'} textStyle={styles.btnText} onPress={()=>dispatch(setDarkMode(!isDarkMode)) }   />
      <CustomButton containerStyle={[styles.btn,{marginTop: scaleHeight(20)}]}  text={'Login '} textStyle={[styles.btnText, {color :isDarkMode? Colors.darkTheme.primaryBtn.TextColor : Colors.lightTheme.primaryTextColor}]} mode={true} borderColor={Colors.lightTheme.BorderGrayColor} onPress={()=>navigation.navigate(SCREENS.LOGIN)} />
      </View>
    </SafeAreaView>
  )
}

export default Welcome

