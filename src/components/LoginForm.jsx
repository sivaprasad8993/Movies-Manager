import React from 'react';
import Joi from 'joi-browser';
import Form from './common/Form';

class LoginForm extends Form {
    state={
        data:{
            username:"",
            password:""
        },
        errors: {}
    }

    schema = {
        username: Joi.string().required().label('Username'),
        password: Joi.string().required().label('Password')
    }

    doSubmit = () => {
        console.log('submitted');
    }

    render() { 
        return ( 
        <div className='container'>
            <h1>Login</h1>
            <div>
               <form onSubmit={this.handleSubmit}>
                    {this.renderInput('username','Username')}
                    {this.renderInput('password','Password')}                        
                    {this.renderButton('Submit')}
               </form>
            </div>
            </div>
         );
    }
}
 
export default LoginForm;