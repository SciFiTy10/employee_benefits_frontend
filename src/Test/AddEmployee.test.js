import React from "react";
import { render, screen } from "@testing-library/react";
import AppContextProvider from "../Context/AppContextProvider";
import Content from "../Components/Layout/AppMain/Content/Content";
import "@testing-library/jest-dom";
import userEvent from "@testing-library/user-event";

describe("add employee", () => {
  it("renders an empty employee", () => {
    const { getByLabelText } = render(
      <AppContextProvider>
        <Content />
      </AppContextProvider>
    );

    //click the add employee button
    userEvent.click(getByLabelText("add employee button"));
    //check whether the add a new employee text is displayed
    expect(screen.getByText("Add A New Employee")).toBeInTheDocument();
  });

  it("throws an error when an employee doesn't have a first name", () => {
    const { getByLabelText } = render(
      <AppContextProvider>
        <Content />
      </AppContextProvider>
    );
    //click the add employee button
    userEvent.click(getByLabelText("add employee button"));
    //click the add employee button
    userEvent.click(getByLabelText("submit button"));
    //check whether the error is displayed
    expect(
      screen.getByText("Please enter a first name for the employee.")
    ).toBeInTheDocument();
  });

  it("throws an error when an employee doesn't have a last name", () => {
    const { getByLabelText } = render(
      <AppContextProvider>
        <Content />
      </AppContextProvider>
    );
    //click the add employee button
    userEvent.click(getByLabelText("add employee button"));
    //enter a first name
    userEvent.type(screen.getByLabelText("first name employee"), "test");
    //click the add employee button
    userEvent.click(getByLabelText("submit button"));
    //check whether the error is displayed
    expect(
      screen.getByText("Please enter a last name for test.")
    ).toBeInTheDocument();
  });

  it("throws an error when an employee doesn't have an email", () => {
    const { getByLabelText } = render(
      <AppContextProvider>
        <Content />
      </AppContextProvider>
    );
    //click the add employee button
    userEvent.click(getByLabelText("add employee button"));
    //enter a first name
    userEvent.type(screen.getByLabelText("first name employee"), "test");
    //enter a last name
    userEvent.type(screen.getByLabelText("last name employee"), "test");
    //click the add employee button
    userEvent.click(getByLabelText("submit button"));
    //check whether the error is displayed
    expect(
      screen.getByText("Please enter an email for test.")
    ).toBeInTheDocument();
  });
  it("throws an error when an employee has an invalid email", () => {
    const { getByLabelText } = render(
      <AppContextProvider>
        <Content />
      </AppContextProvider>
    );
    //click the add employee button
    userEvent.click(getByLabelText("add employee button"));
    //enter a first name
    userEvent.type(screen.getByLabelText("first name employee"), "test");
    //enter a last name
    userEvent.type(screen.getByLabelText("last name employee"), "test");
    //enter an invalid email
    userEvent.type(screen.getByLabelText("email employee"), "test@gmail");
    //click the add employee button
    userEvent.click(getByLabelText("submit button"));
    //check whether the error is displayed
    expect(
      screen.getByText(
        `Please enter an email in a valid format for test. Ex: "name@gmail.com"`
      )
    ).toBeInTheDocument();
  });
});

// //add an item from the menu
// userEvent.click(getByTestId("add one Royale With Cheese menu 1"));
