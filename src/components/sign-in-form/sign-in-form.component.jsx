import { useState } from 'react';
import { signInAuthUserWithEmailAndPassword, createUserDocumentFromAuth,signInWithGooglePopup } from '../../utils/firebase/firebase.utils';
import FormInput from '../form-input/form-input.component';
import Button from '../button/button.component';
import './sign-in-form.styles.scss';


const SignInForm = () => {
    const defaultFormFields = {
        email : '',
        password : '',
    }
    
    const [formFields, setFormFields] = useState(defaultFormFields);
    const { email, password } = formFields;
    console.log(formFields);

    const handleChange = (event) => {
      const { name, value } = event.target;
      setFormFields({...formFields, [name] : value });

    }

    const resetFormFields = () => {
        setFormFields(defaultFormFields);
    }

    const handleSubmit = async (event) =>{
        event.preventDefault();

        try{
           const response = await signInAuthUserWithEmailAndPassword(email, password);
           console.log(response);
           resetFormFields();
        }catch(err){
            if(err.code === 'auth/user-not-found'){
                alert('Sorry, you do not have an account yet, please sign up first :)');
            } else if(err.code === 'auth/wrong-password'){
                alert('Sorry, please enter the correct password :)')
            } else{
                console.log(err);
            }
           
        }

    };

    const signInWithGoogle = async () => {
        const { user } = await signInWithGooglePopup();
         await createUserDocumentFromAuth(user);

    };

    return(
        <div className = 'sign-in-container'>
            <h2>I already have an account</h2>
            <span>Sign in with your email and password</span>
            <form onSubmit = {handleSubmit}>
                
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
                
                <div className = 'buttons-container'>

                     <Button  type = "submit">SIGN IN</Button>
                     <Button type = 'button' buttonType = 'google' onClick = { signInWithGoogle }>GOOGLE SIGN IN</Button>
                
                </div>

            </form>
        </div>
    );
};
export default SignInForm;