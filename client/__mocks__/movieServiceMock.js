/* global module */
module.exports = {
  searchMovies: jest.fn().mockResolvedValue([]),
  getMovieDetails: jest.fn().mockResolvedValue({}),
  getTrendingMovies: jest.fn().mockResolvedValue([]),
};
