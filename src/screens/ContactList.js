import React, {Component} from 'react';
import {
  Text,
  StyleSheet,
  Platform,
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
import Contacts, {getContactById} from 'react-native-contacts';

export class ContactList extends Component {
  state = {
    contactList: [],
    count: 0,
  };

  getContactList = async () => {
    console.log('enter In Function');
    try {
      if (Platform.OS === 'ios') {
        console.log('enter IN IOS');
        this.loadContacts();
        console.log('Display contacts');
      } else {
        // For Android
        const andoidContactPermission = await PermissionsAndroid.request(
          PermissionsAndroid.PERMISSIONS.READ_CONTACTS,
          PermissionsAndroid.PERMISSIONS.WRITE_CONTACTS,
          {
            title: 'Contacts Permission',
            message: 'This app would like to view your contacts.',
            buttonNeutral: 'Ask Me Later',
            buttonNegative: 'Cancel',
            buttonPositive: 'OK',
          },
        );
        if (andoidContactPermission === PermissionsAndroid.RESULTS.GRANTED) {
          console.log('Contacts Permission granted');
          // Contacts.getAll().then(contacts => {
          //   if (contacts) {
          //     this.setState({contactList: contacts});
          //   } else {
          //     this.setState({contactList: []});
          //   }
          // });
          this.loadContacts();
        } else {
          console.log('Contacts permission denied');
        }
      } // End Android
    } catch (err) {
      console.log('Catch Block=>', err);
    }
  };

  loadContacts() {
    console.log('Enter contacts list function');
    Contacts.getAll().then(contacts => {
      if (contacts) {
        console.log('contacts==>', contacts);
        this.setState({contactList: contacts});
      } else {
        this.setState({contactList: []});
        console.log('contacts==>', contacts);
      }
    });

    Contacts.getCount().then(count => {
      this.setState({count: count});
      console.log('count=>', count);
    });
    console.log('Exit from function');
  }

  render() {
    const {contactList, count} = this.state;
    const {goBack, navigate} = this.props.navigation;
    const [phoneNumbers] = contactList;
    //console.log('Phonenumbers==>',phoneNumbers?.phoneNumbers);
    //console.log('contactList==>', contactList);
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
              Contact List
            </Text>
          </Body>
          <Right></Right>
        </Header>

        <Content padder contentContainerStyle={{justifyContent: 'center'}}>
          <Button block warning onPress={() => this.getContactList()}>
            <Text>Get Contacts</Text>
          </Button>

          <List>
            {contactList &&
              contactList.map(item => (
                <ListItem key={item.rawContactId}>
                  <Left>
                    <Icon type="Entypo" name="user" />
                  </Left>
                  <Body style={{marginRight: 2}}>
                    <Text>{item.displayName}</Text>
                    <Text>{item.phoneNumbers[0].number} </Text>
                  </Body>
                  <Right>
                    <Icon name="arrow-forward" />
                  </Right>
                </ListItem>
              ))}
            <Text>Total no of Contact List is {count}</Text>
          </List>
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
