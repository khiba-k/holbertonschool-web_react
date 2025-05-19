import { cleanup, render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import App from "./App";

global.alert = jest.fn();

describe("App Component", () => {
  beforeEach(() => {
    // Render app component
    render(<App />);
  });

  // Test if app component renders Header component
  it.skip("Renders Header component", () => {
    const heading = screen.getByRole("heading", {
      level: 1,
      name: /school dashboard/i,
    });
    expect(heading).toBeInTheDocument();
  });

  // Test if app component renders Login component
  it.skip("Renders Login Component", () => {
    const loginText = screen.getByText(/Login to access the full dashboard/i);
    expect(loginText).toBeInTheDocument();
  });

  // Test if app component renders Footer component
  it.skip("Renders Footer Component", () => {
    expect(screen.getByText(/Copyright/i)).toBeInTheDocument();
  });

  // Test if login is rendered when isLoggedIn is false
  it.skip("CourseList is rendered when isLoggedIn is false", () => {
    cleanup();

    const rendered = render(<App />);
    const container = rendered.container;

    // Get courseList
    const loginComponent = container.querySelector(".App-body");

    // Assert that CourseList exists
    expect(loginComponent).toBeInTheDocument();
  });

  // Test if courseList is rendered when isLoggedIn is true
  it.skip("CourseList is rendered when isLoggedIn is true", () => {
    cleanup();

    const rendered = render(<App isLoggedIn={true} />);
    const container = rendered.container;

    // Get courseList
    const courseList = container.querySelector("#CourseList");

    // Assert that CourseList exists
    expect(courseList).toBeInTheDocument();
  });

  // Test if logOut function is called once when ctrl h combo is clicked
  it.skip("Logout function gets called once", async () => {
    cleanup();

    // Prop function
    const logOut = jest.fn();

    render(<App logOut={logOut}/>);

    // Simulate keyboard combo click
    await userEvent.keyboard("{Control>}h{/Control}");

    // Assert that logOut gets called once
    expect(logOut).toBeCalledTimes(1);
  })

  // Test if alert function is called and has correct string
  it.skip("Alert function is called", async () => {
    cleanup();

    // Spy on alert function
    // const alertSpy = jest.spyOn(window, 'alert').mockImplementation(() => {});
    
    render(<App/>);

    // Simulate keyboard combo click
    await userEvent.keyboard("{Control>}h{/Control}");

    // Assert that alert is called with 'Logging you out'
    expect(global.alert).toHaveBeenCalledWith("Logging you out");

    // alertSpy.mockRestore();
  })

  // Test if courselist Header is displayed when logged is true
  it("CourseList Heading is displayed", () => {
    cleanup();

    render(<App isLoggedIn={true}/>)

    // Get heading element
    const heading = screen.getByRole("heading", {
      level: 2,
      name: /Course List/i
    });

    // Assert that heading exists
    expect(heading).toBeInTheDocument();
  })

  // Test if Log In to Continue Header is displayed when logged is False
  it("Login to continue Heading is displayed", () => {
    cleanup();

    render(<App/>)

    // Get heading element
    const heading = screen.getByRole("heading", {
      level: 2,
      name: /Log in to continue/i
    });

    // Assert that heading exists
    expect(heading).toBeInTheDocument();
  })

  // Test if News section is rendered
  it("News Section is rendered", () => {
    cleanup();

    render(<App/>)

    // Get heading element
    const heading = screen.getByRole("heading", {
      level: 2,
      name: /News from the School/i
    });

    // Get paragraph element
    const paragraph = screen.getByText(/Holberton School News goes here/i
    )

    // Assert that heading and paragraph exists
    expect(heading).toBeInTheDocument();
    expect(paragraph).toBeInTheDocument();
  })
});
