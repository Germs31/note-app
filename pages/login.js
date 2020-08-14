import {Form, Button} from 'semantic-ui-react'

const Login = () => {
    return (
        <div className="form-container">
            <h1>Login</h1>
            <Form>
                <Form.Input type="email"/>
                <Form.Input type="password"/>
                <Button type="submit">Login</Button>
            </Form>
        </div>
    )
}

export default Login