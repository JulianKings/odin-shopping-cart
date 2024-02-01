import { useEffect, useState } from "react"
import '../style/shop.css'
import ShopItem from "./shopItem";
import { useOutletContext } from "react-router-dom";

function Shop()
{
    const [products, setProducts] = useState([]);
    const [error, setError] = useState(null);
    const [loading, setLoading] = useState(true);
    const [cartArray, setCartArray] = useOutletContext();
  
    useEffect(() => {
      fetch("https://fakestoreapi.com/products?limit=18", { mode: "cors" })
        .then((response) => {
          if (response.status >= 400) {
            throw new Error("server error");
          }
          return response.json();
        })
        .then((response) => setProducts(response))
        .catch((error) => setError(error))
        .finally(() => setLoading(false));
    }, []);
  
    if (error) return <p>A network error was encountered</p>;
    if (loading) return <p>Loading...</p>;

    let printArray;

    if(products.length > 0)
    {
        printArray = products.map((p) => <ShopItem key={p.id} product={p} passCartArray={cartArray} updateCart={setCartArray} />)
    }
    return (<>
    <div className="shopContainer">
        {printArray}
    </div>
    </>)
}

export default Shop