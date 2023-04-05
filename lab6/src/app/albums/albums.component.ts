import { Component, OnInit } from '@angular/core';
import { ConfigService } from '../config.service';

@Component({
  selector: 'app-albums',
  templateUrl: './albums.component.html',
  styleUrls: ['./albums.component.scss']
})
export class AlbumsComponent implements OnInit {
  response: any[] | undefined;
  constructor(private configService: ConfigService) {
    
  }
  ngOnInit(): void {
    this.configService.getData().subscribe((response) => {this.response = response});
  }
}
