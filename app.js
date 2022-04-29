import express from 'express';
import conn from './db/conn.js';
import userRouter from './routes/users.js';
import contactRouter from './routes/contacts.js';
import projectRouter from './routes/projects.js';
import cors from "cors";

const app = express();
conn;

app.use(cors({
    origin: "*",
    optionsSuccessStatus: 200
}));
app.use(express.json());
app.use("/user", userRouter);
app.use("/contact", contactRouter);
app.use("/project", projectRouter);



app.get('/', (req, res) => {
    res.status(200).json({message: "Hello from my-express-app!"});
});

const PORT = process.env.PORT || 5000;

app.listen(PORT, () => {
    console.log(`Server listening at http://localhost:${PORT}`);
});