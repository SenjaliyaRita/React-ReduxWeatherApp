import React,{ Component } from 'react'
import { Form, Row, Col, Button,  FormGroup, Input } from 'reactstrap'
import FormControl from '../Login/FormControl'
import { connect } from 'react-redux'
import { registerUserAction } from '../../actions/userActions'
//import { uploadFile } from '../../services/userService'
import axios from 'axios'
import { baseURL } from '../../config/api'

class Register extends Component {
    constructor(props) {
        super();
        this.handleSubmit = this.handleSubmit.bind(this);
        this.handleFileChange=this.handleFileChange.bind(this)
        this.fileInput = React.createRef();
      }

    state = {
        data:{
            name:'',
            email:'',
            username:'',
            password:'',
            profileurl:'',
            selectedFile:'',
        },
        selectedFile: null,
        errors: {}
    }

    validate = () => {
        const { data } = this.state
        const errors = {}

        if(data.name === ''){ errors.name='Name can not be blank'}
        if(data.email === ''){ errors.email='Email can not be blank'}
        if(data.username === ''){ errors.username='User Name can not be blank'}
        if(data.password === ''){ errors.password='Password can not be blank'}
        
        return errors
    }

    handleSubmit = (e) => {
        e.preventDefault()
        const { data } = this.state
        const errors = this.validate()
        console.log(this.state,'$submit data$')
        if(Object.keys(errors).length===0){
            console.log('success')
            this.props.registerUser(data)
        }
        else {
            this.setState({
                errors
            })
        }
    }

    handleChange = (e) => {
        this.setState({
            data:{
                ...this.state.data,
                [e.target.id]:e.target.value
            },
            errors:{
                ...this.state.errors,
                [e.target.id]:''
            }
        })
    }

    handleFileChange = (e) => {
        let file = e.target.files[0]
        this.setState({
            data:{
             ...this.state.data,
              selectedFile:file
            }
          })
          console.log(this.state,'$$$$$$$$$$$')
        const data=new FormData()
        data.append('image',e.target.files[0])
        
         //const res = uploadFile(data)
         axios.post(baseURL + '/upload' , data).then(res => {
            //console.log(res.data.profileurl)
              this.setState({
                  data:{
                   ...this.state.data,
                    profileurl:res.data.profileurl
                  }
                })
        })
        
    }
    render() {
        const { data , errors } = this.state

        return (
            <Form onSubmit={this.handleSubmit}>
                <Row>
                    <Col md={6}>
                        <FormControl 
                            label="Name"
                            type="text"
                            error={errors.name}
                            handleChange={this.handleChange}
                            value={data.name}
                        />
                        <FormControl 
                            label="Email"
                            type="text"
                            error={errors.email}
                            handleChange={this.handleChange}
                            value={data.email}
                        />
                        <FormControl 
                            label="Username"
                            type="text"
                            error={errors.username}
                            handleChange={this.handleChange}
                            value={data.username}
                        />
                        <FormControl 
                            label="Password"
                            type="text"
                            error={errors.password}
                            handleChange={this.handleChange}
                            value={data.password}
                        />
                         {/* <FormControl 
                            label=""
                            type="file"
                            error={errors.selectedFile}
                            handleChange={this.handleFileChange}
                            value=""
                            
                        /> */}
                        <FormGroup>
                            <Input type="file" ref={this.fileInput} onChange={this.handleFileChange} />
                        </FormGroup>
                        { data.profileurl !=''  &&
                        <FormGroup>
                            <img src={data.profileurl} alt="No Image to Show " height="200px"/><br/>
                        </FormGroup>}
                         
                         <br/>
                        <Button color="primary"> Save </Button>
                    </Col>
                </Row>
            </Form>
        )
    }
}

const mapDispatachToProps = dispatch => {
    return {
        registerUser : (data) => {
            console.log(data)
             dispatch(registerUserAction(data))
        }

    }
}
export default connect(null,mapDispatachToProps)(Register)