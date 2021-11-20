import { render, screen } from "@testing-library/react";
import MovieObject from "./MovieObject";

test("renders movie to page", () => {
  render(
    <MovieObject
      movie={{
        id: 123,
        title: "abc123",
        adult: false,
        genre_ids: [1, 2, 3],
        poster_path: "www.image.com",
        vote_average: 32,
      }}
    />
  );
  const li = screen.getByRole("listitem", { name: "" });
  expect(li).toBeInTheDocument();
});

test("the root element has a class of MovieObject", () => {
  const { container } = render(
    <MovieObject
      movie={{
        id: 123,
        title: "abc123",
        adult: false,
        genre_ids: [1, 2, 3],
        poster_path: "www.image.com",
        vote_average: 32,
      }}
    />
  );
  const componentElement = container.firstChild;
  expect(componentElement).toHaveClass("MovieObject");
});

test("the root element has a class of watchlist", () => {
  const { container } = render(
    <MovieObject
      movie={{
        id: 123,
        title: "abc123",
        adult: false,
        genre_ids: [1, 2, 3],
        poster_path: "www.image.com",
        vote_average: 32,
      }}
    />
  );
  const i = container.firstChild;
  expect(i).toHaveClass("MovieObject");
});
