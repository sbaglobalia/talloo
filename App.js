import React from 'react';
import {View} from 'react-native';
import {Provider} from 'react-redux';
import {PersistGate} from 'redux-persist/integration/react';

import {store, persistor} from './src/redux/configureStore';
import MainNavigation from './src/mainNavigation/Route';

const App = () => {
  return (
    <View style={{height: '100%'}}>
      <Provider store={store}>
        <PersistGate loading={null} persistor={persistor}>
          <MainNavigation />
        </PersistGate>
      </Provider>
    </View>
  );
};
export default App;
