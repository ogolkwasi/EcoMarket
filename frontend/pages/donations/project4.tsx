
import React from 'react';
import Link from 'next/link'; 
import styles from '../../styles/Card.module.css';





export default function FourthProject() {
   
  return (
    <>
    <div className={styles.container}>
      <div className="wrapper">
        <div className={styles.banner4}></div>
        <h1>The Blue Carbon</h1>
        <p>
        Coastal ecosystems are vital for protecting<br /> 
         coastlines and mitigating climate change <br /> 
         Coastal ecosystems provide a variety of services <br /> 
         that are essential for a healthy planet.
         
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