import { Component } from '@angular/core';
import {NzCardComponent, NzCardMetaComponent} from "ng-zorro-antd/card";

@Component({
  selector: 'app-card',
  standalone: true,
  imports: [
    NzCardComponent,
    NzCardMetaComponent

  ],
  templateUrl: './card.component.html',
  styleUrl: './card.component.css'
})
export class CardComponent {

}
