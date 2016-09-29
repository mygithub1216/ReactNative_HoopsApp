
import {handleActions} from 'redux-actions';

const initialState = {
  notificationsById: {},
};

const recognisedTypes = {
  FRIEND_REQUEST: true,
};

export default handleActions({

  NOTIFICATION_LOADED: (state, action) => {
    let newNotifications = {...action.notifications};

    /* for futureproofing, filter out any notifications that we don't recognise */
    for(let id in newNotifications) {
      if(recognisedTypes[newNotifications[id].type] !== true) {
        delete newNotifications[id];
      }
    }

    return {
      ...state,
      notificationsById: {
        ...state.notificationsById,
        ...newNotifications,
      },
    };
  },

}, initialState);
