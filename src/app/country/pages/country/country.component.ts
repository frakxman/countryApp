import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { switchMap, tap } from 'rxjs';
import { Country } from '../../interfaces/country.interface';
import { CountryService } from '../../services/country.service';

@Component({
  selector: 'app-country',
  templateUrl: './country.component.html',
  styleUrls: ['./country.component.scss']
})
export class CountryComponent implements OnInit {

  country!: Country;

  constructor( private activatedRoute: ActivatedRoute, private countryService: CountryService ) { }

  ngOnInit(): void {

    // Without rxjs operators     
    // this.activatedRoute.params
    //   .subscribe(({ id }) => {
    //     console.log( id );

    //     this.countryService.searchCountryCode( id )
    //       .subscribe( country => console.log( country ))
    //   });

    // With rxjs
    this.activatedRoute.params
      .pipe(
        switchMap( ({ id }) => this.countryService.searchCountryCode( id )),
        tap( console.log )
      )
      .subscribe( country => this.country = country[0] );
  }

}
