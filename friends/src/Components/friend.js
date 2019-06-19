import React from 'react'

export default function friend(props) {
    return (
        <div>  
            <h4>{props.friend.name}</h4>
            <p>{props.friend.email}</p>
            <p>{props.friend.age}</p>
            <button>Update</button>
            <button>Delete</button>
            
        </div>
    )
}
