import { Component } from '@angular/core';
import { ActivatedRoute, ParamMap, RouterModule, RouterOutlet } from '@angular/router';
import { Router } from '@angular/router';
@Component({
  selector: 'app-employee-detail',
  standalone: true,
  imports: [RouterOutlet, RouterModule],
  templateUrl: './employee-detail.component.html',
  styleUrl: './employee-detail.component.css'
})
export class EmployeeDetailComponent {
  public empId: number = 0;
  constructor(private route: ActivatedRoute, private router: Router) {
  }
  ngOnInit() {
    this.route.paramMap.subscribe((param: ParamMap) => {
      let te = param.get('id');
      if (te != null) {
        this.empId = parseInt(te);
      }
    })
  }
  goNext() {
    let nextId = this.empId + 1;
    this.router.navigate(['/employee', nextId])
  }
  goPrevious() {
    let previousID = this.empId - 1;
    this.router.navigate(['/employee', previousID])
  }
  gotEmployee() {
    let employeeid = this.empId ? this.empId : null;
    this.router.navigate(['/Employees', { id: employeeid }]);
  }
  showTest3() {
    this.router.navigate(['test3'], { relativeTo: this.route })
  }
  showTest() {
    this.router.navigate(['test'], { relativeTo: this.route });
  }
}
