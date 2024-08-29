import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, ParamMap } from '@angular/router';
import { Observable } from 'rxjs';
import { SpotifyService } from '../spotify.service';
import {Location} from '@angular/common';

@Component({
  selector: 'app-artist',
  templateUrl: './artist.component.html',
  styleUrls: ['./artist.component.css']
})
export class ArtistComponent  implements OnInit {
  routeObs: Observable<ParamMap>; 

  artist : any; //Qui salverò la traccia selezionata
  spotifyServiceObs: Observable<Object>;
  
  //Usiamo la dependency injection per farci mandare i moduli del routing e dello    
  //SpotifyService
  constructor(
    private route: ActivatedRoute, 
    private service: SpotifyService,
    private location: Location  ) { }


  ngOnInit(): void {
    //Ottengo l'observable che notifica le informazioni sulla route attiva
    this.routeObs = this.route.paramMap;
    this.routeObs.subscribe(this.getRouterParam);
  }

  //Ogni volta che viene invocata la route tracks/:id, l'observable richiama questo metodo
  getRouterParam = (params: ParamMap) =>
  {
    let ArtistID = params.get('id'); //Ottengo l'id dalla ParamMap
    console.log (ArtistID); //Stampo su console
    //this.service.getTrack() 
    this.spotifyServiceObs = this.service.getArtist(ArtistID) ;
    this.spotifyServiceObs.subscribe((data)=>this.artist = data)
  }

  back() : void
  {
    this.location.back();
  }
}
