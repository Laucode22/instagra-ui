import React, { useState } from 'react';
import { Formik, Form, Field, ErrorMessage } from 'formik';
import { registerSchema } from './register.schema';
import './Register.scss';
import camera from './phone.jpg';
import { useHistory } from 'react-router-dom';
import { UserService } from '../services/user.service';


function Register() {

 const history = useHistory();
 const [showSuccess, setSuccess] = useState(false);

 function submit(values) {
    UserService.create(values)
        .then(res => {
            if (res.status === 201) {
                setSuccess(true);
                setTimeout(() => history.push('/login'), 2000);
                return;
            }
            console.log('failure!!!');
        });
}
    return (
        <div className="container-register">
            <div className="photo-register">
                <img className="camera"src={camera} alt="camera"/>
            </div>
            <div className="register">
                <div className="title text-start"><h2>Register</h2> </div>
            
            <Formik
            initialValues={{username: '', email: '', password:'', agreeToTerms: false}}
            validationSchema={registerSchema}
            onSubmit ={submit}>
            {({ isSubmitting }) => (  
            <Form noValidate>

                <div className='form-group mb-3 text-start'>
                    <label  className="title" htmlFor="username">Username</label>      
                    <Field className='form-control' id="username" name="username"/>       
                    <ErrorMessage name="username" component="div" className="text-danger"/>   
                </div>
                <div className='form-group mb-3 text-start'>
                    <label  className="title" htmlFor="email">Email</label>      
                    <Field className='form-control' id="email" name="email"/>
                    <ErrorMessage  name="email" component="div" className="text-danger"/>              
                </div>
                <div className='form-group mb-3 text-start'>
                    <label htmlF className="title" or="password">Password</label>      
                    <Field type="password" className='form-control' id="password" name="password" />   
                    <ErrorMessage  name="password" component="div" className="text-danger"/>          
                </div>
                <div className='form-group form-check mb-3 text-start'>
                    <Field type="checkbox" className='form-check-input' id="agreeToTerms"  name="agreeToTerms" />    
                    <label className="form-check-label title" htmlFor="agreeToterms">Agree to terms</label> 
                    <ErrorMessage  name="agreeToTerms" component="div" className="text-danger"/>     
                              
                </div>
                <div className='d-grid gap-2 text-start'>
                { showSuccess   
                    ? <div className="alert alert-success Register__success "><b>Success!</b> Wait for transfer...</div>
                    : <button type = "submit"className="btn btn-dark btn btn-primary" disabled={isSubmitting} >Register</button>     
                }       
                </div>
            </Form>
            )}
            </Formik>
            </div>
        </div>
    )
}

export default Register
