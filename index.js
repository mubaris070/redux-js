import { createStore } from "https://cdn.skypack.dev/redux";


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


document.getElementById('increment').onclick = ()=>{
    store.dispatch({
        type:"increment"
    });
 }
document.getElementById('decrement').onclick = ()=>{
    store.dispatch({
        type:"decrement",
    });
}

 console.log(state);
 