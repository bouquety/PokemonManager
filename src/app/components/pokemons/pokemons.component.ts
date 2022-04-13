import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-pokemons',
  templateUrl: './pokemons.component.html',
  styleUrls: ['./pokemons.component.css']
})
export class PokemonsComponent implements OnInit {
  title = 'PokemonManager';
  pokemons: any[] = [];

  ngOnInit(): void {
      this.title='Welcome !!'
      this.pokemons = [
        {
          id: 1,
          name: "Bulbizarre",
          category: "Graine",
          type: ["Poison", "Plante"],
          height: 0.7,
          weight: 6.9,
          image: "https://www.pokepedia.fr/images/thumb/e/ef/Bulbizarre-RFVF.png/250px-Bulbizarre-RFVF.png"
        },
        {
          id: 2,
          name: "Herbizarre",
          category: "Graine",
          type: ["Poison", "Plante"],
          height: 1,
          weight: 13,
          image: "https://www.pokepedia.fr/images/thumb/4/44/Herbizarre-RFVF.png/250px-Herbizarre-RFVF.png"
        },
        {
          id: 3,
          name: "Florizarre",
          category: "Graine",
          type: ["Poison", "Plante"],
          height: 2,
          weight: 100,
          image: "https://www.pokepedia.fr/images/thumb/4/42/Florizarre-RFVF.png/250px-Florizarre-RFVF.png"
        },
        {
          id: 4,
          name: "Salamèche",
          category: "Lézard ",
          type: ["Feu"],
          height: 0.6,
          weight: 8.5,
          image: "https://www.pokepedia.fr/images/thumb/8/89/Salam%C3%A8che-RFVF.png/250px-Salam%C3%A8che-RFVF.png"
        },

        {
          id: 5,
          name: "Reptincel",
          category: "Flamme",
          type: ["Feu"],
          height: 1.1,
          weight: 19,
          image: "https://www.pokepedia.fr/images/thumb/6/64/Reptincel-RFVF.png/250px-Reptincel-RFVF.png"
        },
        
        {
          id: 6,
          name: "Dracaufeu",
          category: "Flamme",
          type: ["Feu", "Vol"],
          height: 1.7,
          weight: 90.5,
          image: "https://www.pokepedia.fr/images/thumb/1/17/Dracaufeu-RFVF.png/250px-Dracaufeu-RFVF.png"
        },
       
     
      
       
    ];
  }

}
