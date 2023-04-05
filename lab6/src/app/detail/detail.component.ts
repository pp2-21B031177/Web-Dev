import { Component, OnInit } from '@angular/core';
import { ConfigService } from '../config.service';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-detail',
  templateUrl: './detail.component.html',
  styleUrls: ['./detail.component.scss']
})
export class DetailComponent implements OnInit {
  response: any | undefined;
  id: number = 0;
  constructor(private configService: ConfigService, private route: ActivatedRoute) {}
  ngOnInit(): void {
    this.route.params.subscribe((params) => {this.id = params['id']})
    this.configService.getDataDetails(this.id).subscribe((response) => {this.response = response});
  }
}
