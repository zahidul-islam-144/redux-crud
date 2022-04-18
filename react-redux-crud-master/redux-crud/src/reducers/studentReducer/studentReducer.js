import {
  STUDENT_ADD_FAILURE,
  STUDENT_ADD_REQUEST,
  STUDENT_ADD_SUCCESS,
} from "../../constants/actionTypes";

const INITIAL_STATE = {
  student: [],
  loading: true,
};

const studentReducer = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case STUDENT_ADD_REQUEST:
      return {
        ...state,
        loading: true,
      };
    case STUDENT_ADD_SUCCESS:
      return {
        loading: false,
        student: state,
        success: action.payload.success,
      };
    case STUDENT_ADD_FAILURE:
      return {
        ...state,
        loading: false,
        student: [],
        error: action.payload,
      };
    default:
      break;
  }
};

export default studentReducer;
