import { Component, OnInit } from '@angular/core';
@Component({
  selector: 'app-main',
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.css']
})

export class MainComponent implements OnInit {
  title = 'main';
  menuList: Array<any> = [
    {
      id: 1,
      content: '菜单一',
      type: 'home',
      items: [
        { id: 1, content: '标题一', router: 'app-first-component' },
        { id: 2, content: '标题二', router: 'app-second-component' }
      ],
      subMenuList: [
        {
          id: 1,
          title: '这是副标题1',
          items: [
            { id: 1, content: 'optiooooooo1', router: 'app-first-component'}
          ]
        }
      ]
    },
    {
      id: 2,
      content: '菜单二',
      type: 'border',
      items: [
        { id: 1, content: 'option1', router: 'app-first-component' },
        { id: 2, content: 'option1', router: 'app-second-component' }
      ]
    }
  ];
  ngOnInit(): void {
  }
}
