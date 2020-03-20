import * as types from './actionTypes';
import { Alert } from 'react-native';
import firebase, {firebaseRef} from '../firebase';


export function fetchBucketlists(uid) {
  return (dispatch, getState) => {
    const bucketlistsRef = firebaseRef.child(`bucketlists/${uid}`);

    return bucketlistsRef.once('value').then(snapshot => {
      const bucketlists = snapshot.val() || {};

      Object.keys(todos).map(bucketlistId => {
        const parsedTodos = {
          id: buckelistId,
          ...bucketlists[bucketlist]
        };

        dispatch(addBucketlist(parsedbucketlists));
      });
    });
  };
}

export function startAddBucketlist(text) {
  return (dispatch, getState) => {
    const UID = firebase.auth().currentUser.uid;
    const bucketlist = {
      text,
      isDone: false,
      isStarred: false
    };
    const bucketlistRef = firebaseRef.child(`bucketlists/${UID}`).push(bucketlist);

    dispatch(addBucketlist({
      id: bucketlistRef.key,
      ...bucketlist
    }));

    bucketlistRef.then(snapshot => {
      return;
    }, error => {
      Alert.alert(JSON.stringify(error.message));
    });
  };
}

export function startUpdateBucketlist(id, key, value) {
  return (dispatch, getState) => {
    const UID = firebase.auth().currentUser.uid;
    const todoRef = firebaseRef.child(`bucketlists/${UID}/${id}`);
    let updates = {};
    updates[key] = value;

    dispatch(updateBucketlist(id, updates));

    bucketlistRef.update(updates).then(snapshot => {
      return;
    }, error => {
      Alert.alert(JSON.stringify(error.message));
    });
  };
}

export function startRemoveBucketlist(id) {
  return (dispatch, getState) => {
    const UID = firebase.auth().currentUser.uid;
    const todoRef = firebaseRef.child(`bucketlists/${UID}/${id}`);

    dispatch(removeTodo(id));

    todoRef.remove().then(snapshot => {
      return;
    }, error => {
      Alert.alert(JSON.stringify(error.message));
    });
  };
}

export function startSignup(email, password) {
  return (dispatch, getState) => {
    return firebase.auth().createUserWithEmailAndPassword(email, password);
  };
}

export function startLogin(email, password) {
  return (dispatch, getState) => {
    return firebase.auth().signInWithEmailAndPassword(email, password);
  };
}

export function startLogout() {
  return (dispatch, getState) => {
    return firebase.auth().signOut();
  };
}

export function changeEmailLogin(emailLogin) {
  return {
    type: types.CHANGE_EMAIL_LOGIN,
    emailLogin
  }
}

export function changeEmailSignup(emailSignup) {
  return {
    type: types.CHANGE_EMAIL_SIGNUP,
    emailSignup
  }
}

export function changePasswordLogin(passwordLogin) {
  return {
    type: types.CHANGE_PASSWORD_LOGIN,
    passwordLogin
  }
}

export function changePasswordSignup(passwordSignup) {
  return {
    type: types.CHANGE_PASSWORD_SIGNUP,
    passwordSignup
  }
}

export function changeUserData(payload) {
  return {
    type: types.CHANGE_USER_DATA,
    payload
  }
}

export function changeCondition(payload) {
  return {
    type: types.CHANGE_CONDITION,
    payload
  }
}

export function addBucketlist(payload) {
  return {
    type: types.ADD_BUCKETLIST,
    payload
  };
}

export function updateBucketlist(id, payload) {
  return {
    type: types.UPDATE_BUCKETLIST,
    id,
    payload
  };
}

export function deleteAllBucketlist() {
  return {
    type: types.DELETE_ALL_BUCKETLIST
  }
}

export function toggleStarBucketlist(id) {
  return {
    type: types.TOGGLE_STAR_BUCKETLIST,
    id
  };
}

export function toggleEditBucketlist(id) {
  return {
    type: types.TOGGLE_EDIT_BUCKETLIST,
    id
  }
}

export function editBucketlist(id, text) {
  return {
    type: types.EDIT_BUCKETLIST,
    id,
    text
  };
}

export function removeBucketlist(id) {
  return {
    type: types.REMOVE_BUCKETLIST,
    id
  };
}

export function setVisibilityFilter(filter) {
  return {
    type: types.SET_VISIBILITY_FILTER,
    filter
  };
}
