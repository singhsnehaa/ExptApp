import React, {useState} from 'react';
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
const {height, width} = Dimensions.get('window');
import {ProfileDetails} from '../components/ProfileDetails';

export function TooltipExmpl() {
  closeToolTipHandler = () => {
    setTooltip({
      ...tooltip,
      toolTipOne: false,
      toolTipTwo: false,
      toolTipThree: false,
      toolTipFour: false,
    });
  };

  const [tooltip, setTooltip] = useState({
    toolTipOne: true,
    toolTipTwo: false,
    toolTipThree: false,
    toolTipFour: false,
  });

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
                    onPress={() => closeToolTipHandler()}
                    style={{alignItems: 'flex-end'}}>
                    <Text>X</Text>
                  </TouchableOpacity>
                  <Text>This is first Block !</Text>
                  <Text>Describe Profile image</Text>
                  <MyButton
                    title="next"
                    handler={() =>
                      setTooltip({
                        ...tooltip,
                        toolTipOne: false,
                        toolTipTwo: true,
                      })
                    }
                    bgColor="red"
                    titleStyle={{fontSize: 12}}
                    buttonContainer={{backgroundColor: 'red', marginTop: 15}}
                    smallButton
                  />
                </View>
              }
              onClose={() =>
                setTooltip({...tooltip, toolTipOne: false, toolTipTwo: true})
              }>
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
                    onPress={() => closeToolTipHandler()}
                    style={{alignItems: 'flex-end'}}>
                    <Text>X</Text>
                  </TouchableOpacity>
                  <Text>This is 2nd Box</Text>
                  <Text>Describe Profile details</Text>
                  <View style={{flexDirection: 'row'}}>
                    <MyButton
                      title="Back"
                      handler={() =>
                        setTooltip({
                          ...tooltip,
                          toolTipOne: true,
                          toolTipTwo: false,
                        })
                      }
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
                      handler={() =>
                        setTooltip({
                          ...tooltip,
                          toolTipTwo: false,
                          toolTipThree: true,
                        })
                      }
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
              onClose={() =>
                setTooltip({...tooltip, toolTipTwo: false, toolTipThree: true})
              }>
              <Text style={{fontSize: 20}}>Arusn</Text>
              <Text style={{fontSize: 16}}>09123456789</Text>
              <Text style={{fontSize: 16}}>Software Developer</Text>
              <Text style={{fontSize: 16}}>Ranchi</Text>
            </Tooltip>
          </View>
        </View>

        <ProfileDetails tooltip={tooltip} setTooltip={setTooltip} />
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
