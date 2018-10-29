import { Injectable, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
@Injectable()

export class DataService implements OnInit {
    public content = '如果你一开始就答应我的要求那我就失去了与你纠缠不休的理由';
    constructor(private http: HttpClient) {}
    ngOnInit(): void {
      this.content = '如果你一开始就答应我的要求';
    }
}
