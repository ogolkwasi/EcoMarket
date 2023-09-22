import styles from "../styles/Home.module.css";
import React, { useState } from 'react';
import FirstProject from "../pages/donations/project1"
import SecondProject from "../pages/donations/project2"
import ThirdProject from "../pages/donations/project3"
import FourthProject from "../pages/donations/project4"
import FifthProject from "../pages/donations/project5"
import SixthProject from "../pages/donations/project6"




export default function Kind() {
   

    return (
        <>
       
       
    <div className={styles.box_acc}>
    <div style={{ display: "flex", alignItems: "center", justifyContent: "center", minHeight: "60%" }}>
    <h2 className={styles["header_title"]}>Here you can donate any amount of cryptocurrency </h2> </div>
    <div style={{ display: "flex", alignItems: "center", justifyContent: "center", minHeight: "60%" }}>
    <h2 className={styles["header_title"]}> to the project of your choice.</h2> </div>
    <br /> <div> <h1 className={styles["header_title"]}> Be kind and help others in need.</h1> </div>

    &nbsp;
    <div className={styles.box_card_prj}> 
    <FirstProject />
    <SecondProject />
    <ThirdProject />
    <FourthProject />
    <FifthProject />
    <SixthProject />
    </div>
    
    </div>
  
    &nbsp;
    &nbsp;
    
   
    </>
    )
}