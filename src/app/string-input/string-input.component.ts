import { Component } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { FormsModule } from '@angular/forms';
import { NgIf } from '@angular/common';

@Component({
  selector: 'app-string-input',
  templateUrl: './string-input.component.html',
  styleUrls: ['./string-input.component.css'],
  standalone: true,
  imports: [FormsModule, NgIf],
})
export class StringInputComponent {
  inputString: string = '';
  returnedText: string = '';

  constructor(private http: HttpClient) {}

  sendString() {
    const headers = new HttpHeaders().set(
      'Custom-Header',
      'Hello from Angular'
    );

    this.http
      .get(`https://localhost:9709/api/greeting?name=${this.inputString}`, {
        headers,
        responseType: 'text',
      })
      .subscribe(
        (response) => {
          this.returnedText = response;
        },
        (error) => {
          console.error('Error:', error);
        }
      );
  }
}
