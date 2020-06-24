import React, { Component } from 'react';
import MicRecorder from 'mic-recorder-to-mp3';
import witai from './../../assets/witai.jpg';
import { witaiService } from './../../services/witai/witai.service';
import './witai.styles.scss';


const Mp3Recorder = new MicRecorder({ bitRate: 128 });

class WitAiComp extends Component {
   
   constructor(props) {
      super(props);
      this.state = {
         isRecording: false,
         blobURL: '',
         isBlocked: false,
         speechToText: undefined,
         bufferObj:undefined,
         robotAction: 'Speak',
         allRecognition: undefined,
         intentQuery: undefined,
         vocabWord: undefined,
         answerWitai: undefined,
      }
   }

   componentDidMount(){
      navigator.mediaDevices.getUserMedia({ audio: true },
         () => {
           console.log('Permission Granted');
           this.setState({ isBlocked: false });
         },
         () => {
           console.log('Permission Denied');
           this.setState({ isBlocked: true })
         },
       );
   }

   start = () => {
      if (this.state.isBlocked) {
        console.log('Permission Denied');
      } else {
        Mp3Recorder
          .start()
          .then(() => {
            this.setState({ isRecording: true });
          }).catch((e) => console.error(e));
      }
   };

   stop = async () => {
      await Mp3Recorder
        .stop()
        .getMp3()
        .then(([buffer, blob]) => {
          const blobURL = URL.createObjectURL(blob)
          this.setState({ blobURL, isRecording: false, bufferObj: blob });

        }).catch((e) => console.log(e));
        this.transformMethod(this.state.bufferObj);
   };

   getNameFromBlobUrl() {
      return this.state.blobURL.split('/')[3];
   }

   reocgnizeParams = (data)=> {

   }
   transformMethod = async (data) => {
      const allRecognition = await witaiService.speechApi( data, this.getNameFromBlobUrl());

      if(allRecognition.text) {

         if(allRecognition.intents[0].name === 'get_single_vocab_EN'){
            if(allRecognition.entities['query_lan_ES:query_lan_ES']) {
               if(allRecognition.entities['query_single_vocab_EN:query_single_vocab_EN']){
                  const palabras = allRecognition.entities['query_single_vocab_EN:query_single_vocab_EN'];
                  console.log(palabras);
                  for(let i = 0; i < palabras.length; i++) {
                     let h = palabras[i].body.split(' ');
                     if(h.length === 1) {
                        if(h[0] === 'dog'){
                           const as = h[0] +' es El perro (sing), Los perros(plu)';
                           this.setState({ answerWitai: as});
                           break;
                        }
                        if(h[0] === 'family') {
                           const as = h[0] +' es La familia (sing), Las familias(plu)';
                           this.setState({ answerWitai: as});
                           break;
                        }
                     }
                  }
               }
            }
         }else {
               console.log('hola');
         }
      this.setState({ speechToText: allRecognition.text, allRecognition});
      }else {
         this.setState({ speechToText: undefined, allRecognition:undefined});
      }
   }

   changeRobotAction = () => {
      console.log('adad')
      if(this.state.robotAction ==='Speak'){
         this.setState({robotAction: 'Write'});
      }else {
         this.setState({robotAction: 'Speak'});
      }
   }

   render() {
      const { speechToText, isRecording, robotAction, vocabWord, answerWitai} = this.state;
      return(
         <div className = 'group-wit-container'>
            <div className = 'wit-robot'>vocabWord
               <img className = 'robot' src = {witai} alt='robot Wit.ai'></img>
               <button className = 'robot-action' onClick = {this.changeRobotAction}>{robotAction}</button>
            </div>
            <div className = 'wit-micro'>
               <audio src={this.state.blobURL} controls="controls" />
               {
                  !isRecording?
                  <button className='button-record' onClick={this.start} disabled={isRecording}>
                  Record
                  </button>
                     :
                     null
               }
               {
                  isRecording?
                  <button className='button-stop' onClick={this.stop} disabled={!isRecording}>
                  Stop
                  </button>
                  :
                  null
               }
            </div>
            <div className = 'wit-results'>
               <h3>Audio To Text <span>(Results)</span></h3>

               {
                  speechToText?
                    <div className = 'wit-text'>
                      <div>
                      <span className = "results-text">Sppech: {speechToText}</span></div>
               <span className = "results-text">Answer: {answerWitai}</span>
                      <button className='button-save'> Save </button>
                    </div>
                  :
                     null
               }
            </div>
         </div>
      )
   }
}

export default WitAiComp;