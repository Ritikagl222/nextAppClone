import React from 'react'
import Link from 'next/link'
import style from '../components.module.css'



const CommonLink = ({ linkText,href,onMouseEnter=()=>{},onMouseLeave=()=>{}}:any) => {
  return (
    <div onMouseEnter={onMouseEnter} onMouseLeave={onMouseLeave} className={style.link}>

  <Link className="text-color-grey font-normal text-xs" href={href}>{linkText}</Link>
  <div className={style.linkBar}></div>
    </div>
  )
}

export default CommonLink