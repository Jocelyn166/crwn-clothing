import './button.styles.scss';

const Button_TYPE_CLASSES = {
    google : 'google-sign-in',
    inverted: 'inverted'
};

const Button = ({children, buttonType, ...otherProps}) => {
    return (
        <button className = {`button-container ${Button_TYPE_CLASSES[buttonType]}`} {...otherProps}>
        {children}</button>

    );
};
export default Button;