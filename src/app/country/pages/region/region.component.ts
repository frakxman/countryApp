import { Component } from '@angular/core';
import { Country } from '../../interfaces/country.interface';
import { CountryService } from '../../services/country.service';

@Component({
  selector: 'app-region',
  templateUrl: './region.component.html',
  styleUrls: ['./region.component.scss']
})
export class RegionComponent {

  regions: string[] = ['africa', 'americas', 'asia', 'europe', 'oceania'];
  regionActivated: string = '';
  countries: Country[] = [];

  constructor( private countryService: CountryService ) { }

  getClassCSS( region: string ) {
    return ( region === this.regionActivated ) ? 'btn btn-primary' : 'btn btn-outline-primary'
  }

  activateRegion( region: string ) {
    
    this.regionActivated = region;
    this.countries = [];

    this.countryService.searchContinent( region )
      .subscribe( (data) => this.countries = data )
  }
}
