import NavFooter from "../navfooter/NavFooter"

import Image from "next/image"

import Link from "next/link"

import styles from "./footer.module.css"


export const Footer =()=>{
    return(
    <div className={styles.container}>
<div  className={styles.container2}>
     <NavFooter titulo={'SoftwareWays'} />
   
     </div>
    
        <div className={styles.container2}>
     <h3 className={styles.titulo}>Nossas Páginas</h3>
        <NavFooter exemplo={"pag1"}/>
        <NavFooter exemplo={"pag2"}/>
        <NavFooter exemplo={"pag3"}/>
        <NavFooter exemplo={"pag4"}/>
        <NavFooter exemplo={"pag5"}/>
     </div>
     <div >
     <Link href={"https://linktr.ee/giuu509?utm_source=linktree_admin_share"} target="blanc">
     <Image className={styles.img} src={"/tree-solid.svg"} alt="icon do link tree" width={30} height={30}/></Link>
     <Link href={"https://github.com/Liviadbelao?tab=repositories"} target="blanc">
     <Image className={styles.img} src={"/github.svg"} alt="icon do git hub" width={30} height={30}/></Link>
     <div className={styles.container3} >
     <NavFooter texto={'Todos os direitos reservados'} />
     </div>
     </div>
  
    </div>
    )
}