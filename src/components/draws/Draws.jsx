import React, {Component} from 'react';
import axios from 'axios';
import { connect } from "react-redux";
import { setModal } from '../../actions/index'
import Card from './Card'

import './Draws.scss';

const mapDispatchToProps = (dispatch) => {
	return {
		setModal: modal => dispatch(setModal(modal))
	};
}

const mapStateToProps = state => {
    return { drawsFilter: state.drawsFilter };
};

class ConnectedDraws extends Component {
	constructor(props) {
		super(props);
		this.state = {
			draws: null
		};
	}

	componentDidMount() {
		this.retrieveDraws();
	}

	componentWillUnmount() {
	}

	retrieveDraws = async () => {
		try {
			const startDate = this.getDateInIsoString(-1)
			const date = this.getDateInIsoString(0);
			const {data} = await axios.get(`https://www.masslottery.com/rest/keno/getDrawsByDateRange?startDate=${startDate}&endDate=${date}`);
			const {draws} = data;
			this.setState({
				draws: draws
			})
		} catch (e) {
			console.log(e)
		}
	}

	getDateInIsoString = (pastNum) => {
		const date = new Date();
		return `${date.getFullYear()}-${date.getMonth() + 1}-${date.getDate() + pastNum}`
	}

	openModal = (draw) => {
		const {bonus, winningNumbers} = draw;
		this.props.setModal({on: true, bonus: bonus, winningNumbers: winningNumbers});
	}
	
	render() {
		const {draws} = this.state;
		const {drawNumber} = this.props.drawsFilter;
		return (
			<div className="draws-container">
				{draws && draws.length && draws.map((draw, i) => {
					if (drawNumber) {
						if (drawNumber === draw.drawNumber) {
							return <Card draw={draw} index={i} openModal={this.openModal} />
						} else {
							return false;
						}
					} else {
						return <Card draw={draw} index={i} openModal={this.openModal} />
					}
				})}
			</div>
		)
	}
}

const Draws = connect (
	mapStateToProps,
	mapDispatchToProps
)(ConnectedDraws)

export default Draws;