import { getCandidates } from "../lib/services";
import { ADD_VOTE, CHANGE_VIEW_DATA, LOAD_CANDIDATES, UPDATE_FILTER_CANDIDATE } from "./types";

export const addVotes = (id_candidate) => ({
  type: ADD_VOTE,
  payload: id_candidate
});

export const loadCandidates = (data) => ({
  type: LOAD_CANDIDATES,
  payload: data
});

export const setViewData = (param) => ({
  type: CHANGE_VIEW_DATA,
  payload: param
});

export const changeCandidateDisplay = (id, allSelected) => ({
  type: UPDATE_FILTER_CANDIDATE,
  payload: {id, allSelected}
});

export const fetchCandidates = () => async (dispatch) => {
  try {
    const todos = await getCandidates();
    dispatch(loadCandidates(todos));
  } catch (err) {}
};
