export interface Movie {
    name: string;
    year: string;
    srcImg: string;
}

export interface MovieLibrary {
    films: Movie[];
    cartoons: Movie[];
    series: Movie[];
}

export const MovieLibrary: MovieLibrary = {
    films: [
        {name: '1+1',               year: '2011', srcImg: '/sources/1+1.jpg'},
        {name: 'Blade Runner 2049', year: '2017', srcImg: '/sources/blade_Runner_2049.jpg'},
        {name: 'Inception',         year: '2010', srcImg: '/sources/inception.jpg'},
        {name: 'Persian Lessons',   year: '2020', srcImg: '/sources/persian_Lessons.jpg'},
        {name: 'The Gentlemen',     year: '2019', srcImg: '/sources/the_Gentlemen.jpg'},
        {name: 'The Green Mile',    year: '1999', srcImg: '/sources/the_Green_Mile.jpg'},
    ],
    cartoons: [
        {name: 'Coco',        year: '2017', srcImg: '/sources/coco.jpg'},
        {name: 'Inside Out',  year: '2015', srcImg: '/sources/inside_Out.jpg'},
        {name: 'Ratatouille', year: '2007', srcImg: '/sources/ratatouille.jpg'},
        {name: 'Soul',        year: '2020', srcImg: '/sources/soul.jpg'},
        {name: 'Spider-Man',  year: '2018', srcImg: '/sources/spider-Man.jpg'},
        {name: 'WALL·E',      year: '2008', srcImg: '/sources/WALLE.jpg'},
    ],
    series:[
        {name: 'Better Call Saul',  year: '2015-2022', srcImg: '/sources/better_Call_Saul.jpg'},
        {name: 'Breaking Bad',      year: '2008-2013', srcImg: '/sources/breaking_Bad.jpg'},
        {name: 'Game of Thrones',   year: '2011-2019', srcImg: '/sources/game_Of_Thrones.jpg'},
        {name: 'Sherlock',          year: '2010-2017', srcImg: '/sources/sherlock.jpg'},
        {name: 'The Artful Dodger', year: '2023',      srcImg: '/sources/the_Artful_Dodger.jpg'},
        {name: 'House',             year: '2004-2012', srcImg: '/sources/house.jpg'},
    ]
};