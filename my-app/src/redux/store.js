import { configureStore} from "@reduxjs/toolkit";
import cartReducer from "./cartRedux";
import userRedux from "./userRedux";
import userReducer from "./userRedux"

const store =  configureStore({
    reducer :{
        cart : cartReducer,
        user : userReducer
       
    },
})


export default store