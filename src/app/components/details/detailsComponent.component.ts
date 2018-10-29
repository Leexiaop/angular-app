import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import urlObj from '../../../assets/api/url';
import { HttpClient } from '@angular/common/http';

interface Data {
    insurances: Array<any>;
  }
interface Result {
    data: Data;
}

@Component({
    selector: 'app-details-component',
    templateUrl: './detailsComponent.component.html',
    styleUrls: ['./detailsComponent.component.css']
})

export class DetailsComponent implements OnInit {
    public insureList: Array<any>;
    public childTitle: string;
    @Input()
    set detailTitle(detailTitle: string) {
        this.childTitle = detailTitle;
    }
    get detailTitle(): string {
        return this.detailTitle;
    }
    @Output() initEmit = new EventEmitter<object>();
    constructor(private http: HttpClient) {}
    ngOnInit(): void {
      this.http.get(urlObj.list).subscribe((res: Result) => {
        this.insureList = res.data.insurances;
      });
    }
    edit(item: object): void {
        // console.log(item);
        this.initEmit.emit(item);
    }
}
