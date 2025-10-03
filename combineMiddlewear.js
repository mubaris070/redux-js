function combineMiddlewear({dispatch,getState}){
    return(next)=>{
        return(action)=>{
            console.log("Previous:",getState().count.value);
            console.log("Action:",action);
             next(action)
             console.log("Next:",getState().count.value);
             
        }
    }

}
export default combineMiddlewear