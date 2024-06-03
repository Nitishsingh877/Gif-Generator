import axios from "axios";
import React, { useEffect, useState } from "react";
import Spinner from './spinner';
import useGif from "../hooks/useGif";


const API_KEY = process.env.REACT_APP_GIPHY_API_KEY;
// const API_KEY = "ltPQGPs09WAlTUgzpyLObElcBjgtOzUY";




const Tag = () => {
 
    // const [gif , setGif] = useState('');
    // const[loading , setLoading] = useState("false");
    const[tag,setTag] = useState("");


//   async function fetchData() {
//         setLoading(true);
//         const url = `https://api.giphy.com/v1/gifs/random?api_key=${API_KEY}&tag=${tag}`;
//         const {data} = await axios.get(url);
//         const imagesource = data.data.images.downsized_large.url;
//         setGif(imagesource);
//         setLoading(false);
       
//     }
//     useEffect(() => {
//         fetchData();
//     },[])


    const {gif,loading,fetchData} = useGif(tag);
     
    
    
    function clickHandler() {
        fetchData();
    }

    function changeHandler(event) {
        setTag(event.target.value);

    }
    return(
       <div className="w-1/2  bg-blue-500 rounded-lg border border-black flex flex-col items-center gap-y-5 mt-[15px]">
        <h1 className=" mt-[15px] text-2xl underline uppercase font-bold" >Random {tag} GIF</h1>

        {
            loading ? (<Spinner/>) : ( <img src={gif} width="450"/>)
        }

        <input 
        className="w-10/12  bg-white mb-[1px] text-lg py-2 rounded-lg  text-center"
        onChange={changeHandler}
        value={tag}>
        </input>
       

        <button onClick={clickHandler}
        className="w-10/12 bg-white mb-[20px] text-lg py-2 rounded-lg ">Generate</button>
       </div> 

    )
}

export default Tag;