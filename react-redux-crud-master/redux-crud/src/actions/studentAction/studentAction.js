import * as types from "../../constants/actionTypes";

export const addStudentRequest = () => ({
  type: types.STUDENT_ADD_REQUEST,
});

export const addStudentSuccess = (data) => ({
  type: types.STUDENT_ADD_SUCCESS,
  payload: {
    studentData: data,
    success: "Student added successfully !",
  },
});

export const addStudentFailure = (error) => ({
  type: types.STUDENT_ADD_FAILURE,
  payload: {
    error: error,
  },
});
