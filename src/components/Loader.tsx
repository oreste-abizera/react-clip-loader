import React, { ReactElement } from 'react'
import styles from '../styles/Loader.module.css'

interface LoaderProps {
  small: boolean
}

export default function Loader({ small }: LoaderProps): ReactElement {
  return (
    <div className={styles.loader}>
      <div
        className={`${styles.loader__container} ${small ? styles.small : ''}`}
      ></div>
    </div>
  )
}
