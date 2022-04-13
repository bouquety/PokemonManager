import { Component, OnDestroy, OnInit } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit, OnDestroy{
  title = 'PokemonManager';
  generations: any[] = [];

  ngOnInit(): void {
      this.title='Welcome !!'
      this.generations = [
        {
            name: 'Generation I',
        },
        {
          name: 'Generation I',
        },
        {
          name: 'Generation I',
      },
      {
        name: 'Generation I',
    },
    {
      name: 'Generation I',
  },
  {
    name: 'Generation I',
},
{
  name: 'Generation I',
},
    ];
  }

  ngOnDestroy(): void {
      console.log('AppComponent=> ngOnDestroy')
  }
}
