import express from "express";
const route = new express.Router()
import {Register,Login} from '../controllers/auth.js'
import multer from "multer";

// FILE STORAGE 
const storage = multer.diskStorage({
    destination: function (req,file,cb){
        cb(null,"public/assets");
    },
    filename: function (req,file,cb){
        cb(null,file.originalname);
    }
});
// console.log(storage)
const upload = multer({storage});
// route.post('/register',upload.single("picturePath"),Register)
route.post('/login',Login)


export default route