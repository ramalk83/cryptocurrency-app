import {FETCHING_COIN_DATA,FETCHING_COIN_DATA_FAIL,FETCHING_COIN_DATA_SUCCESS} from './../Utils/ActionTypes'

const initialState ={
    isFetching:null,
    data:[],
    hasError:false,
    errorMessage:null
}

export default function (state=initialState,action){

  switch (action.type) {
    case FETCHING_COIN_DATA:
        return Object.assign({},state,
            {
                isFetching:true,
                data:null,
                hasError:false,
                errorMessage:null 
            });
             case FETCHING_COIN_DATA_SUCCESS:
                return Object.assign(
                    {},state,{
                        isFetching:false,
                        data:action.payload,
                        hasError:false,
                        errorMessage:null 
                     });
             case FETCHING_COIN_DATA_FAIL:
                        return Object.assign(
                            {},state,{
                                isFetching:false,
                                data:null,
                                hasError:true,
                                errorMessage:action.err 
            });                        
 
    default:
        return state;
}

}