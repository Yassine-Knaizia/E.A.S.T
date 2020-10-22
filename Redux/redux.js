const initState = {
  user: {
    Id: 0,
    FirstName: "",
    LastName: "",
    Email: "",
    Adresse: "",
    Gender: "",
    Age: 0,
    City: "",
    Field: ""
  }
}

const reducers = {
  updatedata: (state, action) => {
    console.log(state)
    return {
      ...state,
      user: action.value
    }
  },
};

const rootReducer = (state = initState, action) => {
  console.log(action);
  if (Object.keys(reducers).includes(action.type)) {
    return reducers[action.type](state, action)
  }
  return state;
};

module.exports = {
  rootReducer
}
