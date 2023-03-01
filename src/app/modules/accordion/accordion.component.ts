import { Component,Input,EventEmitter,Output,ViewChild } from '@angular/core';
interface SearchCriteria {

  label: string;
  selected: boolean;

}

@Component({
  selector: 'app-accordion',
  templateUrl: './accordion.component.html',
  styleUrls: ['./accordion.component.scss']
})
export class AccordionComponent {
  items = ['Constructional', 'Operational', 'Derived', 'Predicted', 'Reference'];
  expandedIndex = 0;

  icon: boolean = false;
  Name = ['Deferential Head', 'Efficiency', 'Power', 'Flow'];
  click() {
    this.icon = !this.icon;
  }

  }
