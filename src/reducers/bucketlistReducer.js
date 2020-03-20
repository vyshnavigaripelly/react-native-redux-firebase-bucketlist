import * as types from '../actions/actionTypes';

const bucketlistReducer = (state = [], action) => {
  switch(action.type) {

    case types.ADD_BUCKETLIST:
      return [
        action.payload,
        ...state
      ];

    case types.UPDATE_BUCKETLIST:
      return state.map(bucketlist => {
        if(bucketlist.id !== action.id) {
          return bucketlist;
        }

        return Object.assign({}, bucketlist, action.payload);
      });

    case types.EDIT_BUCKETLIST:
      return state.map(bucketlist => {
        if(bucketlist.id !== action.id) {
          return bucketlist;
        }

        return Object.assign({}, bucketlist, { text: action.text });
      });

    case types.TOGGLE_STAR_BUCKETLIST:
      return state.map(bucketlist => {
        if(bucketlist.id !== action.id) {
          return bucketlist;
        }

        return Object.assign({}, bucketlist, { isStarred: !bucketlist.isStarred });
      });

    case types.TOGGLE_EDIT_BUCKETLIST:
      return state.map(bucketlist => {
        if(bucketlist.id !== action.id) {
          return bucketlist;
        }

        return Object.assign({}, bucketlist, { isEditing: !bucketlist.isEditing });
      });

    case types.REMOVE_BUCKETLIST:
      return state.filter(bucketlist => {
        return bucketlist.id !== action.id;
      });

    case types.DELETE_ALL_BUCKETLIST:
      return state.filter(bucketlist => {
        return false;
      });

    case types.FILTER_BUCKETLIST:
      return state.filter(bucketlist => {
        return bucketlist.visibilityFilter === action.filter;
      });

    default:
      return state;
  }

}

export default bucketlistReducer;
