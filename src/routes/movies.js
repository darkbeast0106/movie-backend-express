import express from 'express';
import movies from "../data/movies.json" assert { type: "json" };

const router = express.Router();

router.get('/', (request, response) => {
    response.send(movies);
});

router.post('/', (request, response) => {
    const movie = request.body;
    const newId = Math.max(...(movies.map(movie => movie.id))) + 1;
    movie.id = newId;
    movies.push(movie);
    response.status(201).send(movie);
});

router.get("/:id", (request, response) => {
    const { id } = request.params;

    const movie = movies.find((movie) => movie.id == id);
    if (!movie) {
        response.status(404).send({ message: "Movie Not found" });
        return;
    }

    response.send(movie)
});

router.delete('/:id', (request, response) => {
    const { id } = request.params;
    const movie = movies.find((movie) => movie.id == id);
    if (!movie) {
        response.status(404).send({ message: "Movie Not found" });
        return;
    }
    const index = movies.indexOf(movie);
    movies.splice(index, 1);
    response.send();
});

router.patch('/:id', (request, response) => {
    const { id } = request.params;
    const { title, category, duration } = request.body;
    const movie = movies.find((movie) => movie.id == id);
    if (!movie) {
        response.status(404).send({ message: "Movie Not found" });
        return;
    }

    if (title) {
        movie.title = title;
    };
    if (category) {
        movie.category = category;
    };
    if (duration) {
        movie.duration = duration;
    };

    response.send(movie);
});

router.put('/:id', (request, response) => {
    const { id } = request.params;
    const newMovie = request.body;
    newMovie.id = id;
    const movie = movies.find((movie) => movie.id == id);
    if (!movie) {
        response.status(404).send({ message: "Movie Not found" });
        return;
    }
    const index = movies.indexOf(movie);
    movies[index] = newMovie;

    response.send(movie);
});

export default router;