import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { getMovies } from '../services/fakeMovieService';
import { getGenres } from '../services/fakeGenreService';
import Pagination from './common/Pagination';
import paginate from '../utils/paginate';
import ListGroup from './common/ListGroup';
import MoviesTable from './MoviesTable';
import SearchBox from './SearchBox';
import _ from 'lodash';

class Movies extends Component {
    state = {
        movies: [],
        genres: [],
        currentPage: 1,
        pageSize: 4,
        searchQuery: "",
        selectedGenre: null,
        sortColumn: { path: 'title', order: 'asc' }
    }

    componentDidMount() {
        console.log('component did mount');
        const genres = [{ _id: '', name: 'All Genres' }, ...getGenres()];
        this.setState({ movies: getMovies(), genres })
    }

    handleSearch = query => {
        this.setState({ searchQuery: query, selectedGenre: null, currentPage: 1 });
    }

    handleDelete = movie => {
        const movies = this.state.movies.filter(m => m._id !== movie._id);
        this.setState({ movies });
    }

    toggleLike = movie => {
        const movies = [...this.state.movies];
        const index = movies.indexOf(movie);
        movies[index] = { ...movie };
        movies[index].liked = !movies[index].liked;
        this.setState({ movies });
    }

    handlePageClick = page => {
        this.setState({ currentPage: page });
    }

    handleGenreSelected = genre => {
        this.setState({ selectedGenre: genre, currentPage: 1, searchQuery: "" });
    }

    handleSort = sortColumn => {
        this.setState({ sortColumn });
    }

    paginatedArray = () => {
        const { movies, currentPage, pageSize, selectedGenre, sortColumn, searchQuery } = this.state;
        let filtered;
        if (searchQuery) {
            filtered = movies.filter(m => m.title.toLowerCase().startsWith(searchQuery.toLowerCase()));
        }
        else {
            filtered = selectedGenre && selectedGenre._id ? movies.filter(m => m.genre.name === selectedGenre.name) : movies;
        }
        const sorted = _.orderBy(filtered, [sortColumn.path], [sortColumn.order]);
        const newMovies = paginate(sorted, currentPage, pageSize);
        const count = filtered.length;
        return ({ count, newMovies });
    }

    render() {
        console.log('Movies');
        const { currentPage, pageSize, genres, selectedGenre, sortColumn } = this.state;
        const { count, newMovies } = this.paginatedArray();
        return (

            <div className='row'>
                <div className='col-3 m-5'>
                    <ListGroup genres={genres} onGenreSelected={this.handleGenreSelected} selectedGenre={selectedGenre} />
                </div>
                <div className='col'>
                    <Link to='/movies/new' className='btn btn-primary m-3'>New Movie</Link>
                    <h1>showing {count} Movies</h1>
                    <SearchBox onChange={this.handleSearch} value={this.state.searchQuery} />
                    <MoviesTable newMovies={newMovies} onDelete={this.handleDelete} onLike={this.toggleLike} onSort={this.handleSort} sortColumn={sortColumn} />
                    <Pagination count={count} currentPage={currentPage} pageSize={pageSize} onClick={this.handlePageClick} />
                </div>
            </div>
        );
    }
}

export default Movies;