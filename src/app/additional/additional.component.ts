import { Component, OnInit } from '@angular/core';
import { DataService } from '../data.service';
import { Observable } from 'rxjs';
import { Data } from '@angular/router';

@Component({
  selector: 'app-additional',
  templateUrl: './additional.component.html',
  styleUrls: ['./additional.component.scss']
})
export class AdditionalComponent implements OnInit {

  usersAddress$: Object;
  constructor(private data: DataService) { }

  ngOnInit() {
    this.data.getUsers().subscribe(
      data => this.usersAddress$ = data
    )
  }

}
