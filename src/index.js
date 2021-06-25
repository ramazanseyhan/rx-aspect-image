import React from 'react'
import styles from './styles.module.css'

export const AspectImage = ({ aspectRatio = '4/3', src, alt = 'alt-tag' }) => {
  const [widthRatio, heightRatio] = aspectRatio.split('/')
  return (
    <div
      className={styles.container}
      style={{ paddingTop: `${(100 / widthRatio) * heightRatio}%` }}
    >
      <div className={styles.paddingArea} />
      <img className={styles.image} src={src} alt={alt} />
    </div>
  )
}
