import { Component } from '@angular/core';


@Component({
  selector: 'app-portfolio',
  standalone: true,
  imports: [],
  templateUrl: './portfolio.component.html',
  styleUrl: './portfolio.component.scss',
})
export class PortfolioComponent {
protected activeAfter= true


clickedImg(event:any){
   const cardAfter=event.target
cardAfter?.classList.toggle('clickedAfter')
}
onclickedImg(event:any){
  const cardBefore=event.target
  cardBefore?.classList.toggle('clickedBefore')
}
}
