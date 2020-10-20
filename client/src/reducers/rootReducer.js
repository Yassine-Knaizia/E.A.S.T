
const initState = {
  users: [{
    "a" : 0
    }
  ],
};

const reducers = {
  DELETE_POST: (state, action) => {
    let newUsers = state.users.filter((user) => {
      return user.id !== action.id;
    });
    return {
      ...state,
      users: newUsers,
    };
  },
};

const rootReducer = (state = initState, action) => {
  console.log(action);
  if (Object.keys(reducers).includes(action.type) ) {
    return reducers[action.type](state,action)
  }
  return state;
};

export default rootReducer;
