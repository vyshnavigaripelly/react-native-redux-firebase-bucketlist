import {combineReducers} from 'redux';
import bucketlists from './bucketlistReducer';
import visibilityFilter from './visibilityFilterReducer';
import formData from './formReducer';
import userData from './userDataReducer';
import condition from './conditionReducer';

const rootReducer = combineReducers({
  bucketlists,
  visibilityFilter,
  formData,
  userData,
  condition,
});

export default rootReducer;
