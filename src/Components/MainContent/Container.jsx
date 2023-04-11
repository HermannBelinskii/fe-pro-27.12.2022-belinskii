import styles from './Container.module.scss'
import Main from "./Main/Main";
import Navbar from "./Navbar/Navbar";


export default function MainContent (){
    return (
        <div className={styles.container}>
          <Navbar title='Navigation' />
          <Main title='Main Header' />
        </div>
    )
}