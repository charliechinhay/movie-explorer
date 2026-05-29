//Global mock for movieService to be used in tests
module.exports = {
  searchMovies: jest.fn().mockResolvedValue([]),
  getMovieDetails: jest.fn().mockResolvedValue({}),
  getTrendingMovies: jest.fn().mockResolvedValue([]),
};
