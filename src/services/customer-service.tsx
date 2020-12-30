import app from "../base";
import 'firebase/firestore';
import 'firebase/auth';

class UserService {
    auth: any;
    db: any;

    constructor() {
        this.auth = app.auth()
        this.db = app.firestore();
    }

    signUpUser = async (userDetails: any) => {
        try {
            var userId = this.auth.currentUser.uid
            return this.db.collection("customers").doc(userId).set(userDetails)
        } catch (error) {
            return error
        }
    }

    updateUserDetail = async (userDetails: any) => {
        try {
            var userId = this.auth.currentUser.uid
            return this.db.collection("customers").doc(userId).set(userDetails)
        } catch (error) {
            return error
        }
    }


    sendPasswordResetEmail = async () => {
        try {
            var user = this.auth.currentUser;
            return this.auth.sendPasswordResetEmail(user.email)
        } catch (error) {
            return error
        }
    }


    getUserDetails = async () => {
        try {
            var userId = this.auth.currentUser.uid
            return this.db.collection("customers").doc(userId).get()
        } catch (error) {
            return error
        }
    }
}

export default UserService