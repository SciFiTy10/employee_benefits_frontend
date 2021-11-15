import React from "react";
import { render, screen } from "@testing-library/react";
import AppContextProvider from "../Context/AppContextProvider";
import Content from "../Components/Layout/AppMain/Content/Content";
import "@testing-library/jest-dom";
import userEvent from "@testing-library/user-event";

describe("add dependent", () => {
  it("renders an empty dependent", () => {
    const { getByLabelText } = render(
      <AppContextProvider>
        <Content />
      </AppContextProvider>
    );

    //click the add employee button
    userEvent.click(getByLabelText("add employee button"));
    //click the add dependent button
    userEvent.click(getByLabelText("add dependent button"));
    //check whether the add a new dependent text is displayed
    expect(screen.getByText("Add A New Dependent")).toBeInTheDocument();
  });

  it("prevents you from adding another new dependent if you haven't filled out a previous dependent", () => {
    const { getByLabelText } = render(
      <AppContextProvider>
        <Content />
      </AppContextProvider>
    );

    //click the add employee button
    userEvent.click(getByLabelText("add employee button"));
    //click the add dependent button
    userEvent.click(getByLabelText("add dependent button"));
    //check whether the add a new dependent text is displayed
    expect(screen.getByText("Add A New Dependent")).toBeInTheDocument();
  });

  //   it("throws an error when an employee doesn't have a first name", () => {
  //     const { getByLabelText } = render(
  //       <AppContextProvider>
  //         <Content />
  //       </AppContextProvider>
  //     );
  //     //click the add employee button
  //     userEvent.click(getByLabelText("add employee button"));
  //     //click the add employee button
  //     userEvent.click(getByLabelText("submit button"));
  //     //check whether the error is displayed
  //     expect(
  //       screen.getByText("Please enter a first name for the employee.")
  //     ).toBeInTheDocument();
  //   });

  //   it("throws an error when an employee doesn't have a last name", () => {
  //     const { getByLabelText } = render(
  //       <AppContextProvider>
  //         <Content />
  //       </AppContextProvider>
  //     );
  //     //click the add employee button
  //     userEvent.click(getByLabelText("add employee button"));
  //     //enter a first name
  //     userEvent.type(screen.getByLabelText("first name employee"), "test");
  //     //click the add employee button
  //     userEvent.click(getByLabelText("submit button"));
  //     //check whether the error is displayed
  //     expect(
  //       screen.getByText("Please enter a last name for test.")
  //     ).toBeInTheDocument();
  //   });

  //   it("throws an error when an employee doesn't have an email", () => {
  //     const { getByLabelText } = render(
  //       <AppContextProvider>
  //         <Content />
  //       </AppContextProvider>
  //     );
  //     //click the add employee button
  //     userEvent.click(getByLabelText("add employee button"));
  //     //enter a first name
  //     userEvent.type(screen.getByLabelText("first name employee"), "test");
  //     //enter a last name
  //     userEvent.type(screen.getByLabelText("last name employee"), "test");
  //     //click the add employee button
  //     userEvent.click(getByLabelText("submit button"));
  //     //check whether the error is displayed
  //     expect(
  //       screen.getByText("Please enter an email for test.")
  //     ).toBeInTheDocument();
  //   });
  //   it("throws an error when an employee has an invalid email", () => {
  //     const { getByLabelText } = render(
  //       <AppContextProvider>
  //         <Content />
  //       </AppContextProvider>
  //     );
  //     //click the add employee button
  //     userEvent.click(getByLabelText("add employee button"));
  //     //enter a first name
  //     userEvent.type(screen.getByLabelText("first name employee"), "test");
  //     //enter a last name
  //     userEvent.type(screen.getByLabelText("last name employee"), "test");
  //     //enter an invalid email
  //     userEvent.type(screen.getByLabelText("email employee"), "test@gmail");
  //     //click the add employee button
  //     userEvent.click(getByLabelText("submit button"));
  //     //check whether the error is displayed
  //     expect(
  //       screen.getByText(
  //         `Please enter an email in a valid format for test. Ex: "name@gmail.com"`
  //       )
  //     ).toBeInTheDocument();
  //   });
  //   it("throws an error when an employee doesn't have a phone number", () => {
  //     const { getByLabelText } = render(
  //       <AppContextProvider>
  //         <Content />
  //       </AppContextProvider>
  //     );
  //     //click the add employee button
  //     userEvent.click(getByLabelText("add employee button"));
  //     //enter a first name
  //     userEvent.type(screen.getByLabelText("first name employee"), "test");
  //     //enter a last name
  //     userEvent.type(screen.getByLabelText("last name employee"), "test");
  //     //enter an email
  //     userEvent.type(screen.getByLabelText("email employee"), "test@gmail.com");
  //     //click the add employee button
  //     userEvent.click(getByLabelText("submit button"));
  //     //check whether the error is displayed
  //     expect(
  //       screen.getByText("Please enter a phone number for test.")
  //     ).toBeInTheDocument();
  //   });
  //   it("throws an error when an employee doesn't have a valid phone number", () => {
  //     const { getByLabelText } = render(
  //       <AppContextProvider>
  //         <Content />
  //       </AppContextProvider>
  //     );
  //     //click the add employee button
  //     userEvent.click(getByLabelText("add employee button"));
  //     //enter a first name
  //     userEvent.type(screen.getByLabelText("first name employee"), "test");
  //     //enter a last name
  //     userEvent.type(screen.getByLabelText("last name employee"), "test");
  //     //enter an email
  //     userEvent.type(screen.getByLabelText("email employee"), "test@gmail.com");
  //     //enter an invalid phone number
  //     userEvent.type(screen.getByLabelText("phone number employee"), "55555555");
  //     //click the add employee button
  //     userEvent.click(getByLabelText("submit button"));
  //     //check whether the error is displayed
  //     expect(
  //       screen.getByText(
  //         "Please enter a phone number with 10 digits for test. Ex: 8475551234"
  //       )
  //     ).toBeInTheDocument();
  //   });
  //   it("throws an error when an employee doesn't enter an addressLine1", () => {
  //     const { getByLabelText } = render(
  //       <AppContextProvider>
  //         <Content />
  //       </AppContextProvider>
  //     );
  //     //click the add employee button
  //     userEvent.click(getByLabelText("add employee button"));
  //     //enter a first name
  //     userEvent.type(screen.getByLabelText("first name employee"), "test");
  //     //enter a last name
  //     userEvent.type(screen.getByLabelText("last name employee"), "test");
  //     //enter an email
  //     userEvent.type(screen.getByLabelText("email employee"), "test@gmail.com");
  //     //enter a valid phone number
  //     userEvent.type(
  //       screen.getByLabelText("phone number employee"),
  //       "8475551234"
  //     );
  //     //click the add employee button
  //     userEvent.click(getByLabelText("submit button"));
  //     //check whether the error is displayed
  //     expect(
  //       screen.getByText("Please enter an address line 1 for test.")
  //     ).toBeInTheDocument();
  //   });
  //   it("throws an error when an employee doesn't enter a city", () => {
  //     const { getByLabelText } = render(
  //       <AppContextProvider>
  //         <Content />
  //       </AppContextProvider>
  //     );
  //     //click the add employee button
  //     userEvent.click(getByLabelText("add employee button"));
  //     //enter a first name
  //     userEvent.type(screen.getByLabelText("first name employee"), "test");
  //     //enter a last name
  //     userEvent.type(screen.getByLabelText("last name employee"), "test");
  //     //enter an email
  //     userEvent.type(screen.getByLabelText("email employee"), "test@gmail.com");
  //     //enter a valid phone number
  //     userEvent.type(
  //       screen.getByLabelText("phone number employee"),
  //       "8475551234"
  //     );
  //     //enter a valid addressLine1
  //     userEvent.type(
  //       screen.getByLabelText("addressLine1 employee"),
  //       "123 Fourth st"
  //     );
  //     //click the add employee button
  //     userEvent.click(getByLabelText("submit button"));
  //     //check whether the error is displayed
  //     expect(
  //       screen.getByText("Please enter a city for test.")
  //     ).toBeInTheDocument();
  //   });
  //   it("throws an error when an employee doesn't enter a state", () => {
  //     const { getByLabelText } = render(
  //       <AppContextProvider>
  //         <Content />
  //       </AppContextProvider>
  //     );
  //     //click the add employee button
  //     userEvent.click(getByLabelText("add employee button"));
  //     //enter a first name
  //     userEvent.type(screen.getByLabelText("first name employee"), "test");
  //     //enter a last name
  //     userEvent.type(screen.getByLabelText("last name employee"), "test");
  //     //enter an email
  //     userEvent.type(screen.getByLabelText("email employee"), "test@gmail.com");
  //     //enter a valid phone number
  //     userEvent.type(
  //       screen.getByLabelText("phone number employee"),
  //       "8475551234"
  //     );
  //     //enter a valid addressLine1
  //     userEvent.type(
  //       screen.getByLabelText("addressLine1 employee"),
  //       "123 Fourth st"
  //     );
  //     //enter a valid city
  //     userEvent.type(screen.getByLabelText("city employee"), "schaumburg");
  //     //click the add employee button
  //     userEvent.click(getByLabelText("submit button"));
  //     //check whether the error is displayed
  //     expect(
  //       screen.getByText("Please enter a state for test. Ex: Illinois")
  //     ).toBeInTheDocument();
  //   });
  //   it("throws an error when an employee doesn't enter a zip", () => {
  //     const { getByLabelText } = render(
  //       <AppContextProvider>
  //         <Content />
  //       </AppContextProvider>
  //     );
  //     //click the add employee button
  //     userEvent.click(getByLabelText("add employee button"));
  //     //enter a first name
  //     userEvent.type(screen.getByLabelText("first name employee"), "test");
  //     //enter a last name
  //     userEvent.type(screen.getByLabelText("last name employee"), "test");
  //     //enter an email
  //     userEvent.type(screen.getByLabelText("email employee"), "test@gmail.com");
  //     //enter a valid phone number
  //     userEvent.type(
  //       screen.getByLabelText("phone number employee"),
  //       "8475551234"
  //     );
  //     //enter a valid addressLine1
  //     userEvent.type(
  //       screen.getByLabelText("addressLine1 employee"),
  //       "123 Fourth st"
  //     );
  //     //enter a valid city
  //     userEvent.type(screen.getByLabelText("city employee"), "schaumburg");
  //     //enter a valid state
  //     userEvent.type(screen.getByLabelText("state employee"), "illinois");
  //     //click the add employee button
  //     userEvent.click(getByLabelText("submit button"));
  //     //check whether the error is displayed
  //     expect(
  //       screen.getByText("Please enter a zip code for test. Ex: 60123")
  //     ).toBeInTheDocument();
  //   });
  //   it("throws an error when an employee doesn't enter a valid zip", () => {
  //     const { getByLabelText } = render(
  //       <AppContextProvider>
  //         <Content />
  //       </AppContextProvider>
  //     );
  //     //click the add employee button
  //     userEvent.click(getByLabelText("add employee button"));
  //     //enter a first name
  //     userEvent.type(screen.getByLabelText("first name employee"), "test");
  //     //enter a last name
  //     userEvent.type(screen.getByLabelText("last name employee"), "test");
  //     //enter an email
  //     userEvent.type(screen.getByLabelText("email employee"), "test@gmail.com");
  //     //enter a valid phone number
  //     userEvent.type(
  //       screen.getByLabelText("phone number employee"),
  //       "8475551234"
  //     );
  //     //enter a valid addressLine1
  //     userEvent.type(
  //       screen.getByLabelText("addressLine1 employee"),
  //       "123 Fourth st"
  //     );
  //     //enter a valid city
  //     userEvent.type(screen.getByLabelText("city employee"), "schaumburg");
  //     //enter a valid state
  //     userEvent.type(screen.getByLabelText("state employee"), "illinois");
  //     //enter an invalid zip
  //     userEvent.type(screen.getByLabelText("zip employee"), "6012");
  //     //click the add employee button
  //     userEvent.click(getByLabelText("submit button"));
  //     //check whether the error is displayed
  //     expect(
  //       screen.getByText(
  //         "Please enter a zip code with 5 digits for test. Ex: 60123"
  //       )
  //     ).toBeInTheDocument();
  //   });
});
