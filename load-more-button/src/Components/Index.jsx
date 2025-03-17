import { useState, useEffect } from "react"
import './Styles.css';

export default function LoadMoreData() {
    const [Loading, setLoading] = useState(false);
    const [Products, setProducts] = useState([]);
    const [Count, setCount] = useState(0);
    const [DisableButton,setDisableButton]=useState(false);

    async function fetchdata() {
        try {
            setLoading(true);
            const response = await fetch(`https://dummyjson.com/products?limit=20&skip=${Count === 0 ? Count : Count * 20}`)
            const data = await response.json();

            console.log(data);

            if (data && data.products && data.products.length) {
                setProducts((prevData)=>[...prevData,...data.products]);
                setLoading(false);
            }

        } catch (e) {
            console.log(e);
            setLoading(false);
        }

    }

    useEffect(() => { fetchdata() }, [Count]);
    useEffect(()=>{
        if (Products && Products.length === 100)
            setDisableButton(true);
    },[Products])

    if (Loading) {
        return <div>Loading data please wait!</div>
    }
    return (<div className="container">
        <div className="product-container">
            {
                Products && Products.length ?
                    Products.map(item => <div className="product" key={item.id}>
                        <img src={item.thumbnail} alt={item.title} />
                        <p>{item.title}</p>
                    </div>) : null
            }
        </div>
        <div className="button-container">
            <button disabled={DisableButton} onClick={()=>setCount(Count+1)}>Load More Products</button>
        </div>
        {
            DisableButton?<p>You have reached to 100 products</p>:null
        }
    </div>);
}