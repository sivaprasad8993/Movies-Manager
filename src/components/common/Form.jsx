import React, { Component } from 'react';
import Joi from 'joi-browser';
import Input from './Input';

class Form extends Component {
    state = { 
        data: {},
        errors: {}
     }

     validate = () => {
        const errors = {};

        const {data} = this.state;

        const properties = {abortEarly:false};

        const {error} = Joi.validate(data,this.schema,properties);

        if(!error) return null;

        for(let item of error.details)
            errors[item.path[0]] = item.message;

        return errors;
        
    }

    handleSubmit = e => {
        e.preventDefault();

        const errors = this.validate();
        this.setState({errors:errors || {}});

        if(errors) return;

        //Server side work
        this.doSubmit();
    }

    validateProperty = ({name,value}) => {
        const obj = {[name]:value};
        const schema = {[name]:this.schema[name]};

        const {error} = Joi.validate(obj,schema);

        return error ? error.details[0].message : null;
    }

    handleChange = ({currentTarget:input}) => {
        const errors = {};
        const errorMessage = this.validateProperty(input);
        if(errorMessage) errors[input.name] = errorMessage;
        else delete errors[input.name];
        const data = {...this.state.data};
        this.setState({data:{...data,[input.name]:input.value},errors});
    }


    renderButton = (label) => {
        return(
            <button className='btn btn-primary' disabled={this.validate()}>{label}</button>
        )
    }

    renderInput = (name,label,type='text') => {
        const {data,errors} = this.state;
        return(
            <Input
                type={type}
                name={name}
                value={data[name]}
                label = {label}
                onChange = {this.handleChange}
                error = {errors[name]}
            />         
        )
    }
}
 
export default Form;