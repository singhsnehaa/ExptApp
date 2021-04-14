import React, {Component} from 'react';
import {
  Text,
  StyleSheet,
  View,
  TouchableOpacity,
  PermissionsAndroid,
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
  Icon,
  H2,
  Left,
  Right,
  Button,
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
import Video from 'react-native-video';

export class VideoList extends Component {
  state = {
    videoLink: '',
    error: true,
  };

  componentDidMount = () => {
    //const url1 = 'https://api.vimeo.com/users/13477675/albums?client_id=<CLIENT_ID>';
    const accessToken = '74a218e620507395c78219ab9421639c';
    const url =
      'https://api.vimeo.com/videos?access_token=5ee2d57186a6a1c29ab1ed46e0f048dd&links=https://vimeo.com/29474908';
    const url2 = 'https://player.vimeo.com/video/470176646';
    const url3 = 'https://player.vimeo.com/video/179859217/config';
    fetch(url3, {
      // method: 'GET',
      // page: 1,
      // headers: new Headers({
      //   'Content-Type': 'application/vnd.vimeo.*+json',
      //   "Authorization": "bearer"+accessToken
      // })
    })
      .then(response => response.json())
      .then(responseObject => {
        //console.log('videoLink===>', responseObject.request.files.progressive[0].url,);
        if (responseObject) {
          this.setState({
            videoLink: responseObject.request.files.progressive[0].url,
            error: false,
          });
        } else {
          this.setState({videoLink: '', error: true});
        }
      });
  };

  onBuffer = isBuffer => {
    console.log('isBuffer=>', isBuffer);
    //here you could set the isBuffer value to the state and then do something with it
    //such as show a loading icon
  };

  render() {
    const {goBack, navigate} = this.props.navigation;
    const {videoLink, error} = this.state;
    const dummyVideo =
      'https://vod-progressive.akamaized.net/exp=1617206610~acl=%2A%2F1309362391.mp4%2A~hmac=b79ddd7fa7bcc3256db5b2205afc83492606ddbe34cada6585874982f40bd360/vimeo-prod-skyfire-std-us/01/971/7/179859217/1309362391.mp4';
    return (
      <Container>
        <Header style={styles.header}>
          <Left>
            <Button
              onPress={() => this.props.navigation.openDrawer()}
              transparent>
              <Icons
                size={24}
                type={'AntDesign'}
                name={'menufold'}
                style={{
                  color: COLORS.WHITE,
                  marginLeft: normalize(5),
                  marginHorizontal: normalize(16),
                }}
              />
            </Button>
          </Left>
          <Body>
            <Text
              style={{
                color: COLORS.WHITE,
                alignSelf: 'center',
                alignItems: 'center',
                fontSize: 18,
              }}>
              Video
            </Text>
          </Body>
          <Right></Right>
        </Header>

        <Content padder contentContainerStyle={{justifyContent: 'center'}}>
          {videoLink ? (
            <Video
              source={{uri: videoLink}}
              //source = {require('../assets/big_buck_bunny.mp4')}
              ref={ref => {
                this.player = ref;
              }} // Store reference
              onBuffer={this.onBuffer} // Callback when remote video is buffering
              //onError={this.videoError} // Callback when video cannot be loaded
              onEnd={this.onEnd}
              //onLoadStart = {this.onLoadStart}                 // Callback when remote video is buffering
              resizeMode={'cover'}
              muted={false}
              repeat={true}
              volume={1.0}
              rate={1.0}
              controls={true}
              audioOnly={true}
              //poster="https://upload.wikimedia.org/wikipedia/commons/thumb/3/34/English_Cocker_Spaniel_4.jpg/800px-English_Cocker_Spaniel_4.jpg"
              ignoreSilentSwitch={'obey'}
              style={styles.backgroundVideo}
            />
          ) : (
            <View style={styles.error}>
              <Icons
                size={30}
                type={'FontAwesome'}
                name={'exclamation-circle'}
                style={{
                  color: COLORS.ERROR,
                }}
              />
              <Text>Could not load video from URL</Text>
            </View>
          )}
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

  backgroundVideo: {
    //borderWidth:1,
    //borderColor:'#000',
    height: 200,
    width: '100%',
  },
  error: {
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: 'rgba(255,255,255,.9)',
    borderWidth: 1,
    borderColor: 'black',
    height: 200,
    width: '100%',
  },
});
