import React from 'react'
import { ListGroupItem,Button, Col } from 'reactstrap'
import { connect } from 'react-redux'
import { Link } from 'react-router-dom'
import { deleteUserAction } from '../../../../actions/userActions'

const UserItem = props =>{
    const { user } = props
    
    const handleDelete = () => {
        props.deleteUser(user.id)
    }
    return (
        <Col md={3}>
         <Link to={'/users/' + user.id}>{user.name}</Link> <Button close onClick={handleDelete} /><br/>
         <img height="200px" src={user.profileurl} alt={user.profileurl} />
        
        </Col>
    )
}

const mapDispatchToProps = dispatch =>{
    return {
        deleteUser: (id) => {
                dispatch(deleteUserAction(id))
        } 
    }
}
export default connect(null,mapDispatchToProps)(UserItem)