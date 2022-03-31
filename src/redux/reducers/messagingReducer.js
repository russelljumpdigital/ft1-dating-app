import { messagingInitialState } from "../messagingInitialState";
import { types } from "../types";
import { getMessageIndexById } from "../../utils/matching";
import { storeData, getData } from "../../storage";

const messagingInitialStateFromDisk = getData("messagingInitialStateFromDisk");

export function messagingReducer(
	state = messagingInitialStateFromDisk || messagingInitialState,
	action
) {
	switch (action.type) {
		case types.ADD_MESSAGE: {
			const messages = [...state.messages];
			messages.push(action.payload);
			const result = { ...state, messages };
			storeData("messagingInitialStateFromDisk", result);
			return result;
		}

		case types.DELETE_MESSAGE: {
			const messages = [...state.messages];
			const index = getMessageIndexById(action.payload, messages);
			messages.splice(index, 1);
			const result = { ...state, messages };
			storeData("messagingInitialStateFromDisk", result);
			return result;
		}

		default:
			return state;
	}
}
