import styles from "../styles/footer.module.css";

export default function Footer() {
  return (
    <div className={styles.footer}>
      <div className={styles.icons_container}>
        <div>
          <a href="https://www.carbonsoko.org.com/" target={"_blank"}>
            Copyright © carbonsoko 2023
          </a>
        </div>
      </div>
    </div>
  );
}
