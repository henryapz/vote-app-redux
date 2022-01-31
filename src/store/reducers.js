import {
  ADD_VOTE,
  CHANGE_VIEW_DATA,
  LOAD_CANDIDATES,
  UPDATE_FILTER_CANDIDATE
} from "./types";

const initialState = {
  candidates: [],
  viewValue: "porcentage",
  totalVotes: 0
};

function reducer(state = initialState, action) {
  switch (action.type) {
    case ADD_VOTE:
      const newList = state.candidates.map((elem) =>
        elem.id === action.payload ? { ...elem, votes: elem.votes + 1 } : elem
      );
      return {
        ...state,
        totalVotes: state.totalVotes + 1,
        candidates: newList
      };
    case LOAD_CANDIDATES:
      return {
        ...state,
        candidates: action.payload
      };
    case CHANGE_VIEW_DATA:
      return {
        ...state,
        viewValue: action.payload
      };
    case UPDATE_FILTER_CANDIDATE:
      if (action.payload.id === "todos") {
        return {
          ...state,
          candidates: state.candidates.map((candidate) => ({
            ...candidate,
            display: !action.payload.allSelected
          }))
        };
      }
      return {
        ...state,
        candidates: state.candidates.map((elem) =>
          elem.id === action.payload.id
            ? { ...elem, display: !elem.display }
            : elem
        )
      };
    default:
      return {
        ...state
      };
  }
}

export default reducer;
