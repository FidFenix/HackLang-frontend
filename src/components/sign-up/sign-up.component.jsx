import React, {Component} from 'react';
import Select from 'react-select';
import countryList from 'react-select-country-list';
import FormInput from '../form-input/form-input.component';
import CustomButton from '../custom-button/custom-button.component';
import { authenticationService } from '../../services/user/auth.service';
import { connect } from 'react-redux';
import { setCurrentUser } from './../../redux/user/user.actions';
import './sign-up.styles.scss';


class SignUp extends Component {
    constructor(props){
        super(props);
        this.optionsCountry = countryList().getData()
        this.state = {
            fullName: '',
            email: '',
            countriesList: this.optionsCountry,
            country: '',
            language: '',
            password: '',
            confirmPassword:''
        }
    }

    handleSubmit = async event=> {
        event.preventDefault();
        const {fullName, email, country, password, confirmPassword, language} = this.state;

        if (password !== confirmPassword) {
            alert("password do not match");
            return;
        }
        //authenticationService.signup(fullName, email, country.label, language, password);
        //return {};
        //console.log(fullName, email, country.label, language, password);
        //const { signUpStart } = this.props;
        //signUpStart(email, password, displayName);
        
        //ALL THIS CODE INTO REDUX SAGA
        try {
            const user = await authenticationService.signup(
                fullName, 
                email, 
                country.label, 
                language, 
                password
            );
            
            this.props.setCurrentUser(user.name? user:undefined);

            this.setState({
                fullName: '',
                email: '',
                password: '',
                confirmPassword: ''
            })
        }catch(error) {
            console.log(error);
        }
    };

    handleChange = event => {
        const {name, value} = event.target;
        this.setState({[name]: value});
    }

    changeHandler = (country) => {
        this.setState({ country: country , language: country.value})
    }

    render() {
        const {fullName, email, country,countriesList ,password, confirmPassword} = this.state;
        return(
            <div className='sign-up'>
                <h2 className='title'>I do not have an account</h2>
                <span>Sign up with email and password</span>
                <form className='sign-up-form' onSubmit={this.handleSubmit}>
                    <FormInput
                        type = 'text'
                        name = 'fullName'
                        value = {fullName}
                        onChange={this.handleChange}
                        label='Full Name'
                        required
                    />
                    <Select
                        options = {countriesList}
                        value = {country}
                        placeholder = 'My country'
                        onChange = {this.changeHandler}
                    />
                    <FormInput
                        type = 'email'
                        name = 'email'
                        value = {email}
                        onChange={this.handleChange}
                        label='Email'
                        required
                    />
                    <FormInput
                        type = 'password'
                        name = 'password'
                        value = {password}
                        onChange={this.handleChange}
                        label='password'
                        required
                    />
                    <FormInput
                        type = 'password'
                        name = 'confirmPassword'
                        value = {confirmPassword}
                        onChange={this.handleChange}
                        label='Confirm Password'
                        required
                    />
                    <CustomButton type='submit'>SIGN UP</CustomButton>
                    
                </form>
            </div>
        )
    }
}

const mapDispatchToProps = (dispatch) => ({
    setCurrentUser: (user) => dispatch(setCurrentUser(user))
});

export default connect(null, mapDispatchToProps)(SignUp);