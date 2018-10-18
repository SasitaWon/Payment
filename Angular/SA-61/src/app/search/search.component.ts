import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.css']
})
export class SearchComponent implements OnInit {
  private id:String;

  

  constructor(private router:Router) { }

  ngOnInit() {

    
  }
  searchid(){
    if(this.id ==''){
      alert('กรุณากรอกIDผู้ป่วย');
    }else{
      this.router.navigate(['paymentbill']);
    }
  }
}

  