import UserModel from '../models/user.schema.js'
export default class UserRepository{
    async singup(user){
        try{
            const newuser = new UserModel(user);
            await newuser.save();
            return newuser;
        }catch(err){
            console.log(err);
            throw new Error(err);
        }
    }
}