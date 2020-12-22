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
}

export default UserService