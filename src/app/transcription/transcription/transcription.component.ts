import {Component, ElementRef, OnInit, ViewChild} from '@angular/core';
import {TranscriptionService} from "../transcription.service";
import {FormControl} from "@angular/forms";

@Component({
  selector: 'app-transcription',
  templateUrl: './transcription.component.html',
  styleUrls: ['./transcription.component.css']
})
export class TranscriptionComponent implements OnInit {
  result: string = '';


  // @ts-ignore
  @ViewChild('transactionInput') transactionInput:ElementRef<HTMLTextAreaElement>;

  constructor(private transcriptionService: TranscriptionService) { }

  ngOnInit(): void {
  }

  makeTranscription() {
    if (this.transactionInput !== undefined) {
      this.result = this.transcriptionService.makeTranscription(this.transactionInput.nativeElement.value);
    }
  }
}
