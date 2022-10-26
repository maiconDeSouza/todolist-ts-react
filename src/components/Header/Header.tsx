import Logo from '../../assets/images/Logo.svg'
import styles from './Header.module.css'

export function Header(){

    return(
        <header className={styles.containerHeader}>
            <img src={Logo} alt="Logo" />
        </header>
    )
}