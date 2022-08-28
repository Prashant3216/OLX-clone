export function Reducer(state,action){
    switch(action.type){
        case "loginRequest": return {...state, isLoading:true}
        case "loginSuccess": return {...state, isLoading:false, isAuth:true}
        case "loginFailure": return {...state, isLoading:false, isError:true}
        case "dataRequest": return {...state, isDataLoading:true}
        case "dataSuccess": return {...state, isDataLoading:false, data:action.payload}
        case "dataFailure": return {...state, isDataLoading:false, isError:true}
        case "logoutRequest": return {...state, isAuth:false, isError:false, isLoading:false}
        case "signupRequest": return {...state, isLoading:true}
        case "signupSuccess": return {...state, isLoading:false}
        case "signupFailure": return {...state, isLoading:false, isError:true}



    }
}