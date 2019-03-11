import { Component, OnInit } from '@angular/core';
import { Csu } from '../../dto/csu';
import { CsuServiceService } from '../../services/csu.service.service';
import { ToastrService } from 'ngx-toastr';


@Component({
  selector: 'app-credit-savings-unit',
  templateUrl: './credit-savings-unit.component.html',
  styleUrls: ['./credit-savings-unit.component.scss']
})
export class CreditSavingsUnitComponent implements OnInit {

  model = new Csu();

  constructor(
    private csuService: CsuServiceService,
    private toastr: ToastrService
  ) { }
  isCollapsed: Boolean = false;
  ngOnInit() {
  }

  addEmployee() {
    this.csuService.addCsu(this.model).subscribe(res => {
      if (res.status === 200) {
        console.log(res.status);
        alert('Save Successfully');
        this.toastr.success('Inserted successfully', 'CSU . Register');
      }
    });
  }
}
