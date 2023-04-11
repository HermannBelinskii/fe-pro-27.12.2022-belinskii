import styles from './Header.module.scss';

export default function Header (props) {
    return (
        <div className={styles.header}>
            {props.title}
        </div>
    )
}