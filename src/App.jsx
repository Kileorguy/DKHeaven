import 'bootstrap/dist/css/bootstrap.css'
import './App.css';
import { ApolloClient, InMemoryCache, ApolloProvider, gql } from '@apollo/client';
import Home from './home';
import { Theme, ThemeContext } from './context/ThemeContext';
import { useContext, useState } from 'react';
import { BrowserRouter, Link, Route, RouterProvider, Routes } from 'react-router-dom';
import { BrowserRouter as Switch, Router } from 'react-router-dom';

import AnimeDetail from './page/AnimeDetail';
import { Page, Searching } from './components/card/searching';
import { Favorites } from './components/favorites';

const client = new ApolloClient({
  uri: 'https://graphql.anilist.co',
  cache: new InMemoryCache(),
});
export function App() {
  let [curr,setCurr] = useState(Theme.dark)
  let changeCurr = () =>{
    if(curr === Theme.light) setCurr(Theme.dark)
    else setCurr(Theme.light)
    console.log(curr)
  }
  
  let theme = useContext(ThemeContext)
  return (
    <ThemeContext.Provider value={curr} style={{ backgroundColor : theme.backgroundColor,
      color : theme.color,
      border : theme.border}}>
    <div style={{ backgroundColor : theme.backgroundColor,
      color : theme.color,
      border : theme.border }}>

    <ApolloProvider client={client} style={{ backgroundColor : theme.backgroundColor,
      color : theme.color,
      border : theme.border }}>

        <nav className="navbar navbar-expand-lg bg-body-tertiary">
          <div className="container-fluid" style={{ backgroundColor : theme.backgroundColor,
                  color : theme.color,
                  }}>
            <a className="navbar-brand" href="/">DK Heaven</a>
              <div className="navbar-nav flex-row" 
              >
                <a className="nav-link active me-3" href="/">Home</a>
                <a className="nav-link active me-3" href="/search">Search</a>
                <a className="nav-link active me-3" href="/favo">Favorites</a>
                {
                  curr === Theme.light ? (<button onClick={changeCurr}
                    style={{ backgroundColor : theme.backgroundColor,
                      color : theme.color,
                      border : theme.border }}>Dark</button>) : (<button style={{ backgroundColor : theme.backgroundColor,
                        color : theme.color,
                        border : theme.border }} onClick={changeCurr}>Light</button>)
                      }
              </div>
              {/* </div> */}
            </div>
        </nav>
        
      {/* <Home></Home> */}
      <BrowserRouter>
          <Routes>
            <Route path='/' element={<Home/>}></Route>
            <Route path='/:animeID' element={<AnimeDetail/>}></Route>
            <Route path='/' element={<Home/>}></Route>
            <Route path='/search' element={<Page/>}></Route>
            <Route path='/favo' element={<Favorites/>}></Route>
          </Routes>
      </BrowserRouter>
     </ApolloProvider>
                      </div>
      </ThemeContext.Provider>
  )
  
}

export default App;
