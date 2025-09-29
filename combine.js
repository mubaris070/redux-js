import { createStore,combineReducers } from "https://cdn.skypack.dev/redux";

// const initial = {
//     value :0,
//     todos:[]
// }

function mulReduce(prevstat = {value:0},action){
    switch(action.type){
        case"increment":
        return{value:prevstat.value+1}
        case"decrement":
        return{value:prevstat.value-1}
        default:
          return  prevstat
    }
}


function changetheme(prevstat={mode:"Light"},action){
    switch(action.type){
        case"change":
        return{mode:prevstat.mode === "Light"?"Dark":"Light"}
        default:
            return prevstat
    }
}



const rootReduce = combineReducers({
    count : mulReduce,
    color : changetheme
})


const store = createStore(rootReduce)

function Render(){
    document.getElementById("counter").innerText=store.getState().count.value
        document.getElementById("theme").innerText=store.getState().color.mode
}

store.subscribe(Render)


function increment(){
    return{ type:"increment"}
}

function decrement(){
    return{type:"decrement"}
}

function theme(){
    return{type:"change"}
}

document.getElementById("inc"). onclick = ()=>{
    store.dispatch(increment())
}
document.getElementById("dec"). onclick=()=>{
    store.dispatch(decrement())
}
document.getElementById("toggle-theme"). onclick=()=>{
    store.dispatch(theme())
}