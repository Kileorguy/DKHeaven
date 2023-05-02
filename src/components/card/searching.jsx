import { useState } from "react";
import {  GETT_ALL_ANIMESBYNAME } from "../../libs/queries/GetAllAnime";
import { useQuery } from "@apollo/client"
import { CardContainer } from "./card";


export function Page(){

    let [searchGenre,setGenre] = useState("")
    let [isPressed,setPressed] = useState(false)

    const {_, __, data} = useQuery(GETT_ALL_ANIMESBYNAME, {
        variables : {
            page: 1,
            perPage : 25,
            name : searchGenre
        }
    });
    const handleChange = (e) =>{
        // e.preventDefault()
        setGenre(e.target.value)
    }
    const handleSubmit = (e) =>{
        e.preventDefault()
        setPressed(true)
    }
    if(_) return <div>Loading...</div>
    if(__) return <div>{__}</div>


    return(<div>
        <form onSubmit={handleSubmit}>
            <input type="text" placeholder="Genre" value={searchGenre} onChange={handleChange}/>
            <button>Search</button>
        </form>
        <div class="card" style={{ 
        display:"grid",
        gridTemplateColumns : "0.5fr 0.5fr 0.5fr 0.5fr 0.5fr",
        rowGap : "1rem",
        columnGap : "1rem"
     }}>

        {data && isPressed && data.Page.media.map((media,index)=>{
            // console.log(media    )
            return (<CardContainer media={media}/>)
        })
        
        }
        </div>
    </div>
    )

}