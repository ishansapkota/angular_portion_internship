import { Component } from '@angular/core';
import { AdminDashboardComponent } from '../admin-dashboard/admin-dashboard.component';
import { RouterModule } from '@angular/router';

@Component({
  selector: 'app-admin-dashboard-home',
  standalone: true,
  imports: [AdminDashboardComponent,RouterModule],
  templateUrl: './admin-dashboard-home.component.html',
  styleUrl: './admin-dashboard-home.component.css'
})
export class AdminDashboardHomeComponent {

}
