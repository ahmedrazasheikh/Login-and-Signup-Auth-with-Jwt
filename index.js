console.log("I am server file");
import express from 'express';
const app = express()
import cors from 'cors'
import mongoose from 'mongoose';
import cookieParser from 'cookie-parser';
const port = process.env.PORT || 8000
import loginsignup from './Routes/Login and Sign.js'

app.use(express.json());
app.use(cookieParser());
// app.use(cors({
//     origin: ['http://localhost:5173', "*"],
//     credentials: true
// }));
app.use('/api/v1', loginsignup)
app.use('/api/v1', (req, res, next) => {

    console.log("req.cookies: ", req.cookies);

    if (!req?.cookies?.Token) {
        res.status(401).send({
            message: "include http-only credentials with every request"
        })
        return;
    }

    jwt.verify(req.cookies.Token, SECRET, function (err, decodedData) {
        if (!err) {

            console.log("decodedData: ", decodedData);

            const nowDate = new Date().getTime() / 1000;

            if (decodedData.exp < nowDate) {

                res.status(401);
                res.cookie('Token', '', {
                    maxAge: 1,
                    httpOnly: true,
                    sameSite: 'none',
                    secure: true
                });
                res.send({ message: "token expired" })

            } else {

                console.log("token approved");

                req.body.token = decodedData
                next();
            }
        } else {
            res.status(401).send("invalid token")
        }
    });
})
app.listen(port, () => {
    console.log(`http://localhost:${port}`)
})