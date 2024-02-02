/* eslint-disable react-hooks/exhaustive-deps */
import { useEffect, useState } from "react"
import '../style/cart.css'
import { useOutletContext } from "react-router-dom";
import CartComponent from "./cartItem";

function Cart()
{
    const [products, setProducts] = useState([]);
    const [error, setError] = useState(null);
    const [loading, setLoading] = useState(true);
    const [cartArray, setCartArray] = useOutletContext();
  
    useEffect(() => {

        if(cartArray && cartArray.length > 0)
        {
            Promise.all(
                cartArray.map((cartItem) => 
                    fetch(("https://fakestoreapi.com/products/" + cartItem.id), { mode: "cors" })
                    .then((response) => {
                        if (response.status >= 400) {
                            throw new Error("server error");
                        }
                    return response.json();
                    })
                    .catch((error) => setError(error)))
            ).then(data => {
                setProducts(data);
            }).finally(() => setLoading(false));
        } else {
            setLoading(false);
        }
    }, []);
  
    if (error) return <p>A network error was encountered</p>;
    if (loading) return <p>Loading...</p>;

    let printArray;

    if(products.length > 0)
    {
        let productsAmount = 0;
        let productsPrice = 0;
        printArray = products.map((p) => { 
            let productIndex = cartArray.findIndex((cartItem) => cartItem.id === p.id); 
            productsAmount += cartArray[productIndex].amount;
            productsPrice += (cartArray[productIndex].amount * p.price);
            return <CartComponent key={p.id} product={p} passCartArray={cartArray} updateCart={setCartArray} productsArray={products} updateProducts={setProducts} /> 
        })

        // round number
        productsPrice = Math.round((productsPrice + Number.EPSILON) * 100) / 100;

        return (<>
        <div className="cartPage">
            <div className="cartContainer">
                {printArray}
            </div>
            <div className="orderContainer">
                <p className="orderSummary">Summary of your order</p>
                <p>Subtotal ({productsAmount} product{(productsAmount > 1) ? 's' : ''}): {productsPrice} EUR</p>
                <div className="orderPayment">
                    <button type="button">Proceed to checkout</button>
                </div>
            </div>
        </div>
        </>)
    } else {
        return (
            <div id="error-page">
              <h1>Oops!</h1>
              <p>It looks like your cart is empty</p>
              <p>
                <i>Go on and add something to your cart!</i>
              </p>
            </div>
          );
    }
}

export default Cart