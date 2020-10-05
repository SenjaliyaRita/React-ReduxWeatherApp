import React,{Component} from 'react'
import { ListGroup, Alert, Row } from 'reactstrap'
import  UserItem  from './UserItem/UserItem.jsx'
import { connect } from 'react-redux'
import { loadUserAction } from '../../../actions/userActions'
class  UserList extends Component{

    componentDidMount() {
        
        this.props.loadUsers()
    }
    render() {
        // console.log('Inside Render')

        const { users } = this.props
            
        if (users.length === 0) {
            return <Alert>No users to show.</Alert>
        }

        return (
            <Row>
                {users.map((user) => <UserItem key={user.id} user={user} />)}
            </Row>
        )
    }
}

    
const mapStateToProps=(state)=>{ //store.getState()
    return{
        users: state.users
    }
}
const mapDispatchToProps= dispatch =>{
    return{
        loadUsers :() => dispatch(loadUserAction())
    }
}
export default connect(mapStateToProps,mapDispatchToProps)(UserList)
