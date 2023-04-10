import { Component, OnDestroy, OnInit } from '@angular/core';
import { map, take, takeUntil } from 'rxjs';
import { DeveloperModel } from 'src/app/core/models/developer.model';
import { DeveloperService } from 'src/app/core/services/developer/developer.service';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss']
})
export class DashboardComponent implements OnInit {
  tasks: DeveloperModel[] = [];

  constructor(private service: DeveloperService) {}

  ngOnInit(): void {
      this.getTasks();
  }

  getTasks() {
    this.service.getDeveloperList().subscribe((response) => {
      this.tasks = response;
      this.tasks.forEach((task) => {
        if (task.state == "In Progress") {
          task.state = 'in-progress';
        } else if (task.state == "Completed") {
          task.state = 'completed';
        } else if (task.state == "Defined") {
          task.state = 'defined';
        } else {
          task.state = 'testing';
        }
      })
    });
  }
}
