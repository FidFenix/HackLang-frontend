import React, { Component } from 'react';

import MicRecorder from 'mic-recorder-to-mp3';
import witai from './../../assets/witai.jpg';

import './witai.styles.scss';

const Mp3Recorder = new MicRecorder({ bitRate: 128 });

class WitAiComp extends Component {
   
   constructor(props) {
      super(props);
      this.state = {
         isRecording: false,
         blobURL: '',
         isBlocked: false,
         speechToText: 'Hallo, wie geth\'s',
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

   stop = () => {
      Mp3Recorder
        .stop()
        .getMp3()
        .then(([buffer, blob]) => {
          const blobURL = URL.createObjectURL(blob)
          this.setState({ blobURL, isRecording: false });
        }).catch((e) => console.log(e));
   };
   render() {
      const { speechToText } = this.state;
      return(
         <div className = 'group-wit-container'>
            <div className = 'wit-robot'>
               <img className = 'robot' src = {witai} alt='robot Wit.ai'></img>
            </div>
            <div className = 'wit-micro'>
               <audio src={this.state.blobURL} controls="controls" />
               <button onClick={this.start} disabled={this.state.isRecording}>
               Record
               </button>
               <button onClick={this.stop} disabled={!this.state.isRecording}>
               Stop
               </button>
            </div>
            <div className = 'wit-results'>
               <h3>Audio To Text <span>(Results)</span></h3>

               {
                  speechToText?
                    <div className = 'wit-text'>
                      <span className = "results-text">{speechToText}</span>
                      <button > Save </button>
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