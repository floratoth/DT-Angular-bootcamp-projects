import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { AccordionItem } from '../model/accordion-item';
import { MainService } from '../service/main.service';

@Component({
  selector: 'app-accordion',
  templateUrl: './accordion.component.html',
  styleUrls: ['./accordion.component.scss'],
})
export class AccordionComponent implements OnInit {
  accordionDataList$: Observable<AccordionItem[]>;
  accordionDataList: AccordionItem[] = [];

  constructor(private mainService: MainService) {}

  ngOnInit(): void {
    this.accordionDataList$ = this.mainService.getData();
    this.accordionDataList$.subscribe((list) => {
      this.accordionDataList = [...list];
    });
  }

  onItemClicked(clickedIndex: number): void {
    this.accordionDataList.map((element, elementIndex) => {
      elementIndex === clickedIndex
        ? (element.isSeen = !element.isSeen)
        : (element.isSeen = false);
    });
  }
}
