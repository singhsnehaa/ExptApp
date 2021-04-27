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

const Button = props => {
  const {
    title,
    handler,
    bgColor,
    buttonContainer,
    titleStyle,
    smallButton,
    bigButton,
  } = props;

  return (
    <>
      {smallButton ? (
        <TouchableOpacity
          onPress={handler}
          style={[styles.smallButtonContainer, buttonContainer]}>
          <Text style={[styles.appButtonText, titleStyle]}>{title}</Text>
        </TouchableOpacity>
      ) : null}

      {bigButton ? (
        <TouchableOpacity
          onPress={handler}
          style={[
            styles.appButtonContainer,
            {backgroundColor: bgColor ? bgColor : 'blue'},
          ]}>
          <Text style={[styles.appButtonText, titleStyle]}>{title}</Text>
        </TouchableOpacity>
      ) : null}
    </>
  );
};

const styles = StyleSheet.create({
  appButtonContainer: {
    elevation: 8,
    // backgroundColor: 'blue',
    borderRadius: 10,
    paddingVertical: 10,
    paddingHorizontal: 12,
  },

  smallButtonContainer: {
    paddingVertical: 5,
    marginHorizontal: 15,
    borderRadius: 0,
    elevation: 8,
    backgroundColor: 'blue',
  },

  appButtonText: {
    fontSize: 18,
    color: '#fff',
    fontWeight: 'bold',
    alignSelf: 'center',
    textTransform: 'uppercase',
  },
});

export default Button;
