import Head from 'next/head'
import Image from 'next/image'


export default function Home() {
  return (
    <div className="container">
      <Head>
        <title>Filthy Slaps</title>
        <link rel="icon" href="/favicon.ico" />
        <meta property="og:url" content="filthyslaps.com" />
        <meta property="og:type" content="Filthy Slaps" />
        <meta
          property="og:title"
          content="Filthy Slaps"
        />
        <meta name="twitter:card" content="summary" />
        <meta
          property="og:description"
          content="testing"
        />
        <meta property="og:image" content={"/logo.jpg"} />
      </Head>

      <main>
        
        <header>
          <div className="row">
            <div className="column">
            <div>
              <Image
                    priority
                    src="/logo.jpg"
                    alt="logo"
                    width="864"
                    height="190"

                  />
              </div>
            </div>
            <div className="column">
              
              <Image
                    priority
                    src="/spiders.png"
                    alt="logo"
                    width="864"
                    height="190"

                  />
            </div>
          </div>  
          <div className="mbar">
              <span className="hh4"> Home </span>
              <span className="hh4"> Music </span>
              <span className="hh4"> Genre </span>
              <span className="hh4"> 
                <a
                href="https://soundcloud.com/filthytaft"
               >
            Playlists </a> </span>
              <span className="hh4"> News </span>
              <span className="hh4"> Interview </span>
              <span className="hh4"> Submission </span>
              <span className="hh4"> Store </span>
          </div>
        </header>

        <div className="row2">
          <div className='column2 left'> 
          <Image
                    priority
                    src="/taft.png"
                    alt="Ben Taft"
                    width="3500"
                    height="1610"

                  />
           </div>
          <div className='column2 right'>
            <h3>It's Ben Taft's Birthday</h3>
            <hr></hr>
            <p>The Los Angeles based CEO and angel investor turns 26? 27? I've lost track of the passage of years but anyway let's wish him a happy birthday.</p>
          </div>
        </div>

        <h1 className="title">
          Happy Birthday Taft!
        </h1>

        <p className="description">
          This URL is your birthday presents. Do with it as you please. 
        </p>
        <p className="description">
        You can find the repository for this website <a className="dumbA" href="https://github.com/josephpmay/filthyslaps" >here.</a>
        </p>



      </main>

      <footer>
        <a
          href="https://vercel.com?utm_source=create-next-app&utm_medium=default-template&utm_campaign=create-next-app"
          target="_blank"
          rel="noopener noreferrer"
        >
          Created with Next.js | Hosted by{' '}
          <img src="/vercel.svg" alt="Vercel" className="logo" />
        </a>
      </footer>

      <style jsx>{`

        .row {
          display: flex;
          max-width: 893px;
        }

        .column {
          flex: 50%;
        }
        

        .column2 {
          float: left;
          padding: 10px;
          max-height: 300px; 
        }
        
        .left {
          width: 75%;
        }

        .right {
          width: 25%;
        }

        @media only screen and (max-width: 700px) {
          .left {
            width: 60%;
          }

            .right {
              width: 40%;
            }

            .row {
              display: block;
            }

            .column {
              width: 100%;
            }
    
          }

          @media only screen and (max-width: 500px) {
            .left {
              width: 100%;
            }
  
              .right {
                width: 100%;
              }
          }
        
        
       


        .mbar {
          background-color: black;
          padding-top: 3px;
          padding-bottom: 3px;
        }

        .hh4 {
          color: white;
          padding-left: 10px;
          padding-right: 20px;
          margin-top: 3px;
          padding-bottom: 3px;
          font-size: 22px;
          font-weight: bold;
        }

        .dumbA {
          text-decoration: underline;
        }

        .row2 {
          max-width: 893px;
        }

        .container {
          min-height: 100vh;
          padding: 0 0.5rem;
          display: flex;
          flex-direction: column;
          justify-content: center;
          align-items: center;
        }

        main {
          padding: 5rem 0;
          flex: 1;
          display: flex;
          flex-direction: column;
          justify-content: center;
          align-items: center;
        }

        footer {
          width: 100%;
          height: 100px;
          border-top: 1px solid #eaeaea;
          display: flex;
          justify-content: center;
          align-items: center;
        }

        footer img {
          margin-left: 0.5rem;
        }

        footer a {
          display: flex;
          justify-content: center;
          align-items: center;
        }

        a {
          color: inherit;
          text-decoration: none;
        }

        .title a {
          color: #0070f3;
          text-decoration: none;
        }

        .title a:hover,
        .title a:focus,
        .title a:active {
          text-decoration: underline;
        }

        .title {
          margin: 0;
          line-height: 1.15;
          font-size: 4rem;
        }

        .title,
        .description {
          text-align: center;
        }

        .description {
          line-height: 1.5;
          font-size: 1.5rem;
        }

        code {
          background: #fafafa;
          border-radius: 5px;
          padding: 0.75rem;
          font-size: 1.1rem;
          font-family: Menlo, Monaco, Lucida Console, Liberation Mono,
            DejaVu Sans Mono, Bitstream Vera Sans Mono, Courier New, monospace;
        }

        .grid {
          display: flex;
          align-items: center;
          justify-content: center;
          flex-wrap: wrap;

          max-width: 800px;
          margin-top: 3rem;
        }

        .card {
          margin: 1rem;
          flex-basis: 45%;
          padding: 1.5rem;
          text-align: left;
          color: inherit;
          text-decoration: none;
          border: 1px solid #eaeaea;
          border-radius: 10px;
          transition: color 0.15s ease, border-color 0.15s ease;
        }

        .card:hover,
        .card:focus,
        .card:active {
          color: #0070f3;
          border-color: #0070f3;
        }

        .card h3 {
          margin: 0 0 1rem 0;
          font-size: 1.5rem;
        }

        .card p {
          margin: 0;
          font-size: 1.25rem;
          line-height: 1.5;
        }

        .logo {
          height: 1em;
        }

        @media (max-width: 600px) {
          .grid {
            width: 100%;
            flex-direction: column;
          }
        }
      `}</style>

      <style jsx global>{`
        html,
        body {
          padding: 0;
          margin: 0;
          font-family: -apple-system, BlinkMacSystemFont, Segoe UI, Roboto,
            Oxygen, Ubuntu, Cantarell, Fira Sans, Droid Sans, Helvetica Neue,
            sans-serif;
        }

        * {
          box-sizing: border-box;
        }
      `}</style>
    </div>
  )
}
