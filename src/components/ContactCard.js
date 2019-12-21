import React from 'react'

function ContactCard(props){
    return (
        <div className="contact-card">
            <img src={props.imgUrl} alt="placeholder image" />
            <h3>Name: {props.name}</h3>
            <p>Mobile: {props.mobile}</p>
            <p>Email: {props.email}</p>
        </div>
    )
}
export default ContactCard
