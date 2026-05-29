import {
  Component,
  OnInit,
  Renderer2,
  ElementRef,
  ViewChild,
} from '@angular/core';
import { CommonModule } from '@angular/common';
import { NavigationStart, Router, RouterModule } from '@angular/router';
import { Subject, takeUntil } from 'rxjs';
interface NavBtnLines {
  bars: string;
  barsColor: boolean;
}
interface NavItem {
  location: string;
  name: string;
  icon: string;
  iconSolid: boolean;
  iconBrands: boolean;
  iconColor: string;
  btnColorLight: boolean;
}

@Component({
  selector: 'app-navigation',
  standalone: true,
  imports: [CommonModule, RouterModule],
  templateUrl: './navigation.component.html',
  styleUrl: './navigation.component.scss',
})
export class NavigationComponent implements OnInit {
  public firstLineRotate = false;
  public secondLineRotate = false;

  public navbarContainerActive = false;
  public overflow = false;
  private allNavItems!: NodeListOf<HTMLElement>;

  navItemClass = '';
  navList: NavItem[] = [
    {
      location: '/',
      name: 'home',
      icon: 'fa-house',
      iconSolid: true,
      iconBrands: false,
      iconColor: 'white',
      btnColorLight: false,
    },
    {
      location: '/offers',
      name: 'oferta',
      icon: 'fa-ice-cream',
      iconSolid: true,
      iconBrands: false,
      iconColor: 'white',
      btnColorLight: false,
    },
    {
      location: '/portfolio',
      name: 'o mnie',
      icon: 'fa-face-grin-hearts',
      iconSolid: false,
      iconBrands: false,
      iconColor: '',
      btnColorLight: false,
    },
    {
      location: '/contact',
      name: 'kontakt',
      icon: 'fa-envelope-open',
      iconSolid: true,
      iconBrands: false,
      iconColor: 'white',
      btnColorLight: false,
    }
  ];
  private destroyed$ = new Subject();

  constructor(private router: Router) {}

  ngOnInit() {
    this.router.events.subscribe((event) => {
      if (!(event instanceof NavigationStart)) {
        return;
      }
      // handle navigation start event
      const url = event.url.split('?')[0];
      const currentNavItem = this.navList.find((i) => i.location === url);
      this.navItemClass = currentNavItem?.iconColor || '';
      this.allNavItems =
        document.querySelectorAll<HTMLElement>('.navbar__nav-link');
      const colorBarOne = document.querySelector(
        '.navbar__btn__bars-firstLine'
      );
      const colorBarTwo = document.querySelector(
        '.navbar__btn__bars-secondLine'
      );
      if (currentNavItem?.btnColorLight === true) {
        colorBarOne?.classList.add('whiteLines');
        colorBarTwo?.classList.add('whiteLines');
        colorBarOne?.classList.remove('blackLines');
        colorBarTwo?.classList.remove('blackLines');
      } else {
        colorBarOne?.classList.add('blackLines');
        colorBarTwo?.classList.add('blackLines');
        colorBarOne?.classList.remove('whiteLines');
        colorBarTwo?.classList.remove('whiteLines');
      }
    });
  }

  public hideMenu() {
    this.firstLineRotate = false;
    this.secondLineRotate = false;

    this.navbarContainerActive = false;
    this.overflow = false;
    this.allNavItems?.forEach((item) => {
      item.classList.remove('navHoverAnimation');
      item.classList.remove('navHoverAnimationIcon');
    });
  }

  public toggleField() {
    this.firstLineRotate = !this.firstLineRotate;
    this.secondLineRotate = !this.secondLineRotate;

    this.navbarContainerActive = !this.navbarContainerActive;
    this.overflow = !this.overflow;
    this.handleNavItemsAnimation();
    this.handleNavItemsAnimationIcon();
  }

  getIconClass(item: NavItem): string {
    const classes = ['nav-link'];
    classes.push(item.icon);
    item.iconSolid ? classes.push('fa-solid') : classes.push('fa-regular');
    item.iconBrands ? classes.push('fa-brands') : undefined;

    return classes.join(' ');
  }

  onMouseEnter(event: MouseEvent) {
    const target = event.target as HTMLElement;
    if (!target.dataset['dstid']) return;
    const dstEl = document.getElementById(target.dataset['dstid']);
    if (!dstEl) return;

    dstEl.classList.add('nav-items-animation');
  }
  onMouseleave(event: MouseEvent) {
    const target = event.target as HTMLElement;
    if (!target.dataset['dstid']) return;
    const dstEl = document.getElementById(target.dataset['dstid']);
    if (!dstEl) return;

    dstEl.classList.remove('nav-items-animation');
  }
  handleNavItemsAnimation() {
    let delayTime = 0;
    for (const item of Array.from(this.allNavItems)) {
      item.classList.toggle('navHoverAnimation');
      // item.style.animationDelay = '.' + delayTime + 's';
      // delayTime++;
    }
  }
  handleNavItemsAnimationIcon() {
    let delayTime = 1;

    for (const item of Array.from(this.allNavItems)) {
      console.log(delayTime, item);
      item.classList.toggle('navHoverAnimationIcon');
      item.style.animationDelay = '.' + delayTime + 's';
      delayTime++;
    }
  }
}
