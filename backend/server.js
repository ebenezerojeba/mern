import express from "express"
import cors from "cors"
import { connectDB } from "./config/db.js"
import foodRouter from "./routes/foodRoute.js"
import userRouter from "./routes/userRouter.js"
import 'dotenv/config'
import cartRouter from "./routes/cartRoute.js"
import orderRouter from "./routes/orderRoute.js"

// app config
const app = express()
const port = process.env.PORT || 5000;

//CORS
const allowedOrigins = [
    'https://palatial.onrender.com',
    'https://palatial-admin.onrender.com',
    'http://localhost:5173',
    'http://localhost:5174'
  ];
  
  app.use(cors({
    origin: function (origin, callback) {
      // Allow requests with no origin, like mobile apps or curl requests
      if (!origin) return callback(null, true);
      if (allowedOrigins.indexOf(origin) === -1) {
        const msg = 'The CORS policy for this site does not allow access from the specified Origin.';
        return callback(new Error(msg), false);
      }
      return callback(null, true);
    },
    optionsSuccessStatus: 200 // Some legacy browsers (IE11, various SmartTVs) choke on 204
  }));
  
{/*
const allowedOrigins = ['https://palatial.onrender.com', 'https://palatial-admin.onrender.com', 'http://localhost:5173', 'http://localhost:5ll174'];
=======
const allowedOrigins = ['https://palatial.onrender.com', 'https://palatial-admin.onrender.com', 'http://localhost:5173','http://localhost:5174'];
>>>>>>> 519e88f0766e8bb5dcfd035f22fcbc0cd4118735

app.use(cors({
    origin: function (origin, callback) {
        // Allow requests with no origin, like mobile apps or curl requests
        if (!origin) return callback(null, true);
        if (allowedOrigins.indexOf(origin) === -1) {
            const msg = 'The CORS policy for this site does not allow access from the specified Origin.';
            return callback(new Error(msg), false);
        }
        return callback(null, true);
    },
    optionsSuccessStatus: 200 // Some legacy browsers (IE11, various SmartTVs) choke on 204
})); */}



// middleware
app.use(express.json());

//db connection
connectDB();

//api endpoints
app.use("/api/food",foodRouter)
app.use("/images",express.static('uploads'))
app.use("/api/user",userRouter)
app.use("/api/cart",cartRouter)
app.use("/api/order",orderRouter)



app.get("/",(req,res)=>{
    res.send("API Working")
})

app.listen(
    console.log(`Server Stared on https://palatial-backend.onrender.com `)
)
