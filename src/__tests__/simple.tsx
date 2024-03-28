import * as React from "react";
import { render } from "@testing-library/react";

const Title = () => <h1 data-testid="hero-title">Hello, World!</h1>;

test("Displays the correct title", () => {
  const { getByTestId } = render(<Title />);

  expect(getByTestId("hero-title").textContent).toBe("Hello, World!");
});
