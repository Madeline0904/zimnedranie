import { Component, NgModule } from '@angular/core';
import { ChildrenOutletContexts, RouterModule } from '@angular/router';
import { FormsModule } from '@angular/forms';
import { HomeComponent } from './home/home.component';

import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { NavigationComponent } from './navigation/navigation.component';
import { GalleryComponent } from './gallery/gallery.component';
import { slideInAnimation } from './animations';
import { CommonModule, NgFor } from '@angular/common';

interface Item {
  imageSrc: string;
  imageAlt: string;
}

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [
    HomeComponent,
    NavigationComponent,
    RouterModule,
    CommonModule,
    GalleryComponent,
  ],
  template: `
    <main>
      <app-navigation></app-navigation>
      <section class="content" [@routeAnimations]="getRouteAnimationData()">
        <router-outlet></router-outlet>
      </section>
    </main>
  `,
  styleUrls: ['./app.component.scss'],
  animations: [slideInAnimation],
})
export class AppComponent {
  title = 'home';
  constructor(private contexts: ChildrenOutletContexts) {}

  getRouteAnimationData() {
    return this.contexts.getContext('primary')?.route?.snapshot?.data?.[
      'animation'
    ];
  }
}
