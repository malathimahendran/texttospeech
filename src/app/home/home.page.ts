import { Component } from '@angular/core';
import { TextToSpeech } from '@ionic-native/text-to-speech/ngx';
@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {
  text_sentences = [];
  constructor( private tts: TextToSpeech) {
    // this.text_sentences = []
  }
  textToSpeech(text) {
    
    this.tts.speak(text)
      .then(() => console.log('Success'))
      .catch((reason: any) => console.log(reason));
  }
  fun(text){
    this.text_sentences = [text]
  }




}
