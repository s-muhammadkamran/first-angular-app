import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit  {
  header = 'My First App';
  title = 'Hello World! and Learning never ends. I am S M Kamran.';

  query: string;
  artists: any;
  currentArtist: any;

  showArtist(e: any, a: any) {
    this.query = a.name;
    
    if (this.currentArtist != null) {
      this.currentArtist.highlight = false;
    }

    a.highlight = true;            
    this.currentArtist = a;
  }

  constructor(private http: HttpClient) {
    this.query = "";
    this.artists = [];    
  }

  ngOnInit(): void {
    this.http.get<Object>('../assets/data.json').subscribe (
      data => {
        this.artists = data;
      }
    )
  }
}
