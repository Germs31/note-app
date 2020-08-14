import {Button, Form} from 'semantic-ui-react'

const Register = () => {
    return ( 
        <div className="form-container">
            <h1>Register Page</h1>
            <Form>
                <label>Name:</label>
                <Form.Input type="text" />
                <label>Email:</label>
                <Form.Input type="email"/>
                <label>Password:</label>
                <Form.Input type="password" />
                <Button type="submit">Register</Button>
            </Form>
        </div>
    )
}

export default Register

