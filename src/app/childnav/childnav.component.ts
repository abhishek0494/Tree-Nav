import { Component, OnInit, Input, HostBinding } from '@angular/core';
import {Router} from '@angular/router';
import { animate, state, style, transition, trigger } from '@angular/animations';
export class Node {
  displayName: string;
  disabled?: boolean;
  iconName: string;
  route?: string;
  children?: Node[];
}
@Component({
  selector: 'app-childnav',
  templateUrl: './childnav.component.html',
  styleUrls: ['./childnav.component.scss'],
  animations: [
    trigger('indicatorRotate', [
      state('collapsed', style({ transform: 'rotate(0deg)' })),
      state('expanded', style({ transform: 'rotate(180deg)' })),
      transition('expanded <=> collapsed',
        animate('225ms cubic-bezier(0.4,0.0,0.2,1)')
      ),
    ])
  ]
})
export class ChildnavComponent implements OnInit {
  expanded: boolean;
  @HostBinding('attr.aria-expanded') ariaExpanded = this.expanded;
  @Input() node: Node;
  @Input() depth: number;
  @Input() isOpened: boolean;
  constructor(public router:Router) {
    if (this.depth === undefined) {
      this.depth = 0;
    }
  }

  ngOnInit() {
    console.log(this.isOpened)
  }
  onItemSelected(item: Node) {
    // if (!item.children || !item.children.length) {
      this.router.navigate([item.route]);
    // }
    if (item.children && item.children.length && !item.disabled) {
      this.expanded = !this.expanded;
    }
  }

}
