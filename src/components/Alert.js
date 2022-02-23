import React from 'react'


export default function Alert(props) {


  const capitalize =(word)=>{
    const lower=word.toLowerCase();
    return lower.charAt(0).toUpperCase() + lower.slice(1);
  }

    return(

        //if alert value is null it will not run further
        <div style={{height: '50px'}}>

       {props.alert && <div className={`alert alert-${props.alert.type}`} role="alert">
       <strong>{capitalize(props.alert.type)}</strong>: { props.alert.msg} 
      </div>}


        </div>
    )
}

