import app from "../base";
import 'firebase/firestore';
import 'firebase/auth';
import axios from 'axios'
let sendInvoiceEmailURL = 'https://us-central1-hydradet-online-store.cloudfunctions.net/sendInvoiceEmail'

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

    emailInvoice = async (data: any) => {
        return axios({
            method: 'post',
            url: sendInvoiceEmailURL,
            data: data,
            headers: { 'Content-Type': 'application/json' }
        })
    }
}

export default InvoiceService