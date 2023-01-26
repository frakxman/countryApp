import { HttpClient, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

import { Country } from '../interfaces/country.interface';

@Injectable({
  providedIn: 'root'
})
export class CountryService {

  private apiUrl: string = 'https://restcountries.com/v3.1';

  get httpParams () {
    return new HttpParams().set('fields', 'flags,name,capital,cioc,population');
  }

  constructor( private http: HttpClient) { }

  searchCountry( term: string ): Observable<Country[]> {
    const url = `${ this.apiUrl}/name/${ term }`;
    return this.http.get<Country[]>( url, { params: this.httpParams } )
  }

  searchCapital( term: string ): Observable<Country[]> {
    const url = `${ this.apiUrl}/capital/${ term }`;
    return this.http.get<Country[]>( url, { params: this.httpParams } )
  }

  searchCountryCode( id: string ): Observable<Country> {
    const url = `${ this.apiUrl}/alpha/${ id }`;
    return this.http.get<Country>( url )
  }

  searchContinent( region: string ): Observable<Country[]> {
    
    const url = `${ this.apiUrl}/region/${ region }`;
    return this.http.get<Country[]>( url, { params: this.httpParams } ) 
  }
}
