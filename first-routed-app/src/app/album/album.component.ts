import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, ParamMap } from '@angular/router';
import { Observable } from 'rxjs';
import { SpotifyService } from '../spotify.service';
import {Location} from '@angular/common';
@Component({
  selector: 'app-album',
  templateUrl: './album.component.html',
  styleUrls: ['./album.component.css']
})
export class AlbumComponent {
  routeObs: Observable<ParamMap>; 

  album : any; 
  spotifyServiceObs: Observable<Object>;
  
  constructor(
    private route: ActivatedRoute, 
    private service: SpotifyService,
    private location: Location  ) { }


  ngOnInit(): void {
    this.routeObs = this.route.paramMap;
    this.routeObs.subscribe(this.getRouterParam);
  }
  getRouterParam = (params: ParamMap) =>
  {
    let AlbumID = params.get('id'); 
    console.log (AlbumID); 
    this.spotifyServiceObs = this.service.getAlbum(AlbumID) ;
    this.spotifyServiceObs.subscribe((data)=>this.album = data)
  }

  back() : void
  {
    this.location.back();
  }
}
