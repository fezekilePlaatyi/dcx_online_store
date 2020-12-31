import app from "../base";
import 'firebase/firestore';
import 'firebase/auth';

class InvoiceService {
    auth: any;
    db: any;

    constructor() {
        this.auth = app.auth()
        this.db = app.firestore();
    }

    createInvoice = async (invoiceData: any) => {
        var userId = this.auth.currentUser.uid;
        return this.db.collection("customer_invoices").doc(userId).collection("invoices").doc().set(invoiceData)
    }

    getInvoicesByUserId = async () => {
        var userId = this.auth.currentUser.uid;
        return this.db.collection("customer_invoices").doc(userId).collection("invoices").get()
    }
}

export default InvoiceService