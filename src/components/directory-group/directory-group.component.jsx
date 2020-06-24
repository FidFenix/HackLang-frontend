import React, { Component } from 'react';

import './directory-group.styles.scss';
import DirectoryItemComp from '../directory-item/directory-item.component';
import FormInput from '../form-input/form-input.component';
import Select from 'react-select';

import { connect } from 'react-redux';
import { createStructuredSelector} from 'reselect';
import { selectCurrentUser } from './../../redux/user/user.selectors';

import { groupService } from './../../services/group/group.service';

const languageList = [
   { value: 'EN', label: 'English' },
   { value: 'ES', label: 'Spanish' },
   { value: 'DE', label: 'German' }
 ]
class DirectoryGroupComp extends Component {

   constructor(props) {
      super(props);
      this.state = {
         group_list:this.props.group_list,
         isCreateChecked: false,
         group_name:'',
         group_language:''
      }
   }

   handleSubmit = async event=> {
      event.preventDefault(); // to prevent submitting

      const { group_name, group_language} = this.state;
      const { email } = this.props.currentUser;

      try {
         console.log(group_language);
         const group_list = await groupService.createGroup(group_name, email,group_language.value, group_language.label);

         this.setState({isCreateChecked: !this.state.isCreateChecked, group_list});
      }catch(error) {
          console.log(error);
      }

  }

  handleChange = event => {
      const {value, name} = event.target;

      this.setState({[name]: value})  //like a mirror, dinamically
  } 
   showForm = ()=> {
      this.setState({isCreateChecked: !this.state.isCreateChecked});
   }
   changeHandler = (group_language) => {
      this.setState({group_language})
  }
   render() {
      const { group_list, isCreateChecked , group_language, group_name} = this.state;
      return(
         <div className='directory-container'>
            <div className = 'create-group-button'>
            {
               0 < group_list.length?
               
               group_list.map(({group_id, ...otherProps}) => (
                  <DirectoryItemComp key = {group_id} {...otherProps} {...this.props}/>
               ))
               :
               null
            }
            </div>
            {
               !isCreateChecked?
               <div className = 'create-group-button'>
               <button className = 'create-group' onClick = {this.showForm}>Create Group</button>
               </div>
               :
               null
            }

            {
               isCreateChecked?
               <div className='create-new-group'>
               <h2 className = 'title'>Group Details</h2>
               <span>Please choose the language</span>

                  <form onSubmit={this.handleSubmit}>
                   <FormInput
                       name='group_name' 
                       type='group_name' 
                       value={group_name}
                       handleChange = {this.handleChange}
                       label='Group Name'
                       required
                   ></FormInput>
                     <Select
                        options = {languageList}
                        value = {group_language}
                        placeholder = 'Choose Language'
                        onChange = {this.changeHandler}
                    />
                       <button className ='button-create-group' >Create Group</button>
                  </form>

                  <button className ='button-create-group' onClick = {this.showForm} >Cancel</button>
               </div>
               :
               null
            }
         </div>
      )
   }
}

const mapStateToProps = createStructuredSelector({
   currentUser: selectCurrentUser
});

export default connect(mapStateToProps, null)(DirectoryGroupComp);