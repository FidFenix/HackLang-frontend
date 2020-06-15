import React, { Component } from 'react';
import './group.styles.scss';
import FriendItem from '../friend-item/friend-item.component';
import VocabListItem from '../vocab-list-item/vocab-list-item.component';
import WordItem from '../word-item/word-item.component';
import WitAiComp from '../witai/witai.component';

class GroupComp extends Component {

   constructor(props) {
      super(props);
      this.state = {
         vocabularyListIdToShow: undefined,
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
            vocab_words: [{
               word_id: "1",
               word_name: "Apple",
               word_trans: "Apfel"
            },
            {
               word_id: "2",
               word_name: "Orange",
               word_trans: "Orange"    
            }]
         },{
            vocab_list_id: "2",
            vocab_title: "Family",
            vocab_words: [{
               word_id: "1",
               word_name: "Father",
               word_trans: "Vater"
            },
            {
               word_id: "2",
               word_name: "Mother",
               word_trans: "Mutter"    
            }]
         },{
            vocab_list_id: "3",
            vocab_title: "Fruits",
            vocab_words: [{
               word_id: "1",
               word_name: "Apple",
               word_trans: "Apfel"
            },
            {
               word_id: "2",
               word_name: "Orange",
               word_trans: "Orange"    
            }]
         },{
            vocab_list_id: "4",
            vocab_title: "Family",
            vocab_words: [{
               word_id: "1",
               word_name: "Father",
               word_trans: "Vater"
            },
            {
               word_id: "2",
               word_name: "Mother",
               word_trans: "Mutter"    
            }]
         },{
            vocab_list_id: "5",
            vocab_title: "Fruits",
            vocab_words: [{
               word_id: "1",
               word_name: "Apple",
               word_trans: "Apfel"
            },
            {
               word_id: "2",
               word_name: "Orange",
               word_trans: "Orange"    
            }]
         },{
            vocab_list_id: "6",
            vocab_title: "Family",
            vocab_words: [{
               word_id: "1",
               word_name: "Father",
               word_trans: "Vater"
            },
            {
               word_id: "2",
               word_name: "Mother",
               word_trans: "Mutter"    
            }]
         },
         {
            vocab_list_id: "7",
            vocab_title: "Family",
            vocab_words: [{
               word_id: "1",
               word_name: "Father",
               word_trans: "Vater"
            },
            {
               word_id: "2",
               word_name: "Mother",
               word_trans: "Mutter"    
            }]
         },
         {
            vocab_list_id: "8",
            vocab_title: "Family",
            vocab_words: [{
               word_id: "1",
               word_name: "Father",
               word_trans: "Vater"
            },
            {
               word_id: "2",
               word_name: "Mother",
               word_trans: "Mutter"    
            }]
         },
         {
            vocab_list_id: "9",
            vocab_title: "Family",
            vocab_words: [{
               word_id: "1",
               word_name: "Father",
               word_trans: "Vater"
            },
            {
               word_id: "2",
               word_name: "Mother",
               word_trans: "Mutter"    
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

   showWords = (id) => {
      return this.state.vocab_list.find( (elem) => elem['vocab_list_id'] === id)['vocab_words'];
   }

   changeVocabularyId = (idVocabulary) => {
      this.setState({vocabularyListIdToShow: idVocabulary});
   }

   showListVocabulary = () => {
      this.setState({vocabularyListIdToShow: undefined});
   }
   render() {
      const { match } = this.props;
      const title = match.params.langId
      const { friends_list, vocab_list, vocabularyListIdToShow } = this.state;
      return(
         <div className = 'group-container'>
            <h1>{title}</h1>
            <div className = 'group-content'>
               <div className = 'group-subtitles-container'>
                  <div className = 'friend-title'>
                     <h2>Friends List</h2>
                  </div>
                  <div className = 'vocabulary-title'>
                     {
                        !vocabularyListIdToShow?
                        <h2>Vocabulary List</h2>
                        :
                        <div>
                           <h2 style={{'textAlign':'left', 'float':'left'}}>Words </h2>
                           <h2 style={{'textAlign':'right', 'float':'right', 'cursor': 'pointer'}}
                               onClick = {this.showListVocabulary}
                           >
                           &laquo; Vocabulary List
                           </h2>
                        </div>
                     }
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
                             !vocabularyListIdToShow?
                             vocab_list.map(({ vocab_list_id, ...otherProps }) => (
                                <VocabListItem
                                       key = {vocab_list_id} {...otherProps}onClick = { () => this.changeVocabularyId(vocab_list_id) }
                                 />
                             ))
                             :
                             this.showWords(vocabularyListIdToShow).map(({word_id, ...otherProps})=> (
                                <WordItem key = {word_id} {...otherProps}/>
                             ))
                          }
                       </div>
                    </div>
               </div>
               <WitAiComp/>
            </div>
         </div>
      )
   }
}

export default GroupComp;