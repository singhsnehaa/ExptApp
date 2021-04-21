import React, {useState} from 'react';
import {
  Text,
  StyleSheet,
  View,
  TouchableOpacity,
  TextInput,
} from 'react-native';
import Header from '../common/Header';
import Icons from '../common/Icons';
import {COLORS} from '../common/Colors';

function InnerDetailsSetting(props) {
  console.log('props [InnerDetailsSetting]', props);
  const {route} = props;
  const phone = route.params?.phone;
  const [number, setNumber] = useState(phone || 0);

  return (
    <>
      <Header
        title={'Inner Setting'}
        MenuDrawerButton
        headerStyle={{backgroundColor: COLORS.PRIMARY, zIndex: 100}}
        titleStyle={{color: COLORS.WHITE}}
      />

      <View style={{flex: 1, justifyContent: 'center', alignItems: 'center'}}>
        <Text style={{fontSize: 25, color: COLORS.WARNING}}>
          Inner Setting Details
        </Text>

        <View>
          <TextInput
            style={styles.input}
            multiline={true}
            numberOfLines={4}
            onChangeText={num => setNumber(num)}
            value={number}
          />
        </View>

        <TouchableOpacity
          style={{
            padding: 10,
            backgroundColor: COLORS.GREY,
            margin: 10,
          }}
          onPress={() => props.navigation.goBack()}>
          <Text style={{color: COLORS.WHITE}}> Go to Back</Text>
        </TouchableOpacity>
      </View>
    </>
  );
}

const styles = StyleSheet.create({
  input: {
    margin: 15,
    height: 40,
    borderColor: '#7a42f4',
    borderWidth: 1,
  },
});

export default InnerDetailsSetting;
