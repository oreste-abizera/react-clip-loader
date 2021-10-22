import React, { ReactElement } from 'react'
import styles from '../styles/Loader.module.css'

interface LoaderProps {
  small: boolean
  color: string
  secondaryColor: string
}

export default function Loader({
  small,
  color = '#2d4059',
  secondaryColor = '#e5e5e5'
}: LoaderProps): ReactElement {
  return (
    <div className={styles.loader}>
      <div
        className={`${styles.loader__container} ${small ? styles.small : ''}`}
        style={{ borderColor: secondaryColor, borderTopColor: color }}
      ></div>
    </div>
  )
}
