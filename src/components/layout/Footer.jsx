import {FaFacebook, FaInstagram, FaLinkedin} from 'react-icons/fa'

import styles from './Footer.module.css'

function Footer(){
    return(
        <footer className={styles.footer}>
            <ul className={styles.social_list}>
                <li>
                    <FaFacebook size={30}/>
                </li>
                <li>
                    <FaInstagram size={30}/>
                </li>
                <li>
                    <FaLinkedin size={30}/>
                </li>
            </ul>
            <p className={styles.copy_right}>
                <span>Gestão Projetos</span> &copy; 2023
            </p>
        </footer>
    )
}

export default Footer