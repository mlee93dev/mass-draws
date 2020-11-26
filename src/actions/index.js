import { SET_MODAL, SET_DRAWS_FILTER } from "../constants/action-types";

export function setModal(payload) {
  return { type: SET_MODAL, payload };
}

export function setDrawsFilter(payload) {
  return { type: SET_DRAWS_FILTER, payload}
}