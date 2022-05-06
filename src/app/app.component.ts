import { Component } from '@angular/core';
import { IconService } from '@ant-design/icons-angular';
import { AntCloudOutline } from '@ant-design/icons-angular/icons';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  constructor(private _iconService: IconService) {
    this._iconService.addIcon(...[ AntCloudOutline ]);
    this._iconService.twoToneColor = { primaryColor: '#1890ff' };
  }
}
