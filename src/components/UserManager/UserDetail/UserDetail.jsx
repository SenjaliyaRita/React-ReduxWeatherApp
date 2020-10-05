import React, { useState, useEffect } from 'react'
import { Alert, Card, CardHeader, CardBody } from 'reactstrap'
import { Link } from 'react-router-dom'

import { getSingleUser } from '../../../services/userService'

const UserDetail = ({ match }) => {
    const [user, setUser] = useState(null)
    const { id } = match.params

    useEffect(() => {
        getSingleUser(id).then(userData => setUser(userData))
    }, [])

    if (!user) {
        return <Alert>Loading...</Alert>
    }

    return (
        <Card>
            <CardHeader>
                <h3>{user.name}</h3>
            </CardHeader>

            <CardBody>
                <p>{user.email}</p>
                <p>
                    <Link to="/users">Back to Users</Link>
                </p>
            </CardBody>
        </Card>
    )
}

// class TaskDetail extends Component {

//     state = {
//         task: null
//     }

//     componentDidMount() {
//         const { id } = this.props.match.params
//         getSingleTask(id).then(task => this.setState({ task }))
//     }

//     render() {

//         const { task } = this.state

//         if (task) {
//             return (
//                 <Card>
//                     <CardHeader>
//                         <h3>{task.title}</h3>
//                     </CardHeader>

//                     <CardBody>
//                         <p>{task.description}</p>
//                         <p>
//                             <Link to="/tasks">Back to Tasks</Link>
//                         </p>
//                     </CardBody>
//                 </Card>
//             )
//         }

//         return <Alert>Loading...</Alert>
//     }

// }

export default UserDetail