import { Component } from '@angular/core';
import { Country } from '../../interfaces/country.interface';
import { CountryService } from '../../services/country.service';

@Component({
  selector: 'app-capital',
  templateUrl: './capital.component.html',
  styleUrls: ['./capital.component.scss']
})
export class CapitalComponent {

  term: string = '';
  anError: boolean = false;
  countries: Country[] = [];

  constructor(private countryService: CountryService) { }

  search( term: string ) {
    this.anError = false;
    this.term = term;

    this.countryService.searchCapital( term )
      .subscribe( (data) => {
        // console.log( data );
        this.countries = data
      }, (err) => {
        this.anError = true;
        this.countries = [];
      });
  }

}
