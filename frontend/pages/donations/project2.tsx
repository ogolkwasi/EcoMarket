import React from 'react';
import Link from 'next/link'; 
import styles from '../../styles/Card.module.css';





export default function SecondProject() {
   

    return (
      <>
      <div className={styles.container}>
        <div className="wrapper">
          <div className={styles.banner2}></div>
          <h1>Oceana</h1>
          <h3> Protecting the World's Oceans</h3>
          <p>
          Mangrove forests can store up to four times <br /> 
          more carbon dioxide than other types of forests. <br />
          Mangrove forests provide a nursery for many marine<br />
           species, helping to boost the local ecosystem
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