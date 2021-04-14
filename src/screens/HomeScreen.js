import React, {Component} from 'react';
import {StyleSheet, View, Text} from 'react-native';
import {
  normalize,
  dim,
  AppBarHeight,
  StatusBarHeight,
} from '../common/Platform';
import {COLORS} from '../common/Colors';
import Icons from '../common/Icons';
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

export class HomeScreen extends Component {
  render() {
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
        </Header>
        <View style={{flex: 1, justifyContent: 'center', alignItems: 'center'}}>
          <Text>Home Screen</Text>
          <Text>Click to Sidebar Scroll</Text>
        </View>
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
