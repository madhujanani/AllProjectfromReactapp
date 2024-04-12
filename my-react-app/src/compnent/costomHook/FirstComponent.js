import React from 'react'
import useCounterHook from './useCounterHook'
import styles from './Customstyle.module.css'
export default function FirstComponent(props) {
    const clickedbtnCounter=useCounterHook(0,"FirstComponent")
  return (
    <div className={styles.bigblue}>

        <h1 >This is First Component where i used custom css</h1>
        <h2>Costom css should have .module.css extention,and should be given in the same folder where the files are going to use.</h2>
        <button onClick={clickedbtnCounter}>click here</button>
    </div>
  )
}
