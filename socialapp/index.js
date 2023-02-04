import express from "express";
import bodyParser from "body-parser";
import mongoose from "mongoose";
import cors from "cors"
import helmet from "helmet";
import dotenv from "dotenv";
import multer from "multer";
import morgan from "morgan";
import path from "path"
import {fileURLToPath} from "url"
import { Register } from "./controllers/auth.js";
import route from "./routes/route.js";
import UsersRoutes from "./routes/users.js"
import postsRoutes from "./routes/posts.js"
import { verifyToken } from "./middleware/auth.js";
import { createPost } from "./controllers/posts.js";
// import {Register} from "./controllers/auth"

// CONFIGURATION 
const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);
dotenv.config()
const app = express();
app.use(express.json());
app.use(helmet());
app.use(helmet.crossOriginResourcePolicy({policy:"cross-origin"}));
app.use(morgan("common"));
app.use(bodyParser.json({limit:"30mb",extended:true}));
app.use(bodyParser.urlencoded({limit:"30mb",extended:true}));
app.use(cors());
app.use("/assets",express.static(path.join(__dirname,'public/assets')));

// // FILE STORAGE 
const storage = multer.diskStorage({
    destination: function (req,file,cb){
        cb(null,"public/assets");
    },
    filename: function (req,file,cb){
        cb(null,file.originalname);
    }
});

const upload = multer({storage});

// ROUTE WITH FILES 
 app.post("/register",upload.single("picture"),Register)
app.post("/posts",verifyToken, upload.single("picture"),createPost)

// ROUTES
app.use("/user",route)
app.use("/users",UsersRoutes)
app.use("/posts", postsRoutes)

// MONGOOSE SETUP 
const PORT = process.env.PORT || 6001;
mongoose.set('strictQuery', true);
mongoose.connect('mongodb://localhost:27017/socialapp',{
    useNewUrlParser: true,
    useUnifiedTopology: true
}).then(()=>{
    app.listen(PORT,()=>console.log(`server port : ${PORT}` ))
}).catch((error)=> console.log(`${error} did not connect`))
