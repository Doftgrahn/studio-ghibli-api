import { Component, OnInit } from '@angular/core';
import { Studio } from '../shared/studio';
import { DataService } from '../shared/data.service';

@Component({
  selector: 'app-ghibli',
  templateUrl: './ghibli.component.html',
  styleUrls: ['./ghibli.component.scss']
})
export class GhibliComponent implements OnInit {
  ghibliUrl: Studio = null;


  constructor(private dataService: DataService) { }

  ngOnInit() {
    this.showMeThatGhibli();

  }



  showMeThatGhibli() {
    this.dataService.getGhibli().subscribe(
      ghibliData => {
        console.log(ghibliData)
        this.ghibliUrl = ghibliData
      }
    )
  }



}
