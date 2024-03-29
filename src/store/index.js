import { createStore, combineReducers, applyMiddleware } from "redux";
import thunk from "redux-thunk";
import { composeWithDevTools } from "redux-devtools-extension";
// import reduxThunk from "redux-thunk";
// import reducer from "./reducers";
import user from "./reducers/user";
import app from "./reducers/app";
import settings from "./reducers/settings";
import tagsView from "./reducers/tagsView";
import monitor from "./reducers/monitor";
import {
  newPostReducer,
  newReviewReducer,
  postDetailsReducer,
  postReducer,
  postReviewsReducer,
  postsReducer,
  reviewReducer,
} from "../reducers/postReducer";

import {
  allUsersReducer,
  forgotPasswordReducer,
  profileReducer,
  userDetailsReducer,
  userReducer,
} from "../reducers/userReducer";

const reducer = combineReducers({
  posts: postsReducer,
  postDetails: postDetailsReducer,
  user: userReducer,
  profile: profileReducer,
  forgotPassword: forgotPasswordReducer,
  newReview: newReviewReducer,
  newPost: newPostReducer,
  post: postReducer,
  allUsers: allUsersReducer,
  userDetails: userDetailsReducer,
  postReviews: postReviewsReducer,
  review: reviewReducer,
  user,
  app,
  settings,
  tagsView,
  monitor,
});

const middleware = [thunk];

const store = createStore(
  reducer,
  composeWithDevTools(applyMiddleware(...middleware))
);

export default store;
