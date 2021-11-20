import { render, screen } from "@testing-library/react";
import { BrowserRouter } from "react-router-dom";
import Header from "./Header";

test("renders link with the text Movies to chill to", () => {
  render(
    <BrowserRouter>
      <Header />
    </BrowserRouter>
  );
  const linkElement = screen.getByRole("link", { name: "Movies to chill to" });
  expect(linkElement).toBeInTheDocument();
});

test("renders link with the text watchlist", () => {
  render(
    <BrowserRouter>
      <Header />
    </BrowserRouter>
  );
  const linkElement = screen.getByRole("link", { name: "Watchlist" });
  expect(linkElement).toBeInTheDocument();
});

test("div has classname of header", () => {
  const { container } = render(
    <BrowserRouter>
      <Header />
    </BrowserRouter>
  );
  const i = container.firstChild;
  expect(i).toHaveClass("Header");
});
