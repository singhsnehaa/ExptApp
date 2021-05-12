import 'react-native-gesture-handler';
import React from 'react';
import {Root} from 'native-base';
import {MainDrawerNavigation} from './src/navigation/MainDrawerNavigation';

const App = () => {
  return (
    <Root>
      <MainDrawerNavigation />
    </Root>
  );
};

export default App;
