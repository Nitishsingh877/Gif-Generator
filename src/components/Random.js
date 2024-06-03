import axios from "axios";
import React, { useEffect, useState } from "react";
import Spinner from './spinner';
import useGif from "../hooks/useGif";


const API_KEY = process.env.REACT_APP_GIPHY_API_KEY;
// const API_KEY = "ltPQGPs09WAlTUgzpyLObElcBjgtOzUY";




const Random = () => {
 
    // const [gif , setGif] = useState('');
    // const[loading , setLoading] = useState("false");


//   async function fetchData() {
//         setLoading(true);
//         const url = `https://api.giphy.com/v1/gifs/random?api_key=${API_KEY}`;
//         const {data} = await axios.get(url);
//         const imagesource = data.data.images.downsized_large.url;
//         setGif(imagesource);
//         setLoading(false);
       
//     }
//     useEffect(() => {
//         fetchData();
//     },[])

       const {gif,loading,fetchData} = useGif();

    function clickHandler() {
        fetchData();
    }
    return(
       <div className="w-1/2  bg-green-500 rounded-lg border border-black flex flex-col items-center gap-y-5 mt-[15px]">
        <h1 className=" mt-[15px] text-2xl underline uppercase font-bold" >A Random GIF</h1>

        {
            loading ? (<Spinner/>) : ( <img src={gif} width="450"/>)
        }
       

        <button onClick={clickHandler}
        className="w-10/12 bg-white mb-[20px] text-lg py-2 rounded-lg ">Generate</button>
       </div> 

    )
}

export default Random;