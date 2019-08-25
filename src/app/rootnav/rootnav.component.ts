import { Component, OnInit,Input } from '@angular/core';
import {Node} from './../childnav/childnav.component'
import {navItems} from './../data'
@Component({
  selector: 'app-rootnav',
  templateUrl: './rootnav.component.html',
  styleUrls: ['./rootnav.component.sass']
})
export class RootnavComponent implements OnInit {
  @Input() isOpened: boolean;
  links:Node[]=navItems
  constructor() { }

  ngOnInit() {
    console.log(this.isOpened)
  }

}
