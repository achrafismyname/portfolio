import {useState, useEffect} from 'react'
import Head from 'next/head'
import Scrollbar from 'react-scrollbars-custom'

import About from '../components/About'
import Sidebar from '../components/Sidebar'
import Work from '../components/Work'

const Home = () => {
  const [width, setWidth] = useState(2000);
  useEffect(() => {
    setWidth(document.body.clientWidth);
    window.addEventListener("resize", function() {
      setWidth(document.body.clientWidth);
    })
    return;
  }, []);

  return (
  <div className="container">
    <Head>
      <title>Achraf Elghinoussi's Portfolio</title>
      <link rel="icon" href="/favicon.ico" />
    </Head>
    <div id="page">
      <div className="container">
        <div className="sidebar">
          <Sidebar />
        </div>
        <main className="content">
          {/* {(width>1200?
          (<Scrollbar><About /><Work /></Scrollbar>)
          :
          (<><About /><Work /></>)
          )} */}
          {(width>1200?
          (<Scrollbar><Work /></Scrollbar>)
          :
          (<><Work /></>)
          )}
        </main>
      </div>
    </div>
    <style jsx global>{`

      :root{
        --primary: #1760CC;
        --white: #ffffff;
        --black: #010101;
        --dark: #031735;
      }

      html,
      body {
        padding: 0;
        margin: 0;
        font-family: 'Josefin Sans', -apple-system, BlinkMacSystemFont, Segoe UI, Roboto, Oxygen,
          Ubuntu, Cantarell, Fira Sans, Droid Sans, Helvetica Neue, sans-serif;
        font-size: 1em; 
      }
      @media screen and (max-width: 400px){
        html, body{
          font-size: .9em; 
        }
      }

      * {
        box-sizing: border-box;
      }
      
      img {
        object-fit: cover;
      }
      .ScrollbarsCustom-TrackY{
        top: 0 !important;
      }
      .ScrollbarsCustom-Track, .ScrollbarsCustom-Thumb {
        border-radius: 0 !important;
      }
      #page .container{
        display: flex;
        height: 100vh;
        overflow: hidden;
      }
      .sidebar{
        width: 20%;
        min-width: 260px;
        height: 100%;
        padding: 2% 0;
      }
      .content{
        width: 80%;
        margin-top: 2%;
        margin-left: 2%;
      }
      @media screen and (max-width: 1200px){
        #page .container{
          flex-direction: column;
          overflow: auto;
          height: auto;
          align-items: center;
        }
        .sidebar, .content{
          width: 100%;
        }
        .sidebar{
          text-align: center;
        }
        .content{
          overflow-Y: none;
          margin-left: 0;
        }
      }

      .container {
        margin: auto;
        width: 96vw;
      }
    `}</style>
  </div>
  );
}

export default Home
