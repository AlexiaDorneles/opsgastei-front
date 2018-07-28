import React, { Component } from 'react'
import { Text, View, TouchableOpacity } from 'react-native'
import STYLES from './ogButtonStyle'

class OpsGasteiButton extends Component {
  render() {
    STYLES.botao.width = this.props.width
    return (
      <View style={STYLES.buttonContainer}>
        <TouchableOpacity
          style={STYLES.botao}
          onPress={this.props.onClick}
        >
          <Text style={STYLES.texto}>{this.props.label.toUpperCase()}</Text>
        </TouchableOpacity>
      </View>
    )
  }
}

export default OpsGasteiButton