import React, { Component } from 'react'
import { connect } from 'dva'


//import styles from './Users.css'
import UsersComponent from '../components/Users/Users'

class Users extends Component {
    render() {
        return (
            <div>
                 <UsersComponent />
            </div>
        )
    }
}

Users.propsTypes = {}

export default connect()(Users)