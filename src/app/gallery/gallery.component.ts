import { Component, Input, OnInit } from '@angular/core';
import { CommonModule} from '@angular/common';
import {  RouterModule } from '@angular/router';
import { animate, style, transition, trigger, AnimationEvent } from '@angular/animations';


interface Item {
  imageSrc: string;
  imageAlt: string;
  imgHorizontal:boolean;
}

@Component({
  selector: 'app-gallery',
  standalone: true,
  imports: [CommonModule, RouterModule],
  templateUrl: './gallery.component.html',
  styleUrl: './gallery.component.scss',
  animations:[
    trigger('animation',[
      transition('void=>visible',[
        style({transform: 'scale(0.5)'}),
        animate('150ms', style({transform: 'scale(1)'}))
      ]),
      transition('visible=>void',[
        style({transform: 'scale(1)'}),
        animate('150ms', style({transform: 'scale(0.5)'}))
      ]),

    ]),
    trigger('animation2', [
      transition(':leave',[
        style({opacity:1}),
        animate('50ms', style({opacity:0.8}))
      ])
    ])
  ]
})
export class GalleryComponent implements OnInit {
 
  galleryData: Item[] = [
    {
      imageSrc:
        "./assets/img/cer1.jpeg",
      imageAlt: "Certyfikat ukończenia szkolenia pod nazwą 'Trudna siwizna'",
      imgHorizontal:true
    },
    {
      imageSrc: "./assets/img/cer2.jpeg",
      imageAlt: "Dyplom ukończenia szkolenia pod nazwą 'Gen us for Women's beauty'",
      imgHorizontal:true
    },
    {
      imageSrc: "./assets/img/cer3.jpeg",
      imageAlt:  "Certyfikat ukończenia szkolenia Moc koloryzacji Si'colore",
      imgHorizontal:false
    },
    {
      imageSrc: "./assets/img/cer4.jpeg",
      imageAlt:  "Certyfikat ukończenia szkolenia z koloryzacji 'Świat kolorów Infiniti'",
      imgHorizontal:true
    },
    {
      imageSrc: "./assets/img/dyp1.jpeg",
      imageAlt:  "Dyplom przyjaciela dzieci",
      imgHorizontal:false
    },
    {
      imageSrc: "./assets/img/dyp2.jpeg",
      imageAlt:  "Dyplom za zajęcia III miejsca w plebiscycie Mistrzowie Urody w kategorii Fryzjer Roku w województwie podkarpackim",
      imgHorizontal:false
    },
    {
      imageSrc: "./assets/img/dy22.jpeg",
      imageAlt:  "Dyplom za zajęcia I miejsca w plebiscycie Mistrzowie Urody w kategorii Fryzjer Roku w powiecie rzeszowskim",
      imgHorizontal:false
    },
    {
      imageSrc: "./assets/img/dyp3.jpeg",
      imageAlt:  "Dyplom ukończenia szkolenia BaBylissPro",
      imgHorizontal:false
    },
    {
      imageSrc: "./assets/img/dyp4.jpg",
      imageAlt:  "Certyfikat ukończenia szkolenia Farba rozjaśniająca prowadzonego przez Katarzynę Złamaniec",
      imgHorizontal:true
    },
    {
      imageSrc: "./assets/img/dyp5.jpg",
      imageAlt:  "Certyfikat ukończenia szkolenia Farba rozjaśniająca prowadzonego przez Katarzynę Złamaniec",
      imgHorizontal:true
    },
  ];
  @Input() 
  showCount=true;
  previewImage=false;
  showMask=false;
  currentLightboxImage:Item=this.galleryData[0];
  currentIndex=0;
  controls=true;
  totalImageCount=0;
  constructor() {}
  ngOnInit(): void {
    
    this.totalImageCount=this.galleryData.length;
  }
  onPreviewImage(index:number):void{
    this.showMask=true;
    this.previewImage=true;
    this.currentIndex=index;
    this.currentLightboxImage=this.galleryData[index]
  }
  onAnimationEnd(event:AnimationEvent){
    if(event.toState==='void'){
      this.showMask=false;
    }
  }
  onClosePreview(){
    this.previewImage=false;
  }
  prev(): void{
this.currentIndex=this.currentIndex +1;
if(this.currentIndex > this.galleryData.length -1){
  this.currentIndex=0;
}
this.currentLightboxImage=this.galleryData[this.currentIndex];
  }
  next():void{
    this.currentIndex=this.currentIndex -1;
    if(this.currentIndex < 0){
      this.currentIndex = this.galleryData.length -1
    }
    this.currentLightboxImage=this.galleryData[this.currentIndex];
  }
}
