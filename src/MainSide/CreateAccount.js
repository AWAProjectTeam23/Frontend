import React from 'react'
import styles from './CreateAccount.module.css';


export default function CreateAccount(props) {

        
    return (
        <div>
            
        <div className= { styles.container }>

        <span className={ styles.header }>{ props.topic }Create account</span> { props.body }
        <div>
<span className={ styles.much}>{ props.topic }Account name</span> { props.body }
<div>

<span className={ styles.much}>{ props.topic } Password </span> { props.body }
</div>
</div>
        </div>
        </div>
    )
}

