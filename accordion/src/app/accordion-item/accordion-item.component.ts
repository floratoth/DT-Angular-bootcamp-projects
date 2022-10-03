import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-accordion-item',
  templateUrl: './accordion-item.component.html',
  styleUrls: ['./accordion-item.component.scss']
})
export class AccordionItemComponent implements OnInit {

  @Input() title: string;
  @Input() description: string;
  @Input() isClicked: boolean = false;

  constructor() { }

  ngOnInit(): void {
  }

}
