import { Component, Input, Output, EventEmitter, OnInit, AfterViewInit,OnDestroy } from '@angular/core';

@Component({
  selector: 'app-img',
  templateUrl: './img.component.html',
  styleUrls: ['./img.component.scss']
})
export class ImgComponent implements OnInit, AfterViewInit,OnDestroy {

 img = 'xd';
 @Input('img')
 set chageImg(newImg: string){
  this.img = newImg;
  console.log('change just img: ', this.img);
 }

 @Input() alt = '';
 @Output() loaded = new EventEmitter<string>();
 imageDefault = './assets/images/default.png';
 //counter = 0;
 //counterFn: number | undefined;

 constructor(){
  //before render
  //NADA de async
  //el constructor se ejecuta sola una vez
  console.log('Este es el constructor', 'imgValue: ', this.img);
 }
/*
 ngOnChanges(changes: SimpleChanges) {
  // before - during render
  // changes inputs -- multiples times
  console.log('ngOnChanges', 'imgValue =>', this.img);
}
*/


ngOnInit(): void {
  // before render
  // async - fetch -- once time
  console.log('ngOnInit', 'imgValue =>', this.img);
  //this.counterFn = window.setInterval(()=>{
    //this.counter +=1;
    //console.log('run counter');
  //},1000)
}


ngAfterViewInit() {
  // after render
  // handler children -- once time
  console.log('ngAfterViewInit');
}

ngOnDestroy() {
  // delete -- once time
  console.log('ngOnDestroy');
  //window.clearInterval(this.counterFn);
}

 imgError(){
  this.img=this.imageDefault;
 }
 imgLoad(){
  console.log('loaded hijo');
  this.loaded.emit(this.img);
 }
}
