import Link from 'next/link';
import Navbar from '../components/Navbar';
import Head from 'next/head'
import fetch from 'isomorphic-unfetch';
import useSWR from 'swr';
import cookie from 'js-cookie';

export default function Home(props) {
  const {data, revalidate} = useSWR('/api/me', async function(args) {
    const res = await fetch(args);
    return res.json();
  });
  if (!data) return <h1>Loading...</h1>;

  return (
    <>
      <Head >
        <title>Holiday Home</title>
      </Head>
      <div style = {{ backgroundImage:'url("https://api.time.com/wp-content/uploads/2019/06/what-is-half-christmas-workaholics.jpg")', backgroundsize: 'cover'}}>
      
      <Navbar />
        
          <section className="hero" >
          <div className="container">
            <div className="text-wrapper">
              <br></br>
              <h1 className="title" style ={{color: 'white'}}>Hi there, 
              <br></br>
              Welcome to Holiday Hacks! <span class="wave">🎄</span>
              <br></br>
              <br></br>
              <br></br>
              <br></br>
              <br></br>
              <br></br>
              </h1>
              
              <Link href="/about"><a className="cta">Learn More</a></Link>
          </div> </div>
        </section>
        </div>
        
    </>
  );
}



