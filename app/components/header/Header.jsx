import Image from 'next/image';
import styles from './header.module.css';
import NavLink from '../navlink/NavLink'
import { AiFillAliwangwang } from "react-icons/ai";

export const Header = () => {
    return (
        <div className={styles.header}>
            <div className={styles.imageLogo}>
                <Image className={styles.logo} src={'/logo2.png'} width={50} height={50} />
            </div>
            <div className={styles.links}>

                <div className={styles.linksContainer}>
                    <div className={styles.iconContainer}>
                        <AiFillAliwangwang className={styles.iconLinks} />
                    </div>
                    <NavLink className={styles.linksNavPages} rota={'/'} texto={'page1'} />
                </div>

                <div className={styles.linksContainer}>
                    <div className={styles.iconContainer}>
                        <AiFillAliwangwang className={styles.iconLinks} />
                    </div>
                    <NavLink className={styles.linksNavPages} rota={'/'} texto={'page2'} />
                </div>

                <div className={styles.linksContainer}>
                    <div className={styles.iconContainer}>
                        <AiFillAliwangwang className={styles.iconLinks} />
                    </div>
                    <NavLink className={styles.linksNavPages} rota={'/'} texto={'page3'} />
                </div>

                <div className={styles.linksContainer}>
                    <div className={styles.iconContainer}>
                        <AiFillAliwangwang className={styles.iconLinks} />
                    </div>
                    <NavLink className={styles.linksNavPages} rota={'/'} texto={'page4'} />
                </div>

                <div className={styles.linksContainer}>
                    <div className={styles.iconContainer}>
                        <AiFillAliwangwang className={styles.iconLinks} />
                    </div>
                    <NavLink className={styles.linksNavPages} rota={'/'} texto={'page5'} />
                </div>
                
            </div>
        </div>
    );
}