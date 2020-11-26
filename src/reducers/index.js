import { SET_MODAL, SET_DRAWS_FILTER } from "../constants/action-types";

const initialState = {
	modal: {
		on: false,
		bonus: null,
		winningNumbers: []
	},
	drawsFilter: {
		drawNumber: null
	}
};

function rootReducer(state = initialState, action) {
	if (action.type === SET_MODAL) {
		return {
			...state,
			modal: action.payload
		}
	}
	if (action.type === SET_DRAWS_FILTER) {
		return {
			...state,
			drawsFilter: action.payload
		}
	}
	return state;
}

export default rootReducer;