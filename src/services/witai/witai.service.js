import config from '../config';
import axios from 'axios';
import FormData from 'form-data';

/*function login(username, password) {
    const requestOptions = {
        headers: { Authorization: "Basic " + btoa(username + ":" + password) }
    };
    return axios.get(`${config.awsApiUrl}/auth/login/`, requestOptions).then(user => {
        return user;
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
}*/

function speechApi(recordBlob, name) {

    const data = new FormData();
    data.append('audio', recordBlob, name);

    return axios.post(`${config.AWSWitaiUrl}/witai`, data, {
        'accept': 'application/json',
        'Accept-Language': 'en-US,en;q=0.8',
        'Content-Type': `multipart/form-data; boundary=${data._boundary}`
    }).then(ans => {
        return ans.data;
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


export const witaiService = {
   speechApi,
};