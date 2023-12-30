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
    async signin(user){
        try{
            //checking if email exist or not
            const validUser = this.findByEmailId(user.email);
            if(validUser){
                // now checking passowrd as per email
                const result = UserModel.findOne({
                    email: user.email,
                    password: user.password
                })
                  return result;
            }else{
                return "email does not exist";
            }
        }catch(err){
            console.log(err);
            throw new Error(err);
        }
    }
    async findByEmailId(email){
        try{
            const user = UserModel.findOne({email:email})
            if(user){
                return true;
            }else{
                return false;
            }
        }catch(err){
            console.log(err);
            throw new Error(err);
        }
    }
}