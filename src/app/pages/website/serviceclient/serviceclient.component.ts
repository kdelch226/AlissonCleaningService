import { Component, OnInit } from '@angular/core';
import { Valeur } from '../../../model/valeurs';
import { Title } from '@angular/platform-browser';
import { ServicedataService } from '../../../service/servicedata.service';


@Component({
  selector: 'app-serviceclient',
  templateUrl: './serviceclient.component.html',
  styleUrl: './serviceclient.component.css'
})
export class ServiceclientComponent implements OnInit{
  services= {} as Valeur[];
  isCollapse: boolean=false;
  constructor(private title:Title, private lesServices:ServicedataService){}   

  ngOnInit(): void {
    this.services=this.lesServices.GetServices()
  }

  allerVersElement(id: string): void {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: "smooth", block: "start", inline: "nearest" });
    }
  }
  
}
