import React, { Component } from 'react'

export default class FriendForum extends Component {
    state = {
        friend: {
            name: '',
            age: '',
            email: '',
            id: 0
        },
        active: false
    }


    changeHandler = e => {
        e.persist();
        this.setState(prevState => ({ friend: {...prevState.friend, [e.target.name]: e.target.value} }))
    }
   
    submitHandler = () => {
     if(this.state.active) {
        this.props.updateFriend( this.state.friend)
     } else {
        this.props.addFriend( this.state.friend)
     }
 }

    render() {
        return (
            <div>
                <form onSubmit={this.submitHandler}>

                    <input 
                        type='text'
                        placeholder='Name'
                        name='name'
                        value={this.state.friend.name}
                        onChange={this.changeHandler}
                        required
                    
                    />
                     <input 
                        type='number'
                        placeholder='Age'
                        name='age'
                        value={this.state.friend.age}
                        onChange={this.changeHandler}
                        required
                    
                    />
                     <input 
                        type='email'
                        placeholder='Email'
                        name='email'
                        value={this.state.friend.email}
                        onChange={this.changeHandler}
                        required
                    
                    />
                    
                    <button>{`${this.state.active ? 'Update' : 'Add Friend'}`}</button>

                </form>
            </div>
        )
    }
}
// if this.state.active is true, update or else add friend