import Head from 'next/head'
import Navbar from '../components/Navbar';
import utilStyles from '../styles/utils.module.scss'
import therapistStyles from '../styles/therapists.module.scss'


function Therapists(props) {
  return (
    <>
      <Head>
        <title>About us</title>

      </Head>
     
      <Navbar />

      <section>
        <div className={therapistStyles.findTherapistBox}>
          <p> FIND A THERAPIST</p>
        </div>
        <div className={therapistStyles.stateBox}> 

          
          <input id = "placeholder" className={therapistStyles.placeholder} placeholder="ENTER STATE'S ACRONYM" required="" ></input>
        </div>
        <div className={therapistStyles.searchBox}> 



        <button href="#" className={therapistStyles.button} type="button"> <p> GO </p></button>

        
        </div>  
   
      </section> 
      </>
  )

  
        
}
export default Therapists;


