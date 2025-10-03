import { createStore,applyMiddleware } from "https://cdn.jsdelivr.net/npm/redux@4.2.1/es/redux.mjs";
import thunk from "https://cdn.jsdelivr.net/npm/redux-thunk@2.4.2/es/index.js";  // default export


const initial = {
    loading:false,
    data:[],
    error:""
}

function thunkReduc (state = initial,action){
    switch(action.type){
        case"Fetch-request":
        return{...state,loading:true};
        case"Fetch-success":
        return{loading:false,data:action.payload,error:""};
        case"Fetch-failure":
        return{loading:false,data:[],error:action.payload};
        default:
            return state;
    }
}


function fetchdata(){
    return function(dispatch){
        dispatch({type:"Fetch-request"})
        fetch("https://jsonplaceholder.typicode.com/posts")
        .then((res)=>res.json())
        .then((data)=>{
            dispatch({type:"Fetch-success",payload:data})
        })
        .catch((err)=>{
            dispatch({type:"Fetch-failure",payload:err})
        })
    }
    
}

const store = createStore(thunkReduc,applyMiddleware(thunk))

store.subscribe(() => {
  document.getElementById("data").innerText =
    JSON.stringify(store.getState(), null, 2);
});
document.getElementById("click").onclick = ()=>{
    store.dispatch(fetchdata())
}