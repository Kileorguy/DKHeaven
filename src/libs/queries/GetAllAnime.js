// import { gql }

import { gql } from "@apollo/client";

export const GETT_ALL_ANIMES = gql`
    query getAllAnime($page:Int, $perPage:Int){
  Page(page:$page, perPage:$perPage ){
    media(type:ANIME, sort:POPULARITY_DESC){
      description
      id
      coverImage{
        large
      }
      title{
        english
      }
    }
  }
}

  `;
  export const GETT_ALL_ANIMES_BYID = gql`
  query getAllAnime($id:Int){
  
  Media(id:$id){
    description
    id
    coverImage{
      large
    }
    title{
      english
    }
  }

} 

`;
export const GETT_ALL_ANIMESBYNAME = gql`
    query getAllAnime($page:Int, $perPage:Int,$name:String){
    Page(page:$page, perPage:$perPage){
    media(type:ANIME, sort:POPULARITY_DESC, genre:$name){
      description
      id
      coverImage{
        large
      }
      title{
        english
      }
    }
  }
}

  `;