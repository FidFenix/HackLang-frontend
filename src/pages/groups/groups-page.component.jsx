import React, { Component } from 'react';
import { Route } from 'react-router-dom';

import './groups-page.styles.scss';

import DirectoryGroupComp from '../../components/directory-group/directory-group.component';
import { connect } from 'react-redux';
import { createStructuredSelector} from 'reselect';
import { selectCurrentUser } from './../../redux/user/user.selectors';
import { groupService } from './../../services/group/group.service';

import './groups-page.styles.scss';

class GroupPageComp extends Component {

   constructor(props) {
      super(props);
      this.state = {
         group_list:[]
      }
   }
   
   componentDidMount(){

      this.callGroups();

   }

   callGroups = async ()=> {
      try{
         const group_list = await groupService.getGroups(this.props.currentUser.email);
         this.setState({group_list});
      }catch(error) {
         console.log(error);
      }
   }

   render() {
      const { match } = this.props;
      return(
            <div className = 'group-page-container'>
               <h1>My Groups Learning</h1>
               {
               0 < this.state.group_list.length?
               <Route
                  exact path = {`${match.path}`}
                  render = {() => <DirectoryGroupComp group_list = {this.state.group_list} {...this.props}/>}
               >              
               </Route>
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

export default connect(mapStateToProps, null)(GroupPageComp);

