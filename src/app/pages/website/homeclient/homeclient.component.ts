import { Component, OnInit } from '@angular/core';
import { ValeursService } from '../../../service/valeurs.service';
import { Valeur } from '../../../model/valeurs';
import { ServicedataService } from '../../../service/servicedata.service';

@Component({
  selector: 'app-homeclient',
  templateUrl: './homeclient.component.html',
  styleUrl: './homeclient.component.css'
})
export class HomeclientComponent implements OnInit {

  values={} as Valeur [] ;

  constructor(private valeurGroup:ValeursService) {}

  ngOnInit(): void {
    this.values=this.valeurGroup.GetValeurs();
   
  }
}
