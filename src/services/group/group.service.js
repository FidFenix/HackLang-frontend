
import config from '../config';
import axios from 'axios';

export const groupService = {
    createGroup,
    getGroups,
};

function createGroup(group_name, group_admin, group_lan, group_link) {
    return axios.post(`${config.awsApiUrl}/groupuser/`, {group_name, group_admin, group_lan, group_link},{'Content-Type': 'application/json' }).then(group => {
       console.log(group);
        return group.data;
    }).catch(error => {
        if( "response" in error ){
            if( error.response !== undefined ){
                if('status' in error.response ) { alert(error.response.data.message);}
                else {console.log( error.response );}
            }else {
                console.log( error );
            }
        }else{
            console.log( error );
        }
    });
}

function getGroups( email ) {

    return axios.get(`${config.awsApiUrl}/groupuser/${email}`, { params: { email } } ).then(groups => {
       console.log(groups)
        return groups.data;
    }).catch(error => {
        console.log('error');
        if( "response" in error ){
            if( error.response !== undefined ){
                if('status' in error.response ) { alert(error.response.data.message);}
                else {console.log( error.response );}
            }else {
                console.log( error );
            }
        }else{
            console.log( error );
        }
    });
}