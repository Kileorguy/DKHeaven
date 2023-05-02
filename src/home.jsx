import { useQuery } from "@apollo/client"
import { CardContainer } from "./components/card/card";
// import { GET_ALL_ANIME } from "../lib/queries/GetAnime"
import { GETT_ALL_ANIMES } from "./libs/queries/GetAllAnime";

export default function Home(){
    const {_, __, data} = useQuery(GETT_ALL_ANIMES, {
        variables : {
            page: 1,
            perPage : 50,
        }
    });
    if(_) return <h1>Loading...</h1>
    if(__) return <h1>{__}</h1>
    

    
    if(!data) return <div> <h1> Loading... </h1></div>
    return <div class="card" style={{ 
        display:"grid",
        gridTemplateColumns : "0.5fr 0.5fr 0.5fr 0.5fr 0.5fr",
        rowGap : "1rem",
        columnGap : "1rem"
     }}>
        {data.Page.media.map((media,index)=>{

            return (<CardContainer media={media}/>)
        })

        }
    </div>
}