import {
  StyleSheet,
  Text,
  View,
  TouchableOpacity,
  StatusBar,
} from 'react-native';
import React from 'react';
import AntDesign from 'react-native-vector-icons/AntDesign';
import {useNavigation} from '@react-navigation/native';
import { Fonts } from '../../Constants/Fonts';
import { useSelector } from 'react-redux';
import { normalizeFontSize, scaleHeight, scaleWidth } from '../../utils/responsive';
import { Colors } from '../../Constants/themeColors';

const StackHeader = ({
  title,
  rightIcon,
  onBackPress,
  showTitle,
  backIconColor,
  enableStatusBar,
  translucent,
  headerView,
  titleColor,
  backgroundColor,
  statusBarBG,
  statusBarStyle,
  headerStyle,
  iconContainerStyle,
  barStyle,
  headerTxtStyle,
  titleSize,
  rightIconContainer
}) => {
  const navigation = useNavigation();
    const { isDarkMode } = useSelector(store => store.theme);

          const styles = StyleSheet.create({
            header: {
              justifyContent: 'center',
              paddingVertical: 15,
              paddingBottom: scaleHeight(30),
              paddingLeft: scaleWidth(20)
            },
            headerView: {
              width: scaleWidth(360),
              // paddingHorizontal: scaleWidth(100),

              flexDirection: 'row',
              alignItems: 'center',
              // backgroundColor: 'black'
            },
            // iconContainer: {
            //   width: scaleWidth(130),
            //   justifyContent: 'center',
            //   alignItems: 'center',
            //   backgroundColor: 'green',
            // },
            iconContainer1: {
              justifyContent: 'center',
              alignItems: 'center',
              marginRight: 30,
              minWidth: 35,
            },
            headerTextContainer: {
              flex: 1,
            },
            mainText: {
              fontFamily: Fonts.Medium,              
              textAlign: 'center',
            },
          });
  return (
    <View style={{...styles.header, ...headerStyle}}>
      {/* {enableStatusBar == false ? null : (
        <StatusBar
          backgroundColor={
            translucent == true
              ? 'transparent'
              : statusBarBG
              ? statusBarBG
              : '#FFFFFF'
          }
          barStyle={
            barStyle
              ? barStyle
              : statusBarStyle
              ? statusBarStyle
              : translucent
              ? 'light-content'
              : 'dark-content'
          }
          translucent={translucent ? translucent : false}
        />
      )} */}
      <View style={{...styles.headerView, ...headerView}}>
        
        <TouchableOpacity
          onPress={onBackPress ? onBackPress : () => navigation?.goBack()}
          style={{...styles.iconContainer, ...iconContainerStyle}}>
          <AntDesign
            name={'arrowleft'}
            size={scaleHeight(25)}
            color={backIconColor ? backIconColor :isDarkMode? Colors.darkTheme.primaryTextColor: Colors.lightTheme.secondryTextColor}
          />
        </TouchableOpacity>
        {showTitle == false ? null : (
          <View style={styles.headerTextContainer}>
            <Text
              style={[headerTxtStyle,{
                ...styles.mainText,
                color: titleColor ? titleColor : isDarkMode? Colors.darkTheme.primaryTextColor: Colors.lightTheme.primaryTextColor,
                letterSpacing: 0,
                fontSize: titleSize? titleSize : normalizeFontSize(20),
                
                
              }]}>
              {title}
            </Text>
          </View>
        )}
        <TouchableOpacity style={[{...styles.iconContainer1, }, rightIconContainer]}>
          {rightIcon}
        </TouchableOpacity>
      </View>
    </View>
  );
};

export default StackHeader;



