import UserModel from '../models/user.schema.js'
export default class UserRepository {
    async findByEmailId(email) {
        try {
            const user = await UserModel.findOne({ email: email })
            console.log("User", user);
            if (user) {
                return true;
            } else {
                return false;
            }
        } catch (err) {
            console.log(err);
            throw new Error(err);
        }
    }
    async signup(user) {
        try {
            console.log("user in sinpu", user);
            const newuser = new UserModel(user);
            await newuser.save();
            return newuser;
        } catch (err) {
            console.log("why this erro happened");
            throw new Error(err);
        }
    }
    async signin(user) {
        try {
            // Checking if email exists
            const validUser = await this.findByEmailId(user.email);
            console.log("valid user", validUser);
            if (validUser) {
                // Now checking password for the found email
                const result = await UserModel.findOne({
                    email: user.email,
                    password: user.password
                });

                if (result) {
                    // Email and password match
                    return result;
                } else {
                    // Password does not match
                    return "PasswordNotMatched";
                }
            } else {
                // Email does not exist
                return "EmailNotFound";
            }
        } catch (err) {
            console.log(err);
            throw new Error(err);
        }
    }

}