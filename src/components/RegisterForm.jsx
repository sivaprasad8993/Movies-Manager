import React from 'react';
import Form from './common/Form';
import Joi from 'joi-browser';

class RegisterForm extends Form {
    state = { 
        data: {
            username: '',
            password: '',
            name: ''
        },
        errors: {}
     }

     schema = {
         username: Joi.string().email({minDomainAtoms: 2}).required().label('Username'),
         password: Joi.string().min(5).required().label('Password'),
         name: Joi.string().required().label('Name')
     }



     doSubmit = () => {
         console.log('Submitted');
     }



    render() { 
        return ( 
            <div className='container'>
                <form onSubmit = {this.handleSubmit}>
                    {this.renderInput('username','Username')}
                    {this.renderInput('password','Password','password')}
                    {this.renderInput('name','Name')}
                    {this.renderButton('Submit')}
                </form>
            </div>
         );
    }
}
 
export default RegisterForm;