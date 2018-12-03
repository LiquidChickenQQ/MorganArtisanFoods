import { Component, OnInit } from '@angular/core';
import { MapsService } from '../maps.service';

@Component({
  selector: 'app-find-it',
  templateUrl: './find-it.component.html',
  styleUrls: ['./find-it.component.scss']
})
export class FindItComponent implements OnInit {

  lat: string = '';
  lng: string = '';

  location: Object;

  constructor(private map: MapsService) { }


  ngOnInit() {
    this.map.getLocation().subscribe(data => {
      console.log(data);
      this.lat = data.latitude;
      this.lng = data.longitude;
    })
  }

}
