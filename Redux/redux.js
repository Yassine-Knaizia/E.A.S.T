const initState={
  user:{},
  selectedprofile:{}
}

const reducers = {
    updatedata:(state,action)=>{
        return {
            ...state,
            user:action.value
        }
    },
    selectedprofile:(state,action)=>{
      return {
        ...state,
        selectedprofile:action.value
      }
    },
    unselect:(state,action)=>{
      return {
        ...state,
        selectedprofile:{},
        user:action.value
      }
    }

  };

const rootReducer = (state = initState, action) => {
    console.log(action);
    if (Object.keys(reducers).includes(action.type) ) {
      return reducers[action.type](state,action)
    }
    return state;
  };


module.exports={
    rootReducer
}
  