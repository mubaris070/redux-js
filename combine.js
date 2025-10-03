// import { createStore,combineReducers } from "https://cdn.skypack.dev/redux";

import { combineReducers, createStore,applyMiddleware } from "https://cdn.skypack.dev/redux";
// import combineMiddlewear from "./combineMiddlewear.js";
import logger from "https://cdn.skypack.dev/redux-logger";

// // const initial = {
// //     value :0,
// //     todos:[]
// // }

// function mulReduce(prevstat = {value:0},action){
//     switch(action.type){
//         case"increment":
//         return{value:prevstat.value+1}
//         case"decrement":
//         return{value:prevstat.value-1}
//         default:
//           return  prevstat
//     }
// }


// function changetheme(prevstat={mode:"Light"},action){
//     switch(action.type){
//         case"change":
//         return{mode:prevstat.mode === "Light"?"Dark":"Light"}
//         default:
//             return prevstat
//     }               
// }



// const rootReduce = combineReducers({
//     count : mulReduce,
//     color : changetheme
// })


// const store = createStore(rootReduce)

// function Render(){
//     document.getElementById("counter").innerText=store.getState().count.value
//         document.getElementById("theme").innerText=store.getState().color.mode
// }

// store.subscribe(Render)


// function increment(){
//     return{ type:"increment"}
// }

// function decrement(){
//     return{type:"decrement"}
// }

// function theme(){
//     return{type:"change"}
// }

// document.getElementById("inc"). onclick = ()=>{
//     store.dispatch(increment())
// }
// document.getElementById("dec"). onclick=()=>{
//     store.dispatch(decrement())
// }
// document.getElementById("toggle-theme"). onclick=()=>{
//     store.dispatch(theme())
// }


function numcount(state = {value:0},action){
    switch(action.type){
        case"increment":
        return{value:state.value+1}
        case"decrement":
        return{value:state.value-1}
        default:
            return state
    }
}

    function changetheme(state={color:"Light"},action){
        switch(action.type){
            case"theme":
            return{color:state.color === "Light"?"Blue":"Light"}
            default:
                return state
        }
    }


    const rootStore=combineReducers({
        count:numcount,
        color:changetheme
    })

    const store = createStore(rootStore,applyMiddleware(logger))


    function Render(){
        document.getElementById("counter").innerText = store.getState().count.value
        document.getElementById("theme").innerText = store.getState().color.color

    //       document.body.style.backgroundColor =
    // store.getState().color.color === "Light" ? "white" : "blue"
    // document.body.style.color =
    // store.getState().color.color === "Light" ? "blue":"white"
    
    }

    store.subscribe(Render)


function increment(){
    return{type:"increment"}
}
function decrement(){
    return{type:"decrement"}
}
function change(){
    return {type:"theme"}
}

document.getElementById("inc").onclick = ()=>{
    store.dispatch(increment())
}

document.getElementById("dec").onclick = ()=>{
    store.dispatch(decrement()) 
}

document.getElementById("toggle-theme").onclick = ()=>{
    store.dispatch(change())
}