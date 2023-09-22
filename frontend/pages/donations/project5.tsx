
import React from 'react';
import Link from 'next/link'; 
import styles from '../../styles/Card.module.css';



export default function FifthProject() {
   
  return (
    <>
    <div className={styles.container}>
      <div className="wrapper">
        <div className={styles.banner5}></div>
        <h2>400 MW Solar Power Project </h2>
     
        <p>
         at Bhadla, Rajasthan, India <br /> 
         The project activity reduces anthropogenic emissions <br />
         of greenhouse gases estimated <br />
         to be approximately 694,471 tCO2e per year 
          
        </p>
      </div>
      <div className={styles.button_wrapper}>
        {/* Use Link component for navigation */}
        <Link href="/Brilliant-Planet">
        
            <button className={styles.btn_outline}>DETAILS</button>
      
       
        <button className={styles.btn_fill}>DONATE</button>
        </Link>
      </div>
    </div>

    &nbsp;
    &nbsp;
  </>
   );
}