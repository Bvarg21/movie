import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { MovieService } from './movie.service';
import { FormsModule } from '@angular/forms';
import { NgxPaginationModule, PaginationService } from 'ngx-pagination';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, FormsModule, NgxPaginationModule, CommonModule],
  providers: [PaginationService],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css',
})
export class AppComponent {
  movies: any[] = [];
  filteredMovies: any[] = [];
  searchTerm: string = '';
  minDate: string = '';
  maxDate: string = '';
  page: number = 1;
  pageSize: number = 10;

  constructor(private movieService: MovieService) { }

  ngOnInit(): void {
    this.movieService.getMovies().subscribe(data => {
      this.movies = data.results;
      this.filteredMovies = this.movies;
    });
  }

  filterMovies(): void {
    this.filteredMovies = this.movies.filter(movie => {
      const matchName = movie.title.toLowerCase().includes(this.searchTerm.toLowerCase());
      const matchDate = (!this.minDate || new Date(movie.release_date) >= new Date(this.minDate)) &&
                        (!this.maxDate || new Date(movie.release_date) <= new Date(this.maxDate));
      return matchName && matchDate;
    });
  }
}
