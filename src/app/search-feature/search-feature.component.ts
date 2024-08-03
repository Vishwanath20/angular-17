import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-search-feature',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './search-feature.component.html',
  styleUrl: './search-feature.component.css'
})
export class SearchFeatureComponent {

  displayedHotels: any[] = [];
  searchTerm: string = '';
  hotels:any[] = [
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

  ngOnInit() {
    this.displayedHotels = [...this.hotels];
  }

  onSearchData(){
    if (this.searchTerm) {
      this.displayedHotels = this.hotels.filter(hotel =>
        hotel.name.toLowerCase().includes(this.searchTerm.toLowerCase())
      );
    } else {
      this.displayedHotels = [...this.hotels];
    }
  }

}
