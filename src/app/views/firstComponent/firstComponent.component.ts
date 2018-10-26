import { Component, OnInit } from '@angular/core';
import urlObj from '../../../assets/api/url';
import { HttpClient } from '@angular/common/http';

interface Data {
  insurances: Array<any>;
}

interface Result {
  data: Data;
}

@Component({
  selector: 'app-first-component',
  templateUrl: './firstComponent.component.html',
  styleUrls: ['./firstComponent.component.css']
})

export class FirstComponent implements OnInit {
  public insureList: Array<any> = [];
  constructor(private http: HttpClient) {}
  ngOnInit(): void {
    this.http.get(urlObj.list).subscribe((res: Result) => {
      this.insureList = res.data.insurances;
    });
  }
  editor(item): void {
    console.log(item);
  }
}
