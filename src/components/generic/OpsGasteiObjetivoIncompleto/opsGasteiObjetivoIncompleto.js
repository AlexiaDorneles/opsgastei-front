import React, { Component } from 'react'
import PropTypes from 'prop-types'
import { Picker } from 'react-native'

import { OpsGasteiObjetivo } from 'components/generic'
import STYLES from './opsGasteiObjetivoIncompletoStyle'

class OpsGasteiObjetivoIncompleto extends Component {
	static propTypes = {
		objetivo: PropTypes.object,
		callbackAcao: PropTypes.any,
	}

	state = {
		acao: () => {},
	}

	constructor() {
		super()

		//bindings
		this.prepararExclusao = this.prepararExclusao.bind(this)
		this.prepararCompletar = this.prepararCompletar.bind(this)
		this.excluir = this.excluir.bind(this)
		this.completar = this.completar.bind(this)
	}

	prepararExclusao() {
		// _swalService.confirm('Desejas excluir o objetivo?', this.excluir, this.objetivo)
	}

	excluir() {
		// _objetivoService.deletar(objetivo.id).then(() => {
		// this.callbackAcao()
		// })
	}

	prepararCompletar() {
		// _swalService.confirm('Desejas completar o objetivo?', this.completar, this.objetivo)
	}

	completar() {
		// objetivo.status = STATUS.COMPLETO
		// _objetivoService.atualizar(objetivo).then(() => {
		//   _$rootScope.$emit('atualizarSaldo');
		//   this.callbackAcao()
		// })
	}

	render() {
		return (
			<OpsGasteiObjetivo objetivo={this.props.objetivo}>
				<Picker
					selectedValue={this.state.acao}
					style={STYLES.dropdown}
					onValueChange={() => this.state.acao()}
					mode="dropdown"
				>
					<Picker.Item label="Excluir" value={this.prepararExclusao} />
					<Picker.Item label="Completar" value={this.prepararCompletar} />
				</Picker>
			</OpsGasteiObjetivo>
		)
	}
}

export default OpsGasteiObjetivoIncompleto
