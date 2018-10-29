import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-second-component',
  templateUrl: './secondComponent.component.html',
  styleUrls: ['./secondComponent.component.css']
})

export class SecondComponent implements OnInit {
  public title: string;
  ngOnInit(): void {
    this.title = '世界那么大';
  }
  getEditMessage(message: Object): void {
    console.log(message);
  }
}
