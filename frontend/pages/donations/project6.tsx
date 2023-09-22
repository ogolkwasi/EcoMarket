import React from 'react';
import Link from 'next/link'; 
import styles from '../../styles/Card.module.css';



export default function SixthProject() {
   
  return (
    <>
    <div className={styles.container}>
      <div className="wrapper">
        <div className={styles.banner6}></div>
        <h1>The Wind Farm project </h1>
        <p>
        The project activity reduces an estimated <br />
        117,849 tCO2e emissions per year of greenhouse gases,<br /> 
         thereby replacing 124,041.6 MWh/year <br />
         of electricity with renewable energy. 
          
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