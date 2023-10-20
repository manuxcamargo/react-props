import styles from './navlink.module.css'

import Link from "next/link"

const NavLink = ({rota, texto}) => {
    return (
        <div>
            <Link className={styles.textlink} href={rota}>{texto}</Link>
        </div>
    );
}
export default NavLink 