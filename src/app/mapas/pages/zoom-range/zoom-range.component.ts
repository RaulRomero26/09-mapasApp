import { AfterViewInit, Component, ElementRef, OnInit, ViewChild } from '@angular/core';

import * as mapboxgl from 'mapbox-gl';

@Component({
  selector: 'app-zoom-range',
  templateUrl: './zoom-range.component.html',
  styles: [
    `
    .mapa-container {
      width: 100%;
      height: 100%;
    }

    .row {
      background-color: white;
      position: fixed;
      bottom: 50px;
      left:50px;
      padding: 10px;
      border-radius: 5px;
      z-index: 999;
    }
    `
  ]
})
export class ZoomRangeComponent implements AfterViewInit {

  
  @ViewChild('mapa') divMapa!: ElementRef;
  mapa!: mapboxgl.Map;
  zoomLevel: number = 10;

  constructor() { }

  ngAfterViewInit(): void {

    this.mapa = new mapboxgl.Map({
      container: this.divMapa.nativeElement,
      style: 'mapbox://styles/mapbox/streets-v11',
      center: [  -98.21521330594446, 19.022949938201375 ],
      zoom: this.zoomLevel,
      });

      this.mapa.on('zoom', (ev) => {
        this.zoomLevel = this.mapa.getZoom();
      })
    }
    

  zoomOut(){
    this.mapa.zoomOut();
    
  }

  zoomIn(){
    this.mapa.zoomIn();
  
  }

}
