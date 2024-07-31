import { Component, OnInit } from '@angular/core';
import { MovieService } from '../movie.service';

@Component({
  selector: 'app-movie-list',
  templateUrl: './movie-list.component.html',
  styleUrls: ['./movie-list.component.css']
})
export class MovieListComponent implements OnInit {
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
