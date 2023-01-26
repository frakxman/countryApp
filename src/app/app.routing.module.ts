import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { CapitalComponent } from './country/pages/capital/capital.component';
import { CountriesComponent } from './country/pages/countries/countries.component';
import { CountryComponent } from './country/pages/country/country.component';
import { RegionComponent } from './country/pages/region/region.component';

const routes: Routes = [
    { path: '', component: CountriesComponent, pathMatch: 'full' },
    { path: 'region', component: RegionComponent },
    { path: 'capital', component: CapitalComponent },
    { path: 'country/:id', component: CountryComponent },
    { path: '**', redirectTo: '' }
]

@NgModule({
    imports: [
        RouterModule.forRoot( routes )
    ],
    exports: [
        RouterModule
    ]
})

export class AppRoutingModule {}