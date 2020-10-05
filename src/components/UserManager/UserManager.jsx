import React from 'react'
import { Row,Col } from 'reactstrap'
import UserList from '../UserManager/UserList/UserList.jsx'

 const UserManager = props => {
    return(
        <Row>
            <Col>
                <UserList/>
            </Col>
        </Row>
    )
}
export default UserManager
