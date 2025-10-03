import { createStore, applyMiddleware } from "https://cdn.jsdelivr.net/npm/redux@4.2.1/es/redux.mjs";
import thunk from "https://cdn.jsdelivr.net/npm/redux-thunk@2.4.2/es/index.js";  // default export
import { composeWithDevTools } from "https://cdn.skypack.dev/@redux-devtools/extension";


const initial = {
    loading: false,
    data: [],
    error: ""
};

function thunkReducer(state = initial, action) {
    switch (action.type) {
        case "Fetch-user-request":
            return { ...state, loading: true };
        case "Fetch-user-success":
            return { loading: false, data: action.payload, error: "" };
        case "Fetch-user-fail":
            return { loading: false, data: [], error: action.payload };
        default:
            return state;
    }
}

function userfetch() {
    return function (dispatch) {
        dispatch({ type: "Fetch-user-request" });
        fetch("https://jsonplaceholder.typicode.com/users")
            .then((res) => res.json())
            .then((data) => {
                dispatch({ type: "Fetch-user-success", payload: data });
            })
            .catch((err) => {
                dispatch({ type: "Fetch-user-fail", payload: err.message });
            });
    };
}

const store = createStore(thunkReducer, composeWithDevTools(applyMiddleware(thunk)));

store.subscribe(() => {
    // Convert the object to a formatted string for display
    document.getElementById("data").innerText = JSON.stringify(store.getState(), null, 2);
});

document.getElementById("click").onclick = () => {
    store.dispatch(userfetch());
};
