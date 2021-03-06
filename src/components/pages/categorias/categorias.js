import React, { Component } from 'react'
import { Text } from 'react-native'

import { OpsGasteiCategoria, SecuredContainer } from 'components/generic'
import AdicionarCategoria from './adicionarCategoria'
import STYLES from './categoriasStyle'

class Categorias extends Component {
	state = { objetivo: {} }

	constructor() {
		super()

		//bindings
		this.buscarCategorias = this.buscarCategorias.bind(this)

		this.buscarCategorias()
	}

	buscarCategorias() {
		// _categoriaService.buscarPorUsuario().then(response => {
		//   this.categorias = response.data
		// })
		this.categorias = [
			{ nome: 'Comida', cor: 'blue' },
			{ nome: 'Vestuário', cor: 'red' },
			{ nome: 'Alimentação', cor: 'green' },
			{ nome: 'Transporte', cor: 'black' },
		]
	}

	renderCategorias() {
		return this.categorias.map(categoria => <OpsGasteiCategoria key={categoria.nome} categoria={categoria} />)
	}

	render() {
		return (
			<SecuredContainer style={STYLES.pageContainer}>
				<Text style={STYLES.pageTitle}> CATEGORIAS </Text>
				{this.renderCategorias()}

				<AdicionarCategoria callbackAdicionar={this.adicionar} />
			</SecuredContainer>
		)
	}
}

export { Categorias }
