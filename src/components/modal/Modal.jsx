import React, {Component} from 'react';
import { connect } from "react-redux";
import { setModal } from '../../actions/index'

import './Modal.scss'

const mapDispatchToProps = (dispatch) => {
	return {
		setModal: modal => dispatch(setModal(modal))
	};
}

const mapStateToProps = state => {
    return { modal: state.modal };
};

class ConnectedModal extends Component {
    turnOffModal = (e) => {
        if (e.target.className === 'modal-backdrop') {
            this.props.setModal({on: false})
        }
    }

    render() {
        const {modal} = this.props;
        return (
            <>
                {modal.on && (
                    <div className="modal-backdrop" onClick={this.turnOffModal}>
                        <div className="modal-container">
                            {modal.bonus && <span className="bonus">Bonus: {modal.bonus}</span>}
                            <span className="numbers">Winning Numbers: {modal.winningNumbers.join()}</span>
                        </div>
                    </div>
                )}
            </>
        )
    }
};

const Modal = connect(
    mapStateToProps,
    mapDispatchToProps
)(ConnectedModal);

export default Modal;