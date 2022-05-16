import {
  ALL_POST_FAIL,
  ALL_POST_REQUEST,
  ALL_POST_SUCCESS,
  ADMIN_POST_REQUEST,
  ADMIN_POST_SUCCESS,
  ADMIN_POST_FAIL,
  NEW_POST_REQUEST,
  NEW_POST_SUCCESS,
  NEW_POST_FAIL,
  NEW_POST_RESET,
  UPDATE_POST_REQUEST,
  UPDATE_POST_SUCCESS,
  UPDATE_POST_FAIL,
  UPDATE_POST_RESET,
  DELETE_POST_REQUEST,
  DELETE_POST_SUCCESS,
  DELETE_POST_FAIL,
  DELETE_POST_RESET,
  POST_DETAILS_REQUEST,
  POST_DETAILS_FAIL,
  POST_DETAILS_SUCCESS,
  NEW_REVIEW_REQUEST,
  NEW_REVIEW_SUCCESS,
  NEW_REVIEW_FAIL,
  NEW_REVIEW_RESET,
  ALL_REVIEW_REQUEST,
  ALL_REVIEW_SUCCESS,
  ALL_REVIEW_FAIL,
  DELETE_REVIEW_REQUEST,
  DELETE_REVIEW_SUCCESS,
  DELETE_REVIEW_FAIL,
  DELETE_REVIEW_RESET,
  CLEAR_ERRORS,
} from "../constants/postConstants";

export const postsReducer = (state = { posts: [] }, action) => {
  switch (action.type) {
    case ALL_POST_REQUEST:
    case ADMIN_POST_REQUEST:
      return {
        loading: true,
        posts: [],
      };
    case ALL_POST_SUCCESS:
      return {
        loading: false,
        posts: action.payload.posts,
        postsCount: action.payload.postsCount,
        resultPerPage: action.payload.resultPerPage,
        filteredPostsCount: action.payload.filteredPostsCount,
      };

    case ADMIN_POST_SUCCESS:
      return {
        loading: false,
        posts: action.payload,
      };
    case ALL_POST_FAIL:
    case ADMIN_POST_FAIL:
      return {
        loading: false,
        error: action.payload,
      };

    case CLEAR_ERRORS:
      return {
        ...state,
        error: null,
      };
    default:
      return state;
  }
};

export const newPostReducer = (state = { post: {} }, action) => {
  switch (action.type) {
    case NEW_POST_REQUEST:
      return {
        ...state,
        loading: true,
      };
    case NEW_POST_SUCCESS:
      return {
        loading: false,
        success: action.payload.success,
        post: action.payload.POS,
      };
    case NEW_POST_FAIL:
      return {
        ...state,
        loading: false,
        error: action.payload,
      };
    case NEW_POST_RESET:
      return {
        ...state,
        success: false,
      };
    case CLEAR_ERRORS:
      return {
        ...state,
        error: null,
      };
    default:
      return state;
  }
};

export const postReducer = (state = {}, action) => {
  switch (action.type) {
    case DELETE_POST_REQUEST:
    case UPDATE_POST_REQUEST:
      return {
        ...state,
        loading: true,
      };
    case DELETE_POST_SUCCESS:
      return {
        ...state,
        loading: false,
        isDeleted: action.payload,
      };

    case UPDATE_POST_SUCCESS:
      return {
        ...state,
        loading: false,
        isUpdated: action.payload,
      };
    case DELETE_POST_FAIL:
    case UPDATE_POST_FAIL:
      return {
        ...state,
        loading: false,
        error: action.payload,
      };
    case DELETE_POST_RESET:
      return {
        ...state,
        isDeleted: false,
      };
    case UPDATE_POST_RESET:
      return {
        ...state,
        isUpdated: false,
      };
    case CLEAR_ERRORS:
      return {
        ...state,
        error: null,
      };
    default:
      return state;
  }
};

export const postDetailsReducer = (state = { post: {} }, action) => {
  switch (action.type) {
    case POST_DETAILS_REQUEST:
      return {
        loading: true,
        ...state,
      };
    case POST_DETAILS_SUCCESS:
      return {
        loading: false,
        post: action.payload,
      };
    case POST_DETAILS_FAIL:
      return {
        loading: false,
        error: action.payload,
      };

    case CLEAR_ERRORS:
      return {
        ...state,
        error: null,
      };
    default:
      return state;
  }
};

export const newReviewReducer = (state = {}, action) => {
  switch (action.type) {
    case NEW_REVIEW_REQUEST:
      return {
        ...state,
        loading: true,
      };
    case NEW_REVIEW_SUCCESS:
      return {
        loading: false,
        success: action.payload,
      };
    case NEW_REVIEW_FAIL:
      return {
        ...state,
        loading: false,
        error: action.payload,
      };
    case NEW_REVIEW_RESET:
      return {
        ...state,
        success: false,
      };
    case CLEAR_ERRORS:
      return {
        ...state,
        error: null,
      };
    default:
      return state;
  }
};

export const postReviewsReducer = (state = { reviews: [] }, action) => {
  switch (action.type) {
    case ALL_REVIEW_REQUEST:
      return {
        ...state,
        loading: true,
      };
    case ALL_REVIEW_SUCCESS:
      return {
        loading: false,
        reviews: action.payload,
      };
    case ALL_REVIEW_FAIL:
      return {
        ...state,
        loading: false,
        error: action.payload,
      };

    case CLEAR_ERRORS:
      return {
        ...state,
        error: null,
      };
    default:
      return state;
  }
};

export const reviewReducer = (state = {}, action) => {
  switch (action.type) {
    case DELETE_REVIEW_REQUEST:
      return {
        ...state,
        loading: true,
      };
    case DELETE_REVIEW_SUCCESS:
      return {
        ...state,
        loading: false,
        isDeleted: action.payload,
      };
    case DELETE_REVIEW_FAIL:
      return {
        ...state,
        loading: false,
        error: action.payload,
      };
    case DELETE_REVIEW_RESET:
      return {
        ...state,
        isDeleted: false,
      };
    case CLEAR_ERRORS:
      return {
        ...state,
        error: null,
      };
    default:
      return state;
  }
};
