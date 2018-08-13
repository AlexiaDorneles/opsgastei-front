import React, { Component } from 'react'
import { View, ScrollView } from 'react-native'
import Categorias from 'components/pages/categorias'
import Objetivos from 'components/pages/objetivos'
import GastosFixos from 'components/pages/gastosFixos'
import Estatistica from 'components/pages/estatistica'
import Inicial from 'components/pages/inicial'
import Login from 'components/pages/login'
import { OpsGasteiNavbar, OpsGasteiMenubar } from 'components/generic'

export default class App extends Component {
  render() {
    return (
      <View style={{ flex: 1 }}>
        <OpsGasteiNavbar title="julho" />
        <ScrollView contentContainerStyle={{ flex: 1 }}>
          <Objetivos />
          {/* <Login /> */}
          {/* <Inicial /> */}
          {/* <GastosFixos /> */}
          {/* <Estatistica /> */}
          {/* <Categorias /> */}
          {/* <AdicionarObjetivo /> */}
          {/* <Perfil usuario={usuario} salarioAtual={salarioAtual} /> */}
        </ScrollView>
        <OpsGasteiMenubar />
      </View>
    )
  }
}
