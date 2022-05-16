import { createStore, combineReducers, applyMiddleware } from "redux";
import thunk from "redux-thunk";
import { composeWithDevTools } from "redux-devtools-extension";
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
});

const middleware = [thunk];

const store = createStore(
  reducer,
  composeWithDevTools(applyMiddleware(...middleware))
);

export default store;
