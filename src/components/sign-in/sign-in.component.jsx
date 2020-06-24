
import React, { Component } from 'react';

import './sign-in.styles.scss';
import FormInput from '../form-input/form-input.component';
import CustomButton from '../custom-button/custom-button.component';
import { connect } from 'react-redux';
import { setCurrentUser } from './../../redux/user/user.actions';

import { authenticationService } from '../../services/user/auth.service';

class SignIn extends Component {
    constructor(props) {
        super(props);

        this.state = {
            email:'',
            password:''
        }
    }

    handleSubmit = async event=> {
        event.preventDefault(); // to prevent submitting

        const { setCurrentUser } = this.props;
        const { email, password } = this.state;

        try {
            const user = await authenticationService.login(email, password);
            setCurrentUser(user.name? user:undefined);
        }catch(error) {
            console.log(error);
        }

    }

    handleChange = event => {
        const {value, name} = event.target;

        this.setState({[name]: value})  //like a mirror, dinamically
    } 
    render() {
        return(
            <div className='sign-in'>
                <h2 className = 'title'>I already have an Account</h2>
                <span>Sign in with your email and password</span>

                <form onSubmit={this.handleSubmit}>
                    <FormInput
                        name='email' 
                        type='email' 
                        value={this.state.email}
                        handleChange = {this.handleChange}
                        label='email'
                        required
                    ></FormInput>
                    <FormInput 
                        name='password' 
                        type='password' 
                        value={this.state.password} 
                        label='password'
                        required
                        handleChange = {this.handleChange}
                    ></FormInput>
                    <div className='buttons'>
                        <CustomButton type="submit">Sign In</CustomButton>
                    </div>
                </form>
            </div>
        )
    }
}

const mapDispatchToProps = (dispatch) => ({
    setCurrentUser: (user) => dispatch(setCurrentUser(user))
});

export default connect(null, mapDispatchToProps)(SignIn);