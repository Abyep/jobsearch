import { put, call, takeLatest, take } from "redux-saga/effects";
import api from "../Api/index.js";

export const GET_JOBS = "GET_JOBS";
export const SAVE_JOBS = "SAVE_JOBS";

export const startJob = (payload) => ({
  type: "GET_JOBS",
  payload,
});

export default function* rootSaga() {
    yield takeLatest("GET_JOBS", handleGetJobs);
  }
  
  function* handleGetJobs(action) {
    try {
      const jobs = yield call(api.getJobs, action.payload);
      yield put({
        type: "SAVE_JOBS",
        jobs,
      });
    } catch (error) {
      yield put({
        type: "SAVE_JOBS",
        error,
      });
    }
  }