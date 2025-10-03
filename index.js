import { createStore } from "https://cdn.skypack.dev/redux";
// import { composeWithDevTools } from "https://cdn.skypack.dev/@redux-devtools/extension";



const initial = {
    value : 0
}

function appReducer(prevState = initial,action){
    switch(action.type){
        case "increment":
            return{
                ...prevState,value:prevState.value+1
            }
            case"decrement":
            return{
                ...prevState,value:prevState.value-1
            }
            default:
                return prevState
    }
}

const store = createStore(appReducer);

 const state = store.getState()

store.subscribe(()=>{
    document.getElementById('count').innerText = store.getState().value
})

document.getElementById('count').innerText = state.value


function increment(){
   return{ type:"increment"}
}

function decrement(){
   return{ type:"decrement"}
}


document.getElementById('increment').onclick = ()=>{
    store.dispatch(increment());
 }
document.getElementById('decrement').onclick = ()=>{
    store.dispatch(decrement());
}

 console.log(state);
 