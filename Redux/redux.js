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
    Field: "",
  },
  jobs : {
    client_id : "",
    client_name : "", 
    jobTitle : "",
    fields : "",
    imgUrl : "",
    jobDescription : "",
    budget : "",
  }

}

const reducers = {
  updatedata: (state, action) => {
    return {
      ...state,
      user: action.value,
      jobs : action.value,
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
