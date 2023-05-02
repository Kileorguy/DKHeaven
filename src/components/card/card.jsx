import { useContext, useState } from "react"
import { Link } from "react-router-dom"
import { ThemeContext } from "../../context/ThemeContext"

export function CardContainer({media}){
  let theme = useContext(ThemeContext)

   return <div>
            <div style={{ backgroundColor : theme.backgroundColor,
        color : theme.color,
        border : theme.border }}>

        {/* {console.log(media)} */}
        {/* <h2>test</h2> */}
        {/* <LinkTo id={media.id}> */}
        <Link to={`/${media.id}`}>

        <ImageFill src={media.coverImage.large}/>
        <h4 class="card-title">{media.title.english}</h4>
        </Link>
        <Fav id={media.id} />
        

           
            </div>
   </div>
}
export function ImageFill({...Attr}){
    let theme = useContext(ThemeContext)
    return <div style={{ backgroundColor : theme.backgroundColor,
        color : theme.color,
      border : theme.border }}>
        {/* {console.log({...Attr})} */}
        <img class="card-img-top" {...Attr} alt="" />
    </div>
}
export function LinkTo({id,Children}){
    let theme = useContext(ThemeContext)
    return <div style={{ backgroundColor : theme.backgroundColor,
        color : theme.color,
      border : theme.border }}>
        <Link to={`/${id}` } relative ="path">{Children}</Link>
    </div>
}
export function Fav({id}){
    // console.log(id)
    
    let HandleClick = (e) =>{
        let local = localStorage.getItem("fav")
        let favs
        if(local) favs = JSON.parse(local) 
        else favs = []
        
        if(!favs.includes(id)) {
            favs.push(id)
            localStorage.setItem("fav",JSON.stringify(favs))
        }else{
            let idx = favs.indexOf(id)
            favs.splice(idx,1)
            localStorage.setItem("fav",JSON.stringify(favs))
        }
        // console.log(favs)
    }
   
    return <div>
        <button onClick={HandleClick}>
            Favorite
        </button>
    </div>
}