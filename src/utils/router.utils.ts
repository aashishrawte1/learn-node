import { Express, Router } from "express";
import { registerApi } from "../controllers/auth.controller";
export const router =  Router();

const routePath = {
    login: "/login",
    register: "/register",
    version: "/miq/miq-version"

}

// creating data. post method
router.post(routePath.register, registerApi);



// creation -- post
// update -- put/patch
// delete -- delete
// fetch -- get