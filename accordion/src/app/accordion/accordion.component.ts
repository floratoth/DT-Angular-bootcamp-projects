import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { AccordionItem } from '../model/accordion-item';
import { MainService } from '../service/main.service';

@Component({
  selector: 'app-accordion',
  templateUrl: './accordion.component.html',
  styleUrls: ['./accordion.component.scss']
})
export class AccordionComponent implements OnInit {

  accordionDataList$: Observable<AccordionItem[]>;

  constructor(private mainService: MainService) { }

  ngOnInit(): void {
    this.accordionDataList$ = this.mainService.getData();
  }

}
