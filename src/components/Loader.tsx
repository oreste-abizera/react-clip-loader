import React, { ReactElement } from 'react'
import styles from '../styles/Loader.module.css'
export default function Loader(): ReactElement {
  return (
    <div className={styles.loader}>
      <div className={styles.loader__container}></div>
    </div>
  )
}
