import React, { useEffect, useState } from 'react';
import MemeCard from '../components/MemeCard';
import Memes from "../Api/Memes";  // ✅ Correct import

const Home = () => {
    const [data, setData] = useState([]);  // ✅ Import useState

    useEffect(() => {
        Memes().then((memes) => setData(memes.data.memes));  // ✅ Correct API response path
    }, []);

    return (
        <div className='row'>
            {data.map((el) => (
                <MemeCard key={el.id} img={el.url} title={el.name} />  // ✅ Fixed return inside map
            ))}
        </div>
    );
};

export default Home;
