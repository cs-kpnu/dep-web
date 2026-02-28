import styles from "./style.module.css";

export default async function SearchFilter() { 
    return (
        <>
        <div className={styles.searchContainer}>
          <span className={styles.searchIcon}>🔍</span>
          <input type="text" placeholder="Пошук проєктів..." className={styles.searchInput} />
        </div>
        
        <div className={styles.selectWrapper}>
          <select className={styles.filterSelect}>
            <option>Фільтри</option>
            <option>За категорією</option>
          </select>
        </div>
        </>

    )
}   