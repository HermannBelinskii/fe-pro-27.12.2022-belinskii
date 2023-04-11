import styles from './Navbar.module.scss'

export default function Navbar (props){
    return (
        <div className={styles.navbar}>
            <h2 className={styles.navbar__title}> {props.title}</h2>
            <ul className={styles.navbar__list}>
                <li className={styles.navbar__item}>Main</li>
                <li className={styles.navbar__item}>About</li>
                <li className={styles.navbar__item}>Contacts</li>
                <li className={styles.navbar__item}>Map</li>
            </ul>
        </div>
    )
}