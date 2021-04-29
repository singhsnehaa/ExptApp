import React, {useState, useEffect, useReducer} from 'react';
import {
  View,
  Text,
  StyleSheet,
  Image,
  TouchableOpacity,
  Dimensions,
} from 'react-native';
import Tooltip from 'react-native-walkthrough-tooltip';
import Header from '../common/Header';
import MyButton from '../common/Button';
import {ProfileDetails} from '../components/ProfileDetails';

const {height, width} = Dimensions.get('window');
export const ProfileContext = React.createContext();

export function TooltipExmpl() {
  const initialState = {
    toolTipOne: false,
    toolTipTwo: false,
    toolTipThree: false,
    toolTipFour: false,
  };

  const reducer = (state, action) => {
    switch (action.type) {
      case 'toolTipOne':
        return {...initialState, toolTipOne: true};
      case 'toolTipTwo':
        return {...initialState, toolTipTwo: true};
      case 'toolTipThree':
        return {...initialState, toolTipThree: true};
      case 'toolTipFour':
        return {...initialState, toolTipFour: true};
      case 'reset':
        return {...initialState};
      default:
        throw new Error('Unexpected action');
    }
  };

  useEffect(() => {
    dispatch({type: 'toolTipOne'});
  }, []);
  const [tooltip, dispatch] = useReducer(reducer, initialState);

  return (
    <>
      <Header
        title={'Tooltip Example'}
        //MenuDrawerButton
        headerStyle={{backgroundColor: '#009688', zIndex: 100}}
        titleStyle={{color: '#fff'}}
      />
      <View style={styles.cardBox}>
        <View style={{flex: 1, justifyContent: 'center', alignItems: 'center'}}>
          <Text style={styles.pd}>Profive Details</Text>
        </View>
        <View style={styles.upperBox}>
          <View style={styles.upperLeftBox}>
            <Tooltip
              isVisible={tooltip.toolTipOne}
              // arrowSize={{width: 16, height: 8}}
              //backgroundColor="rgba(0,0,0,0.5)"
              // tooltipStyle={{backgroundColor: '#009688'}}
              contentStyle={{height: 110, width: 170}}
              placement="right"
              content={
                <View>
                  <TouchableOpacity
                    onPress={() => dispatch({type: 'reset'})}
                    style={{alignItems: 'flex-end'}}>
                    <Text>X</Text>
                  </TouchableOpacity>
                  <Text>This is first Block !</Text>
                  <Text>Describe Profile image</Text>
                  <MyButton
                    title="next"
                    handler={() => dispatch({type: 'toolTipTwo'})}
                    bgColor="red"
                    titleStyle={{fontSize: 12}}
                    buttonContainer={{backgroundColor: 'red', marginTop: 15}}
                    smallButton
                  />
                </View>
              }
              onClose={() => dispatch({type: 'toolTipTwo'})}>
              <Image
                style={styles.profileImg}
                source={{uri: 'https://placeimg.com/150/160/people'}}
              />
            </Tooltip>
          </View>

          <View style={styles.upperRightBox}>
            <Tooltip
              isVisible={tooltip.toolTipTwo}
              content={
                <View>
                  <TouchableOpacity
                    onPress={() => dispatch({type: 'reset'})}
                    style={{alignItems: 'flex-end'}}>
                    <Text>X</Text>
                  </TouchableOpacity>
                  <Text>This is 2nd Box</Text>
                  <Text>Describe Profile details</Text>
                  <View style={{flexDirection: 'row'}}>
                    <MyButton
                      title="Back"
                      handler={() => dispatch({type: 'toolTipOne'})}
                      bgColor="red"
                      titleStyle={{fontSize: 12}}
                      buttonContainer={{
                        backgroundColor: 'red',
                        marginTop: 10,
                        padding: 10,
                      }}
                      smallButton
                    />
                    <MyButton
                      title="next"
                      handler={() => dispatch({type: 'toolTipThree'})}
                      bgColor="red"
                      titleStyle={{fontSize: 12}}
                      buttonContainer={{
                        backgroundColor: 'red',
                        marginTop: 10,
                        padding: 10,
                      }}
                      smallButton
                    />
                  </View>
                </View>
              }
              contentStyle={{height: 110, width: 180}}
              placement="bottom"
              onClose={() => dispatch({type: 'toolTipThree'})}>
              <Text style={{fontSize: 20}}>Arusn</Text>
              <Text style={{fontSize: 16}}>09123456789</Text>
              <Text style={{fontSize: 16}}>Software Developer</Text>
              <Text style={{fontSize: 16}}>Ranchi</Text>
            </Tooltip>
          </View>
        </View>

        <ProfileContext.Provider value={{tooltip: tooltip, dispatch: dispatch}}>
          <ProfileDetails />
        </ProfileContext.Provider>
      </View>

      <MyButton
        title="continue"
        handler={() => console.log('Clicked')}
        bgColor="#009688"
        bigButton
      />
    </>
  );
}

const styles = StyleSheet.create({
  cardBox: {
    backgroundColor: 'lightgray',
    //height: 400,
    height: height - 300,
  },

  pd: {
    fontSize: 18,
    margin: 10,
    fontWeight: 'bold',
    color: '#009688',
  },

  upperBox: {
    marginTop: 15,
    flexDirection: 'row',
    marginBottom: 20,
  },
  upperRightBox: {
    flex: 0.5,
    justifyContent: 'space-evenly',
    marginLeft: 10,
    height: 150,
  },

  upperLeftBox: {
    flex: 0.5,
    height: 150,
    justifyContent: 'center',
    alignItems: 'center',
  },

  profileImg: {
    width: 150,
    borderRadius: 5,
    flex: 1,
  },
});
