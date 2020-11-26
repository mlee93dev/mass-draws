import React, {Component} from 'react';
import { connect } from "react-redux";
import { setDrawsFilter } from '../../actions/index'

import './Header.scss'

const mapDispatchToProps = (dispatch) => {
	return {
		setDrawsFilter: draw => dispatch(setDrawsFilter(draw))
	};
}

class ConnectedHeader extends Component {
    filterDraws = (e) => {
        e.preventDefault();
        this.props.setDrawsFilter({drawNumber: parseInt(document.forms[0].search.value)})
    }

    render() {
        return (
            <header>
                <form>
                    <input type="number" name="search" placeholder="Draw Number"/>
                    <input className="ticket" type="submit" onClick={this.filterDraws} value="Search"/>
                </form>
            </header>
        )
    }
}

const Header = connect (
	null,
	mapDispatchToProps
)(ConnectedHeader)

export default Header;