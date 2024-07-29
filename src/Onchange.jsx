//onchange,using with input tag to display name when change in the input field
import React , {useState} from 'react'
function MyComponent () {

    const [name,setName] = useState("GUESET")
    const [quantity,setQuantity] = useState(1)
    const [comment,setComment] = useState("")
    const [payment,setPayment] = useState("")
    const [shipping,setShipping] = useState("")

    //to display name when change in the input field
    function HandleNameChange (event) {
        setName(event.target.value)
    }
    //to change the quantity
    function HnadleQuantityChange (event) {
        setQuantity(event.target.value)
    }

    //comment
    function HnadleComment (event) {
        setComment(event.target.value)
    }
    //payment
    function HandlePaymentChange (event) {
        setPayment(event.target.value)
    }
    //with radio button shipping
    function handleShipping(event) {
        setShipping(event.target.value)
    }
    return(
        <div>
            <input value={name} onChange={HandleNameChange}></input>
            <p>Name:{name}</p>

            <input value={quantity} onChange={HnadleQuantityChange} type='number'></input>
            <p>Quantity:{quantity}</p>

            <textarea value={comment} onChange={HnadleComment} placeholder='Enter instructions'></textarea>
            <p>Comment:{comment}</p>

            <select value={payment} onChange={HandlePaymentChange}>
            <option value="">Select an option</option>
            <option value="visa">Visa</option>
            <option value="Mastercard">Mastercard</option>
            <option value="Giftcard">Giftcard</option></select>
            <p>payment:{payment}</p>

            <label>
                <input type='radio' value="pick up" checked={shipping === "pick up"} onChange={handleShipping}></input>
                pick up
            </label>
            <label>
            <input type='radio' value="delivery" checked={shipping === "delivery"} onChange={handleShipping}></input>
                delivery</label>
                <p>shipping:{shipping}</p>
        </div>
    )
}
export default MyComponent