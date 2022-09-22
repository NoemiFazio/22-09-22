import { createStore } from "redux";

const initialState = {
  value: 0,
  isModalVisibile: false,
  isListVisible: false,
  modalData: {},
};

const modalReducer = (state = {}, action) => {
  switch (action.type) {
    case "SET_MODAL_VISIBLE":
      return { ...state, isModalVisibile: true };
    case "SET_MODAL_INVISIBLE":
      return { ...state, isModalVisibile: false };
    case "SET_LIST_VISIBLE":
      return { ...state, isListVisible: true };
    case "SET_LIST_INVISIBLE":
      return { ...state, isListVisible: false };
    case "SET_MODAL_DATA":
      return { ...state, modalData: action.payload };
    default:
      return state;
  }
};

const store = createStore(modalReducer, initialState);

export default store;
