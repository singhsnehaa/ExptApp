import React, {useState, useEffect} from 'react';
import {
  View,
  Text,
  StyleSheet,
  FlatList,
  ActivityIndicator,
  TouchableOpacity,
} from 'react-native';
import Header from '../common/Header';
import {COLORS} from '../common/Colors';
import {normalize} from '../common/Platform';

export function Pagination() {
  const [dataSource, setDataSource] = useState([]);
  const [loading, setLoading] = useState(true);
  const [PageNo, setPageNo] = useState(1);
  console.log('PageNo ==>', PageNo);

  useEffect(() => {
    loadMoreData();
  }, []);

  loadMoreData = () => {
    if (PageNo >= 1) {
      setPageNo(prevState => prevState + 1);
      console.log('PageNo [Next]==>', PageNo);
    }

    fetch(
      `https://jsonplaceholder.typicode.com/comments?_page=${PageNo}&_limit=5`,
    )
      .then(response => response.json())
      .then(resp => {
        setDataSource([...dataSource, ...resp]);
        // setPageNo(PageNo + 1);
        setLoading(false);
      })
      .catch(error => {
        console.log('Error =>', error);
      });
  };

  loadLessData = () => {
    const copyDataSource = [...dataSource];
    const previousData = copyDataSource.splice(0, PageNo * 5 - 5);
    setDataSource(previousData);
  };

  doPrevious = () => {
    if (PageNo > 1) {
      // setPageNo(PageNo - 1);
      setPageNo(prevState => prevState - 1);
      // const copyDataSource = [...dataSource];
      // const previousData = copyDataSource.splice(0, PageNo * 5 - 5);
      // setDataSource(previousData);
      console.log('PageNo [Previous]==>', PageNo);
      loadLessData();
    }
  };

  const renderItem = ({item}) => {
    return (
      <View style={styles.itemContainer}>
        <View style={styles.leftContainer}>
          <Text style={{fontSize: 18}}>{item.id}</Text>
        </View>
        <View style={styles.rightContainer}>
          <Text style={{fontSize: 18}}>{item.name}</Text>
        </View>
      </View>
    );
  };

  return (
    <>
      <Header
        title={'Pagination'}
        MenuDrawerButton
        headerStyle={{backgroundColor: COLORS.WARNING, zIndex: 100}}
        titleStyle={{color: COLORS.WHITE}}
      />
      <View style={styles.HeadingTitle}>
        <Text style={{fontSize: 20, fontWeight: 'bold'}}>Page 1</Text>
      </View>

      <View style={styles.footer}>
        <TouchableOpacity
          onPress={() => doPrevious()}
          style={styles.loadMoreBtn}>
          <Text style={styles.btnText}>Previous</Text>
        </TouchableOpacity>

        <TouchableOpacity
          onPress={() => loadMoreData()}
          style={styles.loadMoreBtn}>
          <Text style={styles.btnText}>Next</Text>
          {loading ? (
            <ActivityIndicator color="white" style={{marginLeft: 8}} />
          ) : null}
        </TouchableOpacity>
      </View>

      <FlatList
        data={dataSource}
        renderItem={renderItem}
        // renderItem={({item, index}) => {
        //   return (
        //     <View style={styles.itemContainer}>
        //       <View style={styles.leftContainer}>
        //         <Text style={{fontSize: 18}}>{item.id}</Text>
        //       </View>
        //       <View style={styles.rightContainer}>
        //         <Text style={{fontSize: 18}}>{item.name}</Text>
        //       </View>
        //     </View>
        //   );
        // }}
        keyExtractor={item => Date.now() * Math.random()}
      />
    </>
  );
}

const styles = StyleSheet.create({
  HeadingTitle: {
    marginTop: 10,
    marginBottom: 20,
    justifyContent: 'center',
    alignItems: 'center',
  },
  itemContainer: {
    backgroundColor: '#EEE',
    borderWidth: 1,
    height: normalize(50),
    flexDirection: 'row',
    paddingHorizontal: normalize(10),
    marginHorizontal: normalize(2),
  },
  leftContainer: {
    flex: 0.1,
    justifyContent: 'center',
    alignItems: 'flex-start',
    padding: 5,
  },
  rightContainer: {
    flex: 0.9,
    justifyContent: 'center',
    alignItems: 'flex-start',
  },

  footer: {
    padding: 10,
    justifyContent: 'space-around',
    alignItems: 'center',
    flexDirection: 'row',
  },
  loadMoreBtn: {
    padding: 10,
    backgroundColor: '#000',
    borderRadius: 4,
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
  },

  btnText: {
    color: '#fff',
    fontSize: 16,
    textAlign: 'center',
  },
});
