import React,{useState} from 'react'
import {useHistory} from "react-router-dom"
import PizzaMan from '../assets/PizzaMan.png'
const Checkout = ({ingredients}) => {
    const [success, setSuccess] = useState(false)
    let history = useHistory()
    return (
        <>
        <div style={{ padding: 50,display:"flex"}}>
           <div>
               <h1>my ingredients</h1>
               {Object.keys(ingredients).map((ingredient)=>{
                   return(
                   <p>{ingredient[0].toUpperCase()}
                   {ingredient.substr(1)}</p>
                   )
               })}
               <button onClick={()=>setSuccess(true)} className="proceedToCheckout">confirm</button>
               <button style={{ marginLeft: 10 }} onClick={()=>history.push('/')} className="proceedToCheckout" >Go back</button>
           </div>
        </div>
        <div style={{ flex: 1 }}>
        {success && (
          <div style={{ textAlign: "center" , marginTop:"-20%"}}>
            <img src={PizzaMan} alt="pizzaman" height="300px" />
            <div style={{ fontFamily: "Open Sans Condensed", fontSize: 35 }}>
              We have received your order, Thank you
            </div>
            <div style={{ fontFamily: "Indie Flower", fontSize: 20 }}>
              Will be ready in 20-30 min.
            </div>
          </div>
        )}
        </div>
        </>
    )
}

export default Checkout
