import React from 'react';
import Link from 'next/link'; // Import the Link component
import styles from '../../styles/Card.module.css';

export default function FirstProject() {
  return (
    <>
      <div className={styles.container}>
        <div className="wrapper">
          <div className={styles.banner1}></div>
          <h1>Brilliant Planet</h1>
          <p>
            Brilliant Planet leverages innovative technology <br /> 
            to harness the power of these blooms:<br /> 
            quantifiably sequestering carbon at the gigaton scale. <br />
            We operate in deserts and can work on any coast.
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
