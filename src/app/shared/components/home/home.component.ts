import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

interface TileItem {
  id: number;
  leftImage: string;
  rightImage: string;
  title: string;
  text: string;
  redirectTo: string;
}

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss'],
})
export class HomeComponent implements OnInit {
  tileItems: TileItem[] = [
    {
      id: 1,
      leftImage: 'assets/iconfinder_661_-_Construction_house.svg',
      rightImage: '',
      title: 'New Construction',
      text: 'text',
      redirectTo: '/construction',
    },
    {
      id: 2,
      leftImage: 'assets/iconfinder_ALL.svg',
      rightImage: 'assets/iconfinder_ALL.svg',
      title: 'Market report',
      text: 'text',
      redirectTo: '/market',
    },
  ];

  constructor(private router: Router) {}

  ngOnInit() {}

  onTileClick(id: number) {
    const clickedItem = this.tileItems.find(x => x.id === id);
    if (clickedItem) {
      this.router.navigate([clickedItem.redirectTo]);
    }
  }
}
