import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-small-card',
  templateUrl: './small-card.component.html',
  styleUrls: ['./small-card.component.css']
})
export class SmallCardComponent implements OnInit {
  @Input()
  cardSmallTitle: string = ''
  @Input()
  cardSmallPhoto: string = ''
  @Input()
  Id: string = '0'
  
  constructor() { }

  ngOnInit(): void {
  }

}
