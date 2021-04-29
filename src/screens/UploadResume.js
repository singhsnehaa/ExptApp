import React, {Component} from 'react';
import 'react-native-gesture-handler';
//import {Container,Content,Text,StyleSheet, View,TouchableOpacity,Dimensions,ActivityIndicator, Left,Right,Button,Icon,Body,Title,} from 'react-native';
import {
  Text,
  StyleSheet,
  View,
  TouchableOpacity,
  Dimensions,
  Alert,
  Image,
  ActivityIndicator,
} from 'react-native';
import {
  Container,
  Label,
  Content,
  Header,
  Button,
  Icon,
  H2,
  Left,
  Right,
  Body,
  Title,
  Toast,
  List,
  ListItem,
} from 'native-base';
import {COLORS} from '../common/Colors';
import Icons from '../common/Icons';
import {
  normalize,
  dim,
  AppBarHeight,
  StatusBarHeight,
} from '../common/Platform';
const {width: SCREEN_WIDTH, height: SCREEN_HEIGHT} = Dimensions.get('window');
import Header from '../common/Header';
export class UploadResume extends Component {
  state = {};

  render() {
    const {goBack, navigate} = this.props.navigation;
    // const {id} = this.props.navigation.state;
    // console.log('number: ', id);
    return (
      <Container>
        <Header
          title={'Upload Resume'}
          MenuDrawerButton
          headerStyle={{backgroundColor: COLORS.WARNING, zIndex: 100}}
          titleStyle={{color: COLORS.WHITE}}
        />

        <Content padder contentContainerStyle={{justifyContent: 'center'}}>
          <View>
            <View
              style={{
                flexDirection: 'row',
                justifyContent: 'flex-start',
                padding: normalize(10),
              }}>
              <View
                style={{
                  borderWidth: 1,
                  borderColor: COLORS.GREY,
                  borderRadius: 3,
                  padding: normalize(7),
                }}>
                <Icons size={24} type={'Entypo'} name={'mobile'} />
              </View>
              <View style={{margin: normalize(10)}}>
                <Text style={{fontSize: 16}}>Mobile Device</Text>
              </View>
            </View>

            <View
              style={{
                flexDirection: 'row',
                justifyContent: 'flex-start',
                padding: normalize(10),
              }}>
              <View
                style={{
                  borderWidth: 1,
                  borderColor: COLORS.GREY,
                  borderRadius: 3,
                  padding: normalize(7),
                }}>
                {/* <Icons size ={24} type={'Entypo'} name={'google-drive'} /> */}
                <Image
                  source={require('../assets/googleDrive.png')}
                  style={{width: normalize(24), height: normalize(20)}}
                />
              </View>
              <View style={{margin: normalize(10)}}>
                <Text style={{fontSize: 16}}>Google Drive</Text>
              </View>
            </View>

            <View
              style={{
                flexDirection: 'row',
                justifyContent: 'flex-start',
                padding: normalize(10),
              }}>
              <View
                style={{
                  borderWidth: 1,
                  borderColor: COLORS.GREY,
                  borderRadius: 3,
                  padding: normalize(7),
                }}>
                <Icons
                  size={24}
                  type={'Entypo'}
                  name={'dropbox'}
                  color="#0066AC"
                />
              </View>
              <View style={{margin: normalize(10)}}>
                <Text style={{fontSize: 16}}>Drop Box</Text>
              </View>
            </View>
          </View>
          <Button
            title="Update Resume"
            color={COLORS.PRIMARY}
            onPress={() => Alert.alert('Button with adjusted color pressed')}
          />
        </Content>
      </Container>
    );
  }
}

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
});
