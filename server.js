import app from './index.js';
import { connectToMongoose  } from './src/config/connectToMongo.js';
app.listen(3000, ()=>{
    connectToMongoose();
    console.log("Sever is listening at port 8000")
})