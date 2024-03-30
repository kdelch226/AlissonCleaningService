import { Component, Input, OnInit } from '@angular/core';
import { Valeur } from '../model/valeurs';

@Component({
  selector: 'app-card',
  templateUrl: './card.component.html',
  styleUrl: './card.component.css'
})
export class CardComponent implements OnInit{
  @Input() valeur={} as Valeur;


  ngOnInit(): void {
    
  }
}
