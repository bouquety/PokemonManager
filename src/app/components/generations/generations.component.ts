import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-generations',
  templateUrl: './generations.component.html',
  styleUrls: ['./generations.component.css']
})
export class GenerationsComponent implements OnInit {
  title = 'PokemonManager';
  generations: any[] = [];

  ngOnInit(): void {
      this.title='Welcome !!'
      this.generations = [
        {
            name: 'Generation I',
        },
        {
          name: 'Generation II',
        },
        {
          name: 'Generation III',
      },
      {
        name: 'Generation IV',
    },
    {
      name: 'Generation V',
  },
  {
    name: 'Generation VI',
},
{
  name: 'Generation VII',
},
    ];
  }
}
