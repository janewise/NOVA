import Image from "next/image"
import styles from "./logo.module.css"
import logo from "../../public/Logo2.png"

export default function Logo(){
    return(
        <div className={styles['logo-container']}>
            <div className={styles.logoblur}>
            <Image alt="Logo" className={`${styles.navlogo}`} src={logo} />
            </div>
            <span className={styles.logotitle}>NOVA Metaverse</span>
    </div>
    )
}