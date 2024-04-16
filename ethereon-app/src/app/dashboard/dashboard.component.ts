import { Component } from '@angular/core';
import { ApiService } from '../api.service';
import { HttpClient } from '@angular/common/http';


@Component({
  selector: 'app-dashboard',
  standalone: true,
  imports: [],
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss']  
})

export class DashboardComponent {

  public getJsonValue: any;
  public PostJsonValue: any;

  constructor(private http: HttpClient) {}

  ngOnInit() {
   this.getMethod();
  }
  public getMethod(){
    this.http.get('https://jsonplaceholder.typicode.com/posts/1').subscribe((data)=> {console.log(data)
    this.getJsonValue = data;
    }
    );
    
  }
}
