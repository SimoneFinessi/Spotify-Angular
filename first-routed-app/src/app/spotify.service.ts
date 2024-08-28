import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';

//Dichiaro che il servizio è iniettabile agli altri componenti a partire dal componente root
@Injectable({
  providedIn: 'root'  
})
export class SpotifyService {
   //url per oauth: https://developer.spotify.com/console/get-search-item/
  //Ottengo il modulo HttpClient
  constructor(private http: HttpClient) { }
  

  searchTrack(query: string) {
    console.log("prova");
    const url = `https://api.spotify.com/v1/search?q=${query}&type=track`;
    const headers = new HttpHeaders({
      Authorization:
        'Bearer BQCHQOT4Kd99YbV7kuGLH4Cmgrfkc-7LIykaxMey-18picbqx_05yIBDZr7W3MMPK72jU3JuHdnufpkcHcoacY03mE6c8N5xlNg91fMj-FdQBoe_8IMJTXdIofvZR5b1SqwvBSwSqLn_dXTcLrNSJQlpld_B2Ik7hjSVAA8qU4EpNfd43QiiOqTYQr2TQAVP99uCMWMN76MiSThQQdUyN6QshWVLUpuaQ4fTlYLocAROcQQe1W7tb30sKGQsCJB_DOS18hZn4MO1sBJ1Eae8jzQeCPSXH1M0TixQTK82akLnifZOZRUp1udtnwOYrqorY4ljhewLfImVSUQM1C9TavLwVBPJ_jk'
    });

    let obsTracks = this.http.get(url, { headers });
    
    return obsTracks;
 //Ritorno un observable ai componenti che richiedono il servizio
  }
}