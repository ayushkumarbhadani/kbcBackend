const express=require("express");
const app=express();


app.use(express.json());

app.get("/",(req,res)=>{
    res.json(({
        "TEST":"Working"
    }));
});

const PORT=8000 || process.env
app.listen(PORT,()=>{
    console.log(`App is listning on port ${PORT}`);
});