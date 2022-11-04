import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class TranscriptionService {

  difficultLetters: {letter: string, transcription: string}[] = [
    {letter: 'tš', transcription: 'ч'},
    {letter: 'štš', transcription: 'щ'},
    {letter: 'ii', transcription: 'ий'},
    {letter: 'ee', transcription: 'еэ'},
    {letter: 'ja', transcription: 'я'},
    {letter: 'je', transcription: 'е'},
    {letter: 'ju', transcription: 'ю'},
    {letter: 'jä', transcription: 'я'},
    {letter: 'jö', transcription: 'ё'},
    {letter: 'öö', transcription: 'ёэ'},
    {letter: 'üü', transcription: 'юй'},
    // {letter: '\n', transcription: '.!.'},
    // {letter: '\r', transcription: '.!.'},
  ];

  specialAndNumberRegex = /^[!@#$%^&*()_+\-=\[\]{};':"\\|,.<>\/?0-9]*$/;

  constructor() {
  }

  makeTranscription(transcriptionInput: string) {
    let result = "";
    this.difficultLetters.forEach(letter => transcriptionInput.replace(`/${letter.letter}/g`, letter.transcription));

    for (let i = 0; i < transcriptionInput.length; i++) {
      let letter = transcriptionInput.charAt(i);
      if (this.specialAndNumberRegex.test(letter)) {
        result = result + letter;
      } else {
        let isLower = TranscriptionService.isLowerCase(letter);
        let transcriptLetter = TranscriptionService.testLetter(letter);
        result = result + (isLower ? transcriptLetter : transcriptLetter.toUpperCase());
      }
    }

    console.log(result);
    return  result;
    // return result.replace(`/.!./g`, '\n');;
  }

  private static testLetter(l: string) {
    switch (l.toLowerCase()) {
      case "a": {
        return "а";
      }
      case "b": {
        return "б";
      }
      case "c": {
        return "ц";
      }
      case "d": {
        return "д";
      }
      case "e": {
        return "э";
      }
      case "f": {
        return "ф";
      }
      case "g": {
        return "г";
      }
      case "h": {
        return "х";
      }
      case "i": {
        return "и";
      }
      case "j": {
        return "й";
      }
      case "k": {
        return "к";
      }
      case "l": {
        return "л";
      }
      case "m": {
        return "м";
      }
      case "n": {
        return "н";
      }
      case "o": {
        return "о";
      }
      case "p": {
        return "п";
      }
      case "r": {
        return "р";
      }
      case "s": {
        return "с";
      }
      case "t": {
        return "т";
      }
      case "u": {
        return "у";
      }
      case "v": {
        return "в";
      }
      case "õ": {
        return "ы";
      }
      case "ä": {
        return "я";
      }
      case "ö": {
        return "ё";
      }
      case "ü": {
        return "ю";
      }
      case "š": {
        return "ш";
      }
      case "z": {
        return "з";
      }
      case "ž": {
        return "ж";
      }
      case "q": {
        return "кью";
      }
      case "w": {
        return "в";
      }
      case "x": {
        return "кс";
      }
      case "y": {
        return "ю";
      }
      default: {
        return l;
      }
    }
  }

  static isLowerCase(str: string)
  {
    return str == str.toLowerCase() && str != str.toUpperCase();
  }
}
