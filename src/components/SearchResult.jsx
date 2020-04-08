import React from "react";
export default ({ films }) => (
  <>
    {films.map(movie => (
      <figure key={movie.id.videoId} className="fig">
        <figcaption className="title">
          <a
            rel="noopener noreferrer"
            target="_blank"
            href={"https://www.youtube.com/watch?v=" + movie.id.videoId}
          >
            {movie.snippet.title}
          </a>
        </figcaption>
        <a
          rel="noopener noreferrer"
          target="_blank"
          href={"https://www.youtube.com/watch?v=" + movie.id.videoId}
        >
          <img src={movie.snippet.thumbnails.high.url} alt="Logo" />
        </a>
        <figcaption>{movie.snippet.description}</figcaption>
      </figure>
    ))}
  </>
);
