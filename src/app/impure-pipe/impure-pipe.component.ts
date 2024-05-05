import { Component, OnInit } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { FilterPipe } from '../filter.pipe';
import { CommonModule, DatePipe,UpperCasePipe } from '@angular/common';

@Component({
  selector: 'app-impure-pipe',
  standalone: true,
  imports: [FormsModule, DatePipe, FilterPipe, UpperCasePipe, CommonModule],
  templateUrl: './impure-pipe.component.html',
  styleUrl: './impure-pipe.component.css',
 
})
export class ImpurePipeComponent implements OnInit {

  filteredString: string = '';
  ngOnInit(): void {
    
  }
  users:any[] = [
    {
      name:'Vishu',
      joinedDate: new Date(15,2,2003)
    },
    {
      name:'Neelam',
      joinedDate: new Date(15,2,2003)
    },
    {
      name:'Rani',
      joinedDate: new Date(15,2,2003)
    },
  ]

  onAddUser(){
    console.log("---------inside onAddUser()-------");
    
    this.users.push({
      name:"Amma",
      joinedDate: new Date(15,2,2003)
    })
  }
}
