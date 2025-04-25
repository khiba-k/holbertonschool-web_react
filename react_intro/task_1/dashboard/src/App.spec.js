import { render, screen } from "@testing-library/react";
import App from "./App";

test('h1 element with the text School Dashboard is rendered', () => {
  render(<App />);
  const heading = screen.getByRole('heading', { name: /School Dashboard/i });
  expect(heading).toBeInTheDocument();
});

test('the text content within the 2 p elements in the app-body and app-footer divs matches', () => {
  render(<App />);
  const divbody = screen.getByText(/Login to access the full dashboard/i);
  const divfooter = screen.getByText(/Copyright 2025 - holberton School/i);

  expect(divbody).toBeInTheDocument();
  expect(divfooter).toBeInTheDocument();
});

test('an img element is rendered', () => {
  render(<App />);
  const image = screen.getByAltText(/holberton logo/i);
  expect(image).toBeInTheDocument();
});

