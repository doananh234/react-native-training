import React, { Component } from "react";
import {
  Text,
  View,
} from "react-native";

class Answer extends Component {
  onPress = () => {
    this.props.onPress(this.props.data);
  }
  render() {
    let { text } = this.props.data
    return (
      <View
        style={[
          { alignItems: "center", },
          this.props.isSelected && { backgroundColor: '#ddd111' }
        ]}>
        <Text onPress={this.onPress}>
          {text}
        </Text>
      </View>
    )
  }
}
export default Answer;