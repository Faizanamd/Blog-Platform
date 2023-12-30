import mongoose from 'mongoose';

const userSchema = new mongoose.Schema({
    firstName: {
        type: String,
        required: true,
    },
    middleName: String,
    lastName: String,
    countryCode: String,
    phoneNumber: Number,
    email: {
        type: String,
        required: true,
        unique: true, 
    },
    profilePicture: String,
    password: {
        type: String,
        required: true,
    },
    cpassword: {
        type: String,
        required: true,
    },
    interests: String,
    bio: String,
    terms: {
        type: String
    },
});

const UserModel = mongoose.model('users', userSchema);
export default UserModel;