import React from 'react';
import {
  Text,
  View,
  StyleSheet,
  Platform,
  TouchableWithoutFeedback,
  TouchableOpacity,
} from 'react-native';
import {
  normalize,
  dim,
  AppBarHeight,
  StatusBarHeight,
} from '../common/Platform';
import Icons from '../common/Icons';
import {COLORS} from '../common/Colors';
import {FONTS} from '../common/FONTS';
import {useNavigation} from '@react-navigation/native';

const Header = props => {
  const {
    headerStyle,
    title,
    left,
    right,
    backButton,
    MenuDrawerButton,
    titleStyle,
  } = props;
  //console.log('homeButtonWhite=>', homeButtonWhite);
  const navigation = useNavigation();
  //console.log('navigation==>', useNavigation());
  return (
    <View style={[styles.header, headerStyle]}>
      <View style={{flex: 0.25}}>
        {backButton ? (
          <Icons
            size={Platform.OS === 'ios' ? 34 : 30}
            type={'Ionicons'}
            name={Platform.OS === 'ios' ? 'ios-arrow-back' : 'md-arrow-back'}
            style={[
              {
                color: COLORS.SECONDARY,
                justifyContent: 'center',
                alignItems: 'center',
                paddingHorizontal: normalize(16),
              },
              titleStyle,
            ]}
            onPress={() => {
              navigation.goBack();
            }}
          />
        ) : null}

        {MenuDrawerButton ? (
          <Icons
            size={Platform.OS === 'ios' ? 34 : 30}
            type={'AntDesign'}
            name={Platform.OS === 'ios' ? 'menufold' : 'menufold'}
            style={[
              {
                color: COLORS.SECONDARY,
                justifyContent: 'center',
                alignItems: 'center',
                paddingHorizontal: normalize(16),
              },
              titleStyle,
            ]}
            onPress={() => {
              navigation.toggleDrawer();
            }}
          />
        ) : null}
      </View>

      <View
        style={{
          flex: 1,
          left: normalize(0),
          justifyContent: 'flex-start',
        }}>
        {/*  title here */}
        {title ? (
          <Text
            numberOfLines={1}
            style={[
              {
                textAlign: 'left',
                color: COLORS.SECONDARY,
                fontWeight: 'bold',
                fontSize: normalize(18),
                //fontFamily: FONTS.BOLD,
              },
              titleStyle,
            ]}>
            {title}
          </Text>
        ) : null}
      </View>

      {/*  Right Side icon here */}
      <View style={styles.right}>{/* <Text>Right Side</Text> */}</View>
    </View>
  );
};

const styles = StyleSheet.create({
  header: {
    alignSelf: 'stretch',
    height: AppBarHeight() + StatusBarHeight(),
    paddingTop: Platform.OS === 'ios' ? normalize(24) : 0,
    flexDirection: 'row',
    width: dim.width,
    justifyContent: 'space-between',
    alignItems: 'center',
    backgroundColor: COLORS.PRIMARY,
  },

  left: {
    flex: 1,
    flexDirection: 'row',
    alignSelf: 'stretch',
    justifyContent: 'flex-start',
    alignItems: 'flex-start',
  },
  right: {
    flex: 0.3,
    justifyContent: 'space-between',
    alignItems: 'flex-end',
    flexDirection: 'row',
    marginHorizontal: normalize(8),
  },
});

export default Header;
