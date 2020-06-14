import React, { Component } from 'react';

import './group.styles.scss';
import FriendItem from '../friend-item/friend-item.component';
import VocabListItem from '../vocab-list-item/vocab-list-item.component';

class GroupComp extends Component {

   constructor(props) {
      super(props);
      this.state = {
         friends_list: [{
            user_id: "1",
            name: "Amélie",
            country: "France",
         },
         {
            user_id: "2",
            name: "Felicia",
            country: "Germany",       
         },
         {
            user_id: "3",
            name: "Pablo",
            country: "Peru",

         },
         {
            user_id: "4",
            name: "Felicia",
            country: "Germany",       
         },
         {
            user_id: "5",
            name: "Pablo",
            country: "Peru",

         },
         {
            user_id: "6",
            name: "Felicia",
            country: "Germany",       
         },
         {
            user_id: "7",
            name: "Pablo",
            country: "Peru",

         },
         {
            user_id: "8",
            name: "Felicia",
            country: "Germany",       
         },
         {
            user_id: "9",
            name: "Pablo",
            country: "Peru",

         },
         {
            user_id: "10",
            name: "Pablo",
            country: "Peru",

         }],

         vocab_list: [{
            vocab_list_id: "1",
            vocab_title: "Fruits",
            vocab_items: [{
               vocab_name: "Apple",
               vocab_translation: "Apfel"
            },
            {
               vocab_name: "Potato",
               vocab_translation: "Cartofel"    
            }]
         },{
            vocab_list_id: "2",
            vocab_title: "Family",
            vocab_items: [{
               vocab_name: "Father",
               vocab_translation: "Vater"
            },
            {
               vocab_name: "Mother",
               vocab_translation: "Mutter"    
            }]
         },{
            vocab_list_id: "3",
            vocab_title: "Fruits",
            vocab_items: [{
               vocab_name: "Apple",
               vocab_translation: "Apfel"
            },
            {
               vocab_name: "Potato",
               vocab_translation: "Cartofel"    
            }]
         },{
            vocab_list_id: "4",
            vocab_title: "Family",
            vocab_items: [{
               vocab_name: "Father",
               vocab_translation: "Vater"
            },
            {
               vocab_name: "Mother",
               vocab_translation: "Mutter"    
            }]
         },{
            vocab_list_id: "5",
            vocab_title: "Fruits",
            vocab_items: [{
               vocab_name: "Apple",
               vocab_translation: "Apfel"
            },
            {
               vocab_name: "Potato",
               vocab_translation: "Cartofel"    
            }]
         },{
            vocab_list_id: "6",
            vocab_title: "Family",
            vocab_items: [{
               vocab_name: "Father",
               vocab_translation: "Vater"
            },
            {
               vocab_name: "Mother",
               vocab_translation: "Mutter"    
            }]
         },
         {
            vocab_list_id: "7",
            vocab_title: "Family",
            vocab_items: [{
               vocab_name: "Father",
               vocab_translation: "Vater"
            },
            {
               vocab_name: "Mother",
               vocab_translation: "Mutter"    
            }]
         },
         {
            vocab_list_id: "8",
            vocab_title: "Family",
            vocab_items: [{
               vocab_name: "Father",
               vocab_translation: "Vater"
            },
            {
               vocab_name: "Mother",
               vocab_translation: "Mutter"    
            }]
         },
         {
            vocab_list_id: "9",
            vocab_title: "Family",
            vocab_items: [{
               vocab_name: "Father",
               vocab_translation: "Vater"
            },
            {
               vocab_name: "Mother",
               vocab_translation: "Mutter"    
            }]
         },
         /*{
            vocab_list_id: "10",
            vocab_title: "Family",
            vocab_items: [{
               vocab_name: "Father",
               vocab_translation: "Vater"
            },
            {
               vocab_name: "Mother",
               vocab_translation: "Mutter"    
            }]
         },
         {
            vocab_list_id: "11",
            vocab_title: "Fruits",
            vocab_items: [{
               vocab_name: "Apple",
               vocab_translation: "Apfel"
            },
            {
               vocab_name: "Potato",
               vocab_translation: "Cartofel"    
            }]
         },{
            vocab_list_id: "12",
            vocab_title: "Family",
            vocab_items: [{
               vocab_name: "Father",
               vocab_translation: "Vater"
            },
            {
               vocab_name: "Mother",
               vocab_translation: "Mutter"    
            }]
         },{
            vocab_list_id: "13",
            vocab_title: "Fruits",
            vocab_items: [{
               vocab_name: "Apple",
               vocab_translation: "Apfel"
            },
            {
               vocab_name: "Potato",
               vocab_translation: "Cartofel"    
            }]
         },{
            vocab_list_id: "14",
            vocab_title: "Family",
            vocab_items: [{
               vocab_name: "Father",
               vocab_translation: "Vater"
            },
            {
               vocab_name: "Mother",
               vocab_translation: "Mutter"    
            }]
         },{
            vocab_list_id: "15",
            vocab_title: "Fruits",
            vocab_items: [{
               vocab_name: "Apple",
               vocab_translation: "Apfel"
            },
            {
               vocab_name: "Potato",
               vocab_translation: "Cartofel"    
            }]
         },{
            vocab_list_id: "16",
            vocab_title: "Family",
            vocab_items: [{
               vocab_name: "Father",
               vocab_translation: "Vater"
            },
            {
               vocab_name: "Mother",
               vocab_translation: "Mutter"    
            }]
         },
         {
            vocab_list_id: "17",
            vocab_title: "Family",
            vocab_items: [{
               vocab_name: "Father",
               vocab_translation: "Vater"
            },
            {
               vocab_name: "Mother",
               vocab_translation: "Mutter"    
            }]
         },
         {
            vocab_list_id: "18",
            vocab_title: "Family",
            vocab_items: [{
               vocab_name: "Father",
               vocab_translation: "Vater"
            },
            {
               vocab_name: "Mother",
               vocab_translation: "Mutter"    
            }]
         },
         {
            vocab_list_id: "19",
            vocab_title: "Family",
            vocab_items: [{
               vocab_name: "Father",
               vocab_translation: "Vater"
            },
            {
               vocab_name: "Mother",
               vocab_translation: "Mutter"    
            }]
         },
         {
            vocab_list_id: "20",
            vocab_title: "Family",
            vocab_items: [{
               vocab_name: "Father",
               vocab_translation: "Vater"
            },
            {
               vocab_name: "Mother",
               vocab_translation: "Mutter"    
            }]
         },
         {
            vocab_list_id: "21",
            vocab_title: "Fruits",
            vocab_items: [{
               vocab_name: "Apple",
               vocab_translation: "Apfel"
            },
            {
               vocab_name: "Potato",
               vocab_translation: "Cartofel"    
            }]
         },{
            vocab_list_id: "22",
            vocab_title: "Family",
            vocab_items: [{
               vocab_name: "Father",
               vocab_translation: "Vater"
            },
            {
               vocab_name: "Mother",
               vocab_translation: "Mutter"    
            }]
         },{
            vocab_list_id: "23",
            vocab_title: "Fruits",
            vocab_items: [{
               vocab_name: "Apple",
               vocab_translation: "Apfel"
            },
            {
               vocab_name: "Potato",
               vocab_translation: "Cartofel"    
            }]
         },{
            vocab_list_id: "24",
            vocab_title: "Family",
            vocab_items: [{
               vocab_name: "Father",
               vocab_translation: "Vater"
            },
            {
               vocab_name: "Mother",
               vocab_translation: "Mutter"    
            }]
         },{
            vocab_list_id: "25",
            vocab_title: "Fruits",
            vocab_items: [{
               vocab_name: "Apple",
               vocab_translation: "Apfel"
            },
            {
               vocab_name: "Potato",
               vocab_translation: "Cartofel"    
            }]
         },{
            vocab_list_id: "26",
            vocab_title: "Family",
            vocab_items: [{
               vocab_name: "Father",
               vocab_translation: "Vater"
            },
            {
               vocab_name: "Mother",
               vocab_translation: "Mutter"    
            }]
         },
         {
            vocab_list_id: "27",
            vocab_title: "Family",
            vocab_items: [{
               vocab_name: "Father",
               vocab_translation: "Vater"
            },
            {
               vocab_name: "Mother",
               vocab_translation: "Mutter"    
            }]
         },
         {
            vocab_list_id: "28",
            vocab_title: "Family",
            vocab_items: [{
               vocab_name: "Father",
               vocab_translation: "Vater"
            },
            {
               vocab_name: "Mother",
               vocab_translation: "Mutter"    
            }]
         },
         {
            vocab_list_id: "29",
            vocab_title: "Family",
            vocab_items: [{
               vocab_name: "Father",
               vocab_translation: "Vater"
            },
            {
               vocab_name: "Mother",
               vocab_translation: "Mutter"    
            }]
         },
        {
            vocab_list_id: "30",
            vocab_title: "Family",
            vocab_items: [{
               vocab_name: "Father",
               vocab_translation: "Vater"
            },
            {
               vocab_name: "Mother",
               vocab_translation: "Mutter"    
            }]
         }*/
      ]
      }
   }

   render() {
      const { match } = this.props;
      const title = match.params.langId
      const { friends_list, vocab_list } = this.state;
      return(
         <div className = 'group-container'>
            <h1>{title}</h1>
            <div className = 'group-content'>
               <div className = 'group-subtitles-container'>
                  <div className = 'friend-title'>
                     <h2>Friends List</h2>
                  </div>
                  <div className = 'vocabulary-title'>
                     <h2>Vocabulary List</h2>
                  </div>
               </div>
               <div className = 'group-content-container'>
                    <div className = 'friends-list-container'>
                       <div className = 'friends-list'>
                          {
                             friends_list.map(({user_id, ...otherProps}) => (
                                <FriendItem key = {user_id} {...otherProps} />
                             ))
                          }
                       </div>
                    </div>
                    <div className = 'vocab-list-container'>
                       <div className = 'vocab-list'>
                          {
                             vocab_list.map(({ vocab_list_id, ...otherProps }) => (
                                <VocabListItem key = {vocab_list_id} {...otherProps}/>
                             ))
                          }
                       </div>
                    </div>
               </div>
               <div className = 'group-wit-container'>
                  <div className = 'wit-robot'>
                     <h3>Wit</h3>
                  </div>
                  <div className = 'wit-micro'>
                     <h3>micro</h3>
                  </div>
                  <div className = 'wit-results'>
                     
                     <h3>Summary</h3>
                  </div>
               </div>
            </div>
         </div>
      )
   }
}

export default GroupComp;