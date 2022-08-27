import {Route, Routes } from "react-router-dom";

import { HomePage } from "./HomePage";
import { LoginWithEmail } from "./LoginWithEmail";
import { LoginWithPhone } from "./LoginWithPhone";
import { Signup } from "./SignupPage";

export default function AllRoutes(){
    return (<Routes>
        <Route path={"/"} element={<HomePage/>}/>
        <Route path={"/login_with_phone"} element={<LoginWithPhone/>}/>
        <Route path={"/login_with_email"} element={<LoginWithEmail/>}/>
        <Route path={"/signup"} element={<Signup/>}/>
    </Routes>)
}