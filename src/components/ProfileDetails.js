import React from 'react';
import {
  View,
  Text,
  StyleSheet,
  TouchableOpacity,
  Image,
  FlatList,
} from 'react-native';
import Tooltip from 'react-native-walkthrough-tooltip';
import MyButton from '../common/Button';

const DATA = [
  {
    id: 1,
    img: 'https://placeimg.com/50/50/people',
    des: 'Lorem Ipsum is simply dummy text of the printing industry ->1',
  },
  {
    id: 2,
    img: 'https://placeimg.com/50/50/people',
    des: 'Lorem Ipsum is simply dummy text of the printing industry->2',
  },
  {
    id: 3,
    img: 'https://placeimg.com/50/50/people',
    des: 'Lorem Ipsum is simply dummy text of the printing industry->3',
  },
];

export function ProfileDetails(props) {
  const {tooltip, setTooltip} = props;

  closeToolTipHandler = () => {
    setTooltip({
      ...tooltip,
      toolTipOne: false,
      toolTipTwo: false,
      toolTipThree: false,
      toolTipFour: false,
    });
  };

  return (
    <View style={styles.secBox}>
      <FlatList
        data={DATA}
        renderItem={({item, index}) => (
          <>
            {index == 0 ? (
              <Tooltip
                isVisible={tooltip.toolTipThree}
                content={
                  <View>
                    <TouchableOpacity
                      onPress={() => closeToolTipHandler()}
                      style={{alignItems: 'flex-end'}}>
                      <Text>X</Text>
                    </TouchableOpacity>
                    <Text>This is Third Block !</Text>
                    <Text>Describe Profile </Text>
                    <View style={{flexDirection: 'row'}}>
                      <MyButton
                        title="Back"
                        handler={() =>
                          setTooltip({
                            ...tooltip,
                            toolTipThree: false,
                            toolTipTwo: true,
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
                        title="Next"
                        handler={() =>
                          setTooltip({
                            ...tooltip,
                            toolTipThree: false,
                            toolTipFour: true,
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
                  setTooltip({
                    ...tooltip,
                    toolTipThree: false,
                    toolTipFour: true,
                  })
                }>
                <View style={styles.innerSecBox}>
                  <View style={styles.secLeftBox}>
                    <Tooltip
                      isVisible={tooltip.toolTipFour}
                      content={
                        <View>
                          <TouchableOpacity
                            onPress={() => closeToolTipHandler()}
                            style={{alignItems: 'flex-end'}}>
                            <Text>X</Text>
                          </TouchableOpacity>
                          <Text>This is Third Block !</Text>
                          <Text>Small Image </Text>
                          <View style={{flexDirection: 'row'}}>
                            <MyButton
                              title="Back"
                              handler={() =>
                                setTooltip({
                                  ...tooltip,
                                  toolTipThree: true,
                                  toolTipFour: false,
                                })
                              }
                              bgColor="red"
                              titleStyle={{fontSize: 12}}
                              buttonContainer={{
                                backgroundColor: 'red',
                                marginTop: 10,
                                padding: 4,
                              }}
                              smallButton
                            />

                            <MyButton
                              title="complete"
                              handler={() =>
                                setTooltip({...tooltip, toolTipFour: false})
                              }
                              bgColor="red"
                              titleStyle={{fontSize: 12}}
                              buttonContainer={{
                                backgroundColor: 'red',
                                marginTop: 10,
                                padding: 4,
                              }}
                              smallButton
                            />
                          </View>
                        </View>
                      }
                      contentStyle={{height: 110, width: 180}}
                      placement="bottom"
                      onClose={() =>
                        setTooltip({...tooltip, toolTipFour: false})
                      }>
                      <Image
                        style={styles.InnerProfileImg}
                        source={{uri: item.img}}
                      />
                    </Tooltip>
                  </View>

                  <View style={styles.secRightBox}>
                    <Text style={{fontSize: 15}}>{item.des}</Text>
                  </View>
                </View>
              </Tooltip>
            ) : (
              <View style={styles.innerSecBox}>
                <View style={styles.secLeftBox}>
                  <Image
                    style={styles.InnerProfileImg}
                    source={{uri: item.img}}
                  />
                </View>

                <View style={styles.secRightBox}>
                  <Text style={{fontSize: 15}}>{item.des}</Text>
                </View>
              </View>
            )}
          </>
        )}
        keyExtractor={item => item.id}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  secBox: {
    margin: 10,
  },

  innerSecBox: {
    //flex: 1,
    flexDirection: 'row',
    backgroundColor: '#fff',
    marginBottom: 10,
    borderRadius: 5,
    height: 90,
  },

  secLeftBox: {
    flex: 0.3,
    height: 80,
    justifyContent: 'center',
    alignItems: 'center',
  },
  InnerProfileImg: {
    width: 75,
    borderRadius: 50,
    flex: 1,
    marginTop: 5,
  },
  secRightBox: {
    flex: 0.7,
    margin: 18,
    height: 80,
  },
});
