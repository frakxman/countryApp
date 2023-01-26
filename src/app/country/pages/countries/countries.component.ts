import { Component } from '@angular/core';
import { Country } from '../../interfaces/country.interface';
import { CountryService } from '../../services/country.service';

@Component({
  selector: 'app-countries',
  templateUrl: './countries.component.html',
  styleUrls: ['./countries.component.scss']
})
export class CountriesComponent {

  term: string = '';
  anError: boolean = false;
  countries: Country[] = [];

  constructor(private countryService: CountryService) { }

  search( term: string ) {
    this.anError = false;
    this.term = term;

    this.countryService.searchCountry( term )
      .subscribe( (data) => {
        this.countries = data
      }, (err) => {
        this.anError = true;
        this.countries = [];
      });
  }

  suggetions( term: string ) {
    this.anError = false;
  }

}
