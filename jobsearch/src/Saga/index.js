import { put, call, takeLatest, take } from "redux-saga/effects";
import api from "../Api/index.js";

export const GET_JOBS = "GET_JOBS";
export const SAVE_JOBS = "SAVE_JOBS";
export const GET_JOB_DETAIL = "GET_JOB_DETAIL";
export const SAVE_JOB_DETAIL = "SAVE_JOB_DETAIL";

export const startJob = (payload) => ({
  type: "GET_JOBS",
  payload,
});

export const getJobDetail = (payload) => ({
  type: "GET_JOB_DETAIL",
  payload,
});

export default function* rootSaga() {
  yield takeLatest("GET_JOBS", handleGetJobs);
  yield takeLatest("GET_JOB_DETAIL", handleGetJobDetail);
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

function* handleGetJobDetail(action) {
  try {
    const jobDetail = yield call(api.getJobDetail, action.payload);
    yield put({
      type: "SAVE_JOB_DETAIL",
      jobDetail,
    });
  } catch (error) {
    yield put({
      type: "SAVE_JOB_DETAIL",
      error,
    });
  }
}
