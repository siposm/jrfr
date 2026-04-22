import { Component } from '@angular/core';
import { StatisticsService } from '../statistics.service';

@Component({
  selector: 'app-stats',
  templateUrl: './stats.component.html',
  styleUrl: './stats.component.css'
})
export class StatsComponent {
  constructor(public statService: StatisticsService) {}
}
