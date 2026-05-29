import { Routes, Router } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { PortfolioComponent } from './portfolio/portfolio.component';
import { OffersComponent } from './offers/offers.component';

import { ContactComponent } from './contact/contact.component';

import { RedirectGuard } from './redirect.guard';
class NotFoundComponent {
  constructor(private router: Router) {}
}
const routeConfig: Routes = [
  {
    path: '',
    component: HomeComponent,
    title: 'Home page',
    data: { animation: 'HomePage' },
  },
  {
    path: 'portfolio',
    component: PortfolioComponent,
    title: 'Portfolio',
    data: { animation: 'PortfolioPage' },
  },
  {
    path: 'offers',
    component: OffersComponent,
    title: 'Oferta',
    data: { animation: 'OffersPage' },
  },
  // {
  // //   path: 'reviews',
  // //   component: ReviewsComponent,
  // //   title: 'Opinie',
  // //   data: { animation: 'ReviewsPage' },
  // // },
  // {
  //   path: 'gallery',
  //   component: GalleryComponent,
  //   title: 'Galeria',
  //   data: { animation: 'GalleryPage' },
  // },
  {
    path: 'facebook',
    data: {
      externalUrl:
        'https://www.facebook.com/p/CUT-or-NOT-pracownia-fryzjerska-ANNA-DUDEK-100094354512463/',
    },
    canActivate: [RedirectGuard],
    component: NotFoundComponent,
  },
  {
    path: 'instagram',
    data: {
      externalUrl: 'https://www.instagram.com/cut_or_not_anna_dudek/',
    },
    canActivate: [RedirectGuard],
    component: NotFoundComponent,
  },
  {
    path: 'contact',
    component: ContactComponent,
    title: 'Kontakt',
    data: { animation: 'ContactPage' },
  },
];

export default routeConfig;
