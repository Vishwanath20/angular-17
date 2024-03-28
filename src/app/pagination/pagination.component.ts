import { Component } from '@angular/core';
import { DataService } from './data.service';
import { CommonModule } from '@angular/common';
@Component({
  selector: 'app-pagination',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './pagination.component.html',
  styleUrl: './pagination.component.css'
})
export class PaginationComponent {

  currentPage = 1;
  pageSize = 10;
  totalItems = 0;
  totalPages = 0;
  data: any;

  constructor(private dataService: DataService) { }

  ngOnInit(): void {
    this.loadPage(this.currentPage);
    console.log('---------nggg----PaginationComponent---', );
    
  }

  
  loadPage(pageNumber: number): void {
    this.dataService.getData(pageNumber, this.pageSize)
      .subscribe(response => {
        this.data = response.body; // Access response body
        console.log('------this.data------', this.data);
        this.totalItems = Number(response.headers.get('X-Total-Count')); // Access custom header
        this.totalPages = Math.ceil(this.totalItems / this.pageSize);
      });
  }

  nextPage(): void {
   
    console.log("----nextPge--this.currentPage < this.totalPages", this.currentPage < this.totalPages);
      
    if (this.currentPage < this.totalPages) {
      this.currentPage++;
      this.loadPage(this.currentPage);
    }
  }

  prevPage(): void {
    if (this.currentPage > 1) {
      this.currentPage--;
      this.loadPage(this.currentPage);
    }
  }
}
