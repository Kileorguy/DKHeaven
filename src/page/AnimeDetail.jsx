import { useParams, Link, useLocation } from "react-router-dom";
import { useQuery } from "@apollo/client";
import { GETT_ALL_ANIMES_BYID } from "../libs/queries/GetAllAnime";
import { CardContainer } from "../components/card/card";
import { useContext } from "react";
import { ThemeContext } from "../context/ThemeContext";

export default function AnimeDetail(){
    let theme = useContext(ThemeContext)
    // const id = useRouter().pathname
    const loc = useLocation().pathname
    // console.log(loc.replace('/','')) 
    const {_, __, data} = useQuery(GETT_ALL_ANIMES_BYID, {
        variables : {
            
            id : (loc.replace('/','')  )  
        }
    });
    {console.log(data)}
    if(!data) return <div><h1>Loading...</h1></div>
    return <div style={{ backgroundColor : theme.backgroundColor,
        color : theme.color,
        border : theme.border}}>
        {
            (
                <div className="d-flex flex-column align-items-center">
                    <CardContainer media={data.Media}/>
                    <div className="py-4 px-4" dangerouslySetInnerHTML={{ __html: data.Media.description}} />
                </div>
            )
        }
    </div>
 
}