import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-tile',
  templateUrl: './tile.component.html',
  styleUrls: ['./tile.component.scss'],
})
export class TileComponent implements OnInit {
  @Input() imageLeft = '';
  @Input() imageRight = '';
  @Input() title = '';
  @Input() text = '';

  @Output() tileClick: EventEmitter<null> = new EventEmitter();

  constructor() {}

  ngOnInit() {}

  onTileClick() {
    this.tileClick.emit();
  }
}
