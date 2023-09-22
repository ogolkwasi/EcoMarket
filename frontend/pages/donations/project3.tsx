
import React from 'react';
import Link from 'next/link'; 
import styles from '../../styles/Card.module.css';





export default function ThirdProject() {
   
  return (
    <>
    <div className={styles.container}>
      <div className="wrapper">
        <div className={styles.banner3}></div>
        <h1>Ethiopian Forest </h1>
        <h2>Regeneration Cooperative</h2>
        <p>
        Protects more than 50 native tree species <br />
Restoration of 3,227 hectares of degraded native forests<br />
 with indigenous and selected <br /> 
 non-indigenous bio-diverse species <br /> 
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