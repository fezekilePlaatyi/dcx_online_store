export default function ConfirmationInfo(data: any) {

    console.log('On confirmation', data)
    let invoiceData = data.data
    console.log("Invoice data")
    console.log(invoiceData)
    return (
        <div>
            Hello From The Comp
        </div>
    )
}