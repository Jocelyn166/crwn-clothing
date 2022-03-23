import { useState } from 'react';
import { createAuthUserWithEmailAndPassword, createUserDocumentFromAuth } from '../../utils/firebase/firebase.utils';
import FormInput from '../form-input/form-input.component';
import Button from '../button/button.component';
import './sign-up-form.styles.scss';

const SignUpForm = () => {
    const defaultFormFields = {
        displayName : '',
        email : '',
        password : '',
        confirmPassword : ''
    }
    
    const [formFields, setFormFields] = useState(defaultFormFields);
    const { displayName, email, password, confirmPassword } = formFields;




    const handleChange = (event) => {
      const { name, value } = event.target;
      setFormFields({...formFields, [name] : value });

    }

    const resetFormFields = () => {
        setFormFields(defaultFormFields);
    }

    const handleSubmit = async (event) =>{
        event.preventDefault();

     if(password !== confirmPassword){
         alert('The passwords do not match');
         return;
     } try{
         const { user } = await createAuthUserWithEmailAndPassword(email, password);
         await createUserDocumentFromAuth(user,{ displayName });
         resetFormFields();

     }catch(err){
         if(err.code === 'auth/email-already-in-use' ){
             alert('Cannot create user, email already in use');
         }else{
            console.log(err);
         }
         

     }
     resetFormFields();
       
    }

    return(
        <div className = 'sign-up-container'>
            <h2>I do not have an account</h2>
            <span>Sign up with your email and password</span>
            <form onSubmit = {handleSubmit}>
                
                <FormInput 
                required
                label = "Display Name" 
                onChange = {handleChange} 
                type = "text"  
                name = "displayName" 
                value = {displayName}
                />
                

                <FormInput 
                required
                label = "Email" 
                onChange = {handleChange} 
                type = "email"  
                name = "email" 
                value = {email}
                />
                

                
                <FormInput 
                required
                label = "Password" 
                onChange = {handleChange} 
                type = "password"  
                name = "password" 
                value = {password}
                />
                

                <FormInput 
                required
                label = "Confirm Password" 
                onChange = {handleChange} 
                type = "password"  
                name = "confirmPassword" 
                value = {confirmPassword}
                />
                

                <Button  type = "submit">SIGN UP</Button>

            </form>
        </div>
    );
};
export default SignUpForm;