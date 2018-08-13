import React, { Component } from 'react'
import { View, Text } from 'react-native'

import Services from 'services'
console.log('aaaa', Services)
import STYLES from './opsGasteiSaldoStyle'

class OpsGasteiSaldo extends Component {
  state = {
    salario: 1800,
    valorSaldoExibicao: 1350,
    valorSaldo: 1350,
  }

  pegarSaldo() {
    // if (!!this.periodo) {
    //   this.pegarSaldoPorData()
    // } else {
    //   this.pegarSaldoAtual()
    //   _$rootScope.$on('atualizarSaldo', () => { this.pegarSaldo() })
    // }
  }

  pegarSaldoAtual() {
    // _usuarioService.pegarSaldo().then(response => {
    //   this.valorSaldo = response.data
    //   this.valorSaldoExibicao = Math.abs(this.valorSaldo)
    // })
  }

  pegarSaldoPorData() {
    // _usuarioService.pegarSaldoPorData(this.periodo).then(response => {
    //   this.valorSaldo = response.data
    //   this.valorSaldoExibicao = Math.abs(this.valorSaldo)
    // })
  }

  getSalario() {
    // _$timeout(() => this.salario).then(salario => salario)
    // return this.salario
    return 1800
  }

  renderSalario() {
    if (this.state.salario) {
      return <Text style={STYLES.valorSalario}>Salário: {TextMoneyMask.toMoney(this.state.salario)}</Text>
    }
  }

  render() {
    return (
      <View style={this.state.valorSaldo < 0 ? STYLES.saldoNegativo : STYLES.saldoPositivo}>
        <Text style={STYLES.valorSaldo}>{TextMoneyMask.toMoney(this.state.valorSaldoExibicao)}</Text>
        {this.renderSalario()}
      </View>
    )
  }
}

export default OpsGasteiSaldo
