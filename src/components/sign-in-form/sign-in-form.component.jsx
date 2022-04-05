import { useState } from 'react';
import { signInAuthUserWithEmailAndPassword, createUserDocumentFromAuth,signInWithGooglePopup } from '../../utils/firebase/firebase.utils';
import FormInput from '../form-input/form-input.component';
import Button, { BUTTON_TYPE_CLASSES }from '../button/button.component';
import { SignInContainer, ButtonsContainer} from'./sign-in-form.styles.jsx';


const SignInForm = () => {
    const defaultFormFields = {
        email : '',
        password : '',
    }
    
    const [formFields, setFormFields] = useState(defaultFormFields);
    const { email, password } = formFields;
    
  

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
           const { user } = await signInAuthUserWithEmailAndPassword(email, password);
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
        await signInWithGooglePopup();
        
    };

    return(
        <SignInContainer>
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
                
                <ButtonsContainer>

                     <Button  type = "submit">SIGN IN</Button>
                     <Button  buttonType = { BUTTON_TYPE_CLASSES.google } onClick = { signInWithGoogle }>GOOGLE SIGN IN</Button>
                
                </ButtonsContainer>

            </form>
            </SignInContainer>
    );
};
export default SignInForm;