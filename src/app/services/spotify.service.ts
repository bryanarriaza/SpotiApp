import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
import from 'rxjs/add/operator/map';

@Injectable()
export class SpotifyService {

  private artistas:any[] = [];
  private urlBusqueda:string = "https://api.spotify.com/v1/search";

  constructor( private http:http ) { }

  getArtistas( termino:string ) {
    let query = `q=${ termino }&type=artist`;
    let url = this.urlBusqueda + query;
    return this.http.get( url ).map( res =>{
      console.log(res);
    });
  }

}
