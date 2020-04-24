import 'react-native-gesture-handler';

import React, { Component } from "react";
import { createStore } from "redux";
import { Provider } from "react-redux";
import { View } from "react-native";
import { purple } from "./src/utils/colors";
import { setLocalNotification } from "./src/utils/helpers";

import reducer from "./src/reducers";
import MobileFlashcardsStatusBar from "./src/shared/MobileFlashcardsStatusBar";
import { AppNavigatorContainer } from "./src/shared/Navigator";

class App extends Component {
  componentDidMount() {
    setLocalNotification();
  }

  render() {
    return (
      <Provider store={createStore(reducer)}>
        <View style={{ flex: 1 }}>
          <MobileFlashcardsStatusBar
            backgroundColor={purple}
            barStyle="light-content"
          />
          <AppNavigatorContainer />
        </View>
      </Provider>
    );
  }
}

export default App;
