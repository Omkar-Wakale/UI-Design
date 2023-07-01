import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LandingpageComponent } from './landingpage/landingpage.component';
import { FaqComponent } from './faq/faq.component';

const routes: Routes = [
  {
    path:'landingpage',
    component:LandingpageComponent
  },
  {
    path:'faq',
    component:FaqComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
