import { useQuery } from "@apollo/client"
import { GETT_ALL_ANIMES } from "../libs/queries/GetAllAnime";
import { CardContainer } from "./card/card";


export function Favorites(){

    let local = localStorage.getItem("fav")
    let fav = JSON.parse(local)

    const {_, __, data} = useQuery(GETT_ALL_ANIMES, {
        variables : {
            page: 1,
            perPage : 25,
            
        }
    });

    if(_) return <div>Loading...</div>
    if(__) return <div>{__}</div>


    return(<div lass="card" style={{ 
        display:"grid",
        gridTemplateColumns : "0.5fr 0.5fr 0.5fr 0.5fr 0.5fr",
        rowGap : "1rem",
        columnGap : "1rem"
     }}>
        
        {data && data.Page.media.map((media,index)=>{

            // console.log(media    )
            // for()
            if(fav.includes(media.id) )return (<CardContainer media={media}/>)
        })

        }
    </div>
    )

}