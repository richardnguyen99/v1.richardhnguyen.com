import * as React from "react";
import { render, waitFor } from "@testing-library/react";
import "@testing-library/jest-dom";
import {
  Router,

  createHistory,
  createMemorySource,
  LocationProvider,
  RouteComponentProps
} from "@reach/router";

import HeaderLink from "../HeaderLink";


const MockAbout = (_props: RouteComponentProps) => <div>Mock About</div>;
const MockHome = (_props: RouteComponentProps) => <div>Mock Home</div>;
const MockProjects = (_props: RouteComponentProps) => <div>Mock Projects</div>;

const MockApp = () => {
  return (
    <div>
      <HeaderLink name="Home" to="/" />
      <HeaderLink name="About" to="/about" />
      <HeaderLink name="Projects" to="/projects" />
      <Router >
        <MockHome path="/" />
        <MockAbout path="/about" />
        <MockProjects path="/projects" />
      </Router>
    </div>
  );
};

const renderWithRouter = (ui: React.ReactElement, { route = "/" } = {}) => {
  const source = createMemorySource(route);
  const history = createHistory(source);

  return {
    ...render(
      <LocationProvider history={history}>{ui}</LocationProvider>
    ),
    history
  };
};

describe("HeaderLink", () => {
  it("should render with correct classNames and attributes", () => {
    const { container, getByRole } = render(<HeaderLink name="Home" to="/" />);

    // Check styles
    expect(container.firstChild).toHaveClass("inline-block relative"); // Layout
    expect(container.firstChild).toHaveClass("p-5 font-semibold text-lg leading-6"); // Typography
    expect(container.firstChild).toHaveClass("hover:text-sky-600 dark:hover:text-sky-500"); // Hover

    // Check content
    expect(container.firstChild).toHaveTextContent("Home");

    // Check attributes
    expect(getByRole("link")).toHaveAttribute("href", "/");
    expect(getByRole("link")).toHaveAttribute("data-testid", "header-link");

    // Check if the link is Gatsby Link
    expect(getByRole("link")).toHaveAttribute("data-testlink", "/");
    expect(getByRole("link")).toHaveAttribute("data-activeclassname", "text-sky-500 dark:text-sky-400");
  });

  it("should navigate to the correct page", async () => {
    const { container, history: {navigate}} = renderWithRouter(<MockApp />, { route: "/" });

    // Check if the home (default) page is rendered
    expect(container).toHaveTextContent("Mock Home");

    navigate("/about");

    // Check if the about page is rendered
    await waitFor(() => {
      expect(container).toHaveTextContent("Mock About");
    });

    navigate("/projects");

    // Check if the projects page is rendered
    await waitFor(() => {
      expect(container).toHaveTextContent("Mock Projects");
    });
  });
});
