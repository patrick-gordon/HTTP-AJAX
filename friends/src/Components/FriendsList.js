import React from 'react'
import Friend from './friend';




export default function FriendsList(props) {
    return (
        <div>
            {props.friends.map((friend) => <Friend friend={friend} key={friend.id} />)}
        </div>
    )
}
