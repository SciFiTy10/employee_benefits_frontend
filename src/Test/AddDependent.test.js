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
    //click the add dependent button
    userEvent.click(getByLabelText("add dependent button"));
    //check whether the error text is displayed
    expect(
      screen.getByText(
        "Before adding another dependent, please select a dependent type for dependent 1."
      )
    ).toBeInTheDocument();
  });

  it("hides the email and phone number fields when the dependent type is a child", () => {
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
    //enter an email
    userEvent.type(screen.getByLabelText("email employee"), "test@gmail.com");
    //enter a valid phone number
    userEvent.type(
      screen.getByLabelText("phone number employee"),
      "8475551234"
    );
    //enter a valid addressLine1
    userEvent.type(
      screen.getByLabelText("addressLine1 employee"),
      "123 Fourth st"
    );
    //enter a valid city
    userEvent.type(screen.getByLabelText("city employee"), "schaumburg");
    //enter a valid state
    userEvent.type(screen.getByLabelText("state employee"), "illinois");
    //enter an invalid zip
    userEvent.type(screen.getByLabelText("zip employee"), "60123");
    //click the add dependent button
    userEvent.click(getByLabelText("add dependent button"));
    //select a valid dependent type
    userEvent.selectOptions(getByLabelText("select dependent 1"), "Child");
    //check whether the email is hidden
    expect(screen.queryByText("email")).toBeNull();
    //check whether the phone number is hidden
    expect(screen.queryByText("phone number")).toBeNull();
  });

  it("throws an error when a dependent doesn't have a dependent type", () => {
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
    //enter an email
    userEvent.type(screen.getByLabelText("email employee"), "test@gmail.com");
    //enter a valid phone number
    userEvent.type(
      screen.getByLabelText("phone number employee"),
      "8475551234"
    );
    //enter a valid addressLine1
    userEvent.type(
      screen.getByLabelText("addressLine1 employee"),
      "123 Fourth st"
    );
    //enter a valid city
    userEvent.type(screen.getByLabelText("city employee"), "schaumburg");
    //enter a valid state
    userEvent.type(screen.getByLabelText("state employee"), "illinois");
    //enter an invalid zip
    userEvent.type(screen.getByLabelText("zip employee"), "60123");
    //click the add dependent button
    userEvent.click(getByLabelText("add dependent button"));
    //click the add employee button
    userEvent.click(getByLabelText("submit button"));
    //check whether the error is displayed
    expect(
      screen.getByText("Please select a dependent type for dependent 1.")
    ).toBeInTheDocument();
  });

  it("throws an error when a dependent doesn't have a first name", () => {
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
    //enter an email
    userEvent.type(screen.getByLabelText("email employee"), "test@gmail.com");
    //enter a valid phone number
    userEvent.type(
      screen.getByLabelText("phone number employee"),
      "8475551234"
    );
    //enter a valid addressLine1
    userEvent.type(
      screen.getByLabelText("addressLine1 employee"),
      "123 Fourth st"
    );
    //enter a valid city
    userEvent.type(screen.getByLabelText("city employee"), "schaumburg");
    //enter a valid state
    userEvent.type(screen.getByLabelText("state employee"), "illinois");
    //enter an invalid zip
    userEvent.type(screen.getByLabelText("zip employee"), "60123");
    //click the add dependent button
    userEvent.click(getByLabelText("add dependent button"));
    //select a valid dependent type
    userEvent.selectOptions(getByLabelText("select dependent 1"), "Spouse");
    //click the add employee button
    userEvent.click(getByLabelText("submit button"));
    //check whether the error is displayed
    expect(
      screen.getByText("Please select a first name for dependent 1.")
    ).toBeInTheDocument();
  });

  it("throws an error when a dependent doesn't have a last name", () => {
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
    //enter an email
    userEvent.type(screen.getByLabelText("email employee"), "test@gmail.com");
    //enter a valid phone number
    userEvent.type(
      screen.getByLabelText("phone number employee"),
      "8475551234"
    );
    //enter a valid addressLine1
    userEvent.type(
      screen.getByLabelText("addressLine1 employee"),
      "123 Fourth st"
    );
    //enter a valid city
    userEvent.type(screen.getByLabelText("city employee"), "schaumburg");
    //enter a valid state
    userEvent.type(screen.getByLabelText("state employee"), "illinois");
    //enter an invalid zip
    userEvent.type(screen.getByLabelText("zip employee"), "60123");
    //click the add dependent button
    userEvent.click(getByLabelText("add dependent button"));
    //select a valid dependent type
    userEvent.selectOptions(getByLabelText("select dependent 1"), "Spouse");
    //enter a first name
    userEvent.type(screen.getByLabelText("first name dependent 1"), "test");
    //click the add employee button
    userEvent.click(getByLabelText("submit button"));
    //check whether the error is displayed
    expect(
      screen.getByText("Please select a last name for test.")
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
    //enter an email
    userEvent.type(screen.getByLabelText("email employee"), "test@gmail.com");
    //enter a valid phone number
    userEvent.type(
      screen.getByLabelText("phone number employee"),
      "8475551234"
    );
    //enter a valid addressLine1
    userEvent.type(
      screen.getByLabelText("addressLine1 employee"),
      "123 Fourth st"
    );
    //enter a valid city
    userEvent.type(screen.getByLabelText("city employee"), "schaumburg");
    //enter a valid state
    userEvent.type(screen.getByLabelText("state employee"), "illinois");
    //enter an invalid zip
    userEvent.type(screen.getByLabelText("zip employee"), "60123");
    //click the add dependent button
    userEvent.click(getByLabelText("add dependent button"));
    //select a valid dependent type
    userEvent.selectOptions(getByLabelText("select dependent 1"), "Spouse");
    //enter a first name
    userEvent.type(screen.getByLabelText("first name dependent 1"), "test");
    //enter a last name
    userEvent.type(screen.getByLabelText("last name dependent 1"), "test");
    //click the add employee button
    userEvent.click(getByLabelText("submit button"));
    //check whether the error is displayed
    expect(
      screen.getByText("Please select an email for test.")
    ).toBeInTheDocument();
  });
  it("throws an error when a dependent has an invalid email", () => {
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
    //enter an email
    userEvent.type(screen.getByLabelText("email employee"), "test@gmail.com");
    //enter a valid phone number
    userEvent.type(
      screen.getByLabelText("phone number employee"),
      "8475551234"
    );
    //enter a valid addressLine1
    userEvent.type(
      screen.getByLabelText("addressLine1 employee"),
      "123 Fourth st"
    );
    //enter a valid city
    userEvent.type(screen.getByLabelText("city employee"), "schaumburg");
    //enter a valid state
    userEvent.type(screen.getByLabelText("state employee"), "illinois");
    //enter an invalid zip
    userEvent.type(screen.getByLabelText("zip employee"), "60123");
    //click the add dependent button
    userEvent.click(getByLabelText("add dependent button"));
    //select a valid dependent type
    userEvent.selectOptions(getByLabelText("select dependent 1"), "Spouse");
    //enter a first name
    userEvent.type(screen.getByLabelText("first name dependent 1"), "test");
    //enter a last name
    userEvent.type(screen.getByLabelText("last name dependent 1"), "test");
    //enter an email
    userEvent.type(screen.getByLabelText("email dependent 1"), "test");
    //click the add employee button
    userEvent.click(getByLabelText("submit button"));
    //check whether the error is displayed
    expect(
      screen.getByText(
        `Please select a valid email for test. Ex: test@gmail.com`
      )
    ).toBeInTheDocument();
  });
  it("throws an error when a dependent doesn't have a phone number", () => {
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
    //enter an email
    userEvent.type(screen.getByLabelText("email employee"), "test@gmail.com");
    //enter a valid phone number
    userEvent.type(
      screen.getByLabelText("phone number employee"),
      "8475551234"
    );
    //enter a valid addressLine1
    userEvent.type(
      screen.getByLabelText("addressLine1 employee"),
      "123 Fourth st"
    );
    //enter a valid city
    userEvent.type(screen.getByLabelText("city employee"), "schaumburg");
    //enter a valid state
    userEvent.type(screen.getByLabelText("state employee"), "illinois");
    //enter an invalid zip
    userEvent.type(screen.getByLabelText("zip employee"), "60123");
    //click the add dependent button
    userEvent.click(getByLabelText("add dependent button"));
    //select a valid dependent type
    userEvent.selectOptions(getByLabelText("select dependent 1"), "Spouse");
    //enter a first name
    userEvent.type(screen.getByLabelText("first name dependent 1"), "test");
    //enter a last name
    userEvent.type(screen.getByLabelText("last name dependent 1"), "test");
    //enter an email
    userEvent.type(
      screen.getByLabelText("email dependent 1"),
      "test@gmail.com"
    );
    //click the add employee button
    userEvent.click(getByLabelText("submit button"));
    //check whether the error is displayed
    expect(
      screen.getByText("Please select a phone number for test.")
    ).toBeInTheDocument();
  });
  it("throws an error when a dependent doesn't have a valid phone number", () => {
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
    //enter an email
    userEvent.type(screen.getByLabelText("email employee"), "test@gmail.com");
    //enter a valid phone number
    userEvent.type(
      screen.getByLabelText("phone number employee"),
      "8475551234"
    );
    //enter a valid addressLine1
    userEvent.type(
      screen.getByLabelText("addressLine1 employee"),
      "123 Fourth st"
    );
    //enter a valid city
    userEvent.type(screen.getByLabelText("city employee"), "schaumburg");
    //enter a valid state
    userEvent.type(screen.getByLabelText("state employee"), "illinois");
    //enter an invalid zip
    userEvent.type(screen.getByLabelText("zip employee"), "60123");
    //click the add dependent button
    userEvent.click(getByLabelText("add dependent button"));
    //select a valid dependent type
    userEvent.selectOptions(getByLabelText("select dependent 1"), "Spouse");
    //enter a first name
    userEvent.type(screen.getByLabelText("first name dependent 1"), "test");
    //enter a last name
    userEvent.type(screen.getByLabelText("last name dependent 1"), "test");
    //enter an email
    userEvent.type(
      screen.getByLabelText("email dependent 1"),
      "test@gmail.com"
    );
    //enter an invalid phone number
    userEvent.type(
      screen.getByLabelText("phone number dependent 1"),
      "847555123"
    );
    //click the add employee button
    userEvent.click(getByLabelText("submit button"));
    //check whether the error is displayed
    expect(
      screen.getByText(
        "Please select a phone number with 10 digits for test. Ex: 8475551234"
      )
    ).toBeInTheDocument();
  });
  it("throws an error when a dependent doesn't enter an addressLine1", () => {
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
    //enter an email
    userEvent.type(screen.getByLabelText("email employee"), "test@gmail.com");
    //enter a valid phone number
    userEvent.type(
      screen.getByLabelText("phone number employee"),
      "8475551234"
    );
    //enter a valid addressLine1
    userEvent.type(
      screen.getByLabelText("addressLine1 employee"),
      "123 Fourth st"
    );
    //enter a valid city
    userEvent.type(screen.getByLabelText("city employee"), "schaumburg");
    //enter a valid state
    userEvent.type(screen.getByLabelText("state employee"), "illinois");
    //enter an invalid zip
    userEvent.type(screen.getByLabelText("zip employee"), "60123");
    //click the add dependent button
    userEvent.click(getByLabelText("add dependent button"));
    //select a valid dependent type
    userEvent.selectOptions(getByLabelText("select dependent 1"), "Spouse");
    //enter a first name
    userEvent.type(screen.getByLabelText("first name dependent 1"), "test");
    //enter a last name
    userEvent.type(screen.getByLabelText("last name dependent 1"), "test");
    //enter an email
    userEvent.type(
      screen.getByLabelText("email dependent 1"),
      "test@gmail.com"
    );
    //enter a valid phone number
    userEvent.type(
      screen.getByLabelText("phone number dependent 1"),
      "8475551234"
    );
    //click the add employee button
    userEvent.click(getByLabelText("submit button"));
    //check whether the error is displayed
    expect(
      screen.getByText("Please select an address line 1 for test.")
    ).toBeInTheDocument();
  });
  it("throws an error when a dependent doesn't enter a city", () => {
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
    //enter an email
    userEvent.type(screen.getByLabelText("email employee"), "test@gmail.com");
    //enter a valid phone number
    userEvent.type(
      screen.getByLabelText("phone number employee"),
      "8475551234"
    );
    //enter a valid addressLine1
    userEvent.type(
      screen.getByLabelText("addressLine1 employee"),
      "123 Fourth st"
    );
    //enter a valid city
    userEvent.type(screen.getByLabelText("city employee"), "schaumburg");
    //enter a valid state
    userEvent.type(screen.getByLabelText("state employee"), "illinois");
    //enter an invalid zip
    userEvent.type(screen.getByLabelText("zip employee"), "60123");
    //click the add dependent button
    userEvent.click(getByLabelText("add dependent button"));
    //select a valid dependent type
    userEvent.selectOptions(getByLabelText("select dependent 1"), "Spouse");
    //enter a first name
    userEvent.type(screen.getByLabelText("first name dependent 1"), "test");
    //enter a last name
    userEvent.type(screen.getByLabelText("last name dependent 1"), "test");
    //enter an email
    userEvent.type(
      screen.getByLabelText("email dependent 1"),
      "test@gmail.com"
    );
    //enter a valid phone number
    userEvent.type(
      screen.getByLabelText("phone number dependent 1"),
      "8475551234"
    );
    //enter an address line 1
    userEvent.type(
      screen.getByLabelText("addressLine1 dependent 1"),
      "123 fourth st"
    );
    //click the add employee button
    userEvent.click(getByLabelText("submit button"));
    //check whether the error is displayed
    expect(
      screen.getByText("Please select a city for test.")
    ).toBeInTheDocument();
  });
  it("throws an error when a dependent doesn't enter a state", () => {
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
    //enter an email
    userEvent.type(screen.getByLabelText("email employee"), "test@gmail.com");
    //enter a valid phone number
    userEvent.type(
      screen.getByLabelText("phone number employee"),
      "8475551234"
    );
    //enter a valid addressLine1
    userEvent.type(
      screen.getByLabelText("addressLine1 employee"),
      "123 Fourth st"
    );
    //enter a valid city
    userEvent.type(screen.getByLabelText("city employee"), "schaumburg");
    //enter a valid state
    userEvent.type(screen.getByLabelText("state employee"), "illinois");
    //enter an invalid zip
    userEvent.type(screen.getByLabelText("zip employee"), "60123");
    //click the add dependent button
    userEvent.click(getByLabelText("add dependent button"));
    //select a valid dependent type
    userEvent.selectOptions(getByLabelText("select dependent 1"), "Spouse");
    //enter a first name
    userEvent.type(screen.getByLabelText("first name dependent 1"), "test");
    //enter a last name
    userEvent.type(screen.getByLabelText("last name dependent 1"), "test");
    //enter an email
    userEvent.type(
      screen.getByLabelText("email dependent 1"),
      "test@gmail.com"
    );
    //enter a valid phone number
    userEvent.type(
      screen.getByLabelText("phone number dependent 1"),
      "8475551234"
    );
    //enter an address line 1
    userEvent.type(
      screen.getByLabelText("addressLine1 dependent 1"),
      "123 fourth st"
    );
    //enter a city
    userEvent.type(screen.getByLabelText("city dependent 1"), "schaumburg");
    //click the add employee button
    userEvent.click(getByLabelText("submit button"));
    //check whether the error is displayed
    expect(
      screen.getByText("Please select a state for test. Ex: Illinois")
    ).toBeInTheDocument();
  });
  it("throws an error when a dependent doesn't enter a zip", () => {
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
    //enter an email
    userEvent.type(screen.getByLabelText("email employee"), "test@gmail.com");
    //enter a valid phone number
    userEvent.type(
      screen.getByLabelText("phone number employee"),
      "8475551234"
    );
    //enter a valid addressLine1
    userEvent.type(
      screen.getByLabelText("addressLine1 employee"),
      "123 Fourth st"
    );
    //enter a valid city
    userEvent.type(screen.getByLabelText("city employee"), "schaumburg");
    //enter a valid state
    userEvent.type(screen.getByLabelText("state employee"), "illinois");
    //enter an invalid zip
    userEvent.type(screen.getByLabelText("zip employee"), "60123");
    //click the add dependent button
    userEvent.click(getByLabelText("add dependent button"));
    //select a valid dependent type
    userEvent.selectOptions(getByLabelText("select dependent 1"), "Spouse");
    //enter a first name
    userEvent.type(screen.getByLabelText("first name dependent 1"), "test");
    //enter a last name
    userEvent.type(screen.getByLabelText("last name dependent 1"), "test");
    //enter an email
    userEvent.type(
      screen.getByLabelText("email dependent 1"),
      "test@gmail.com"
    );
    //enter a valid phone number
    userEvent.type(
      screen.getByLabelText("phone number dependent 1"),
      "8475551234"
    );
    //enter an address line 1
    userEvent.type(
      screen.getByLabelText("addressLine1 dependent 1"),
      "123 fourth st"
    );
    //enter a city
    userEvent.type(screen.getByLabelText("city dependent 1"), "schaumburg");
    //enter a state
    userEvent.type(screen.getByLabelText("state dependent 1"), "illinois");
    //click the add employee button
    userEvent.click(getByLabelText("submit button"));
    //check whether the error is displayed
    expect(
      screen.getByText("Please select a zip code for test. Ex: 60123")
    ).toBeInTheDocument();
  });
  it("throws an error when an employee doesn't enter a valid zip", () => {
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
    //enter an email
    userEvent.type(screen.getByLabelText("email employee"), "test@gmail.com");
    //enter a valid phone number
    userEvent.type(
      screen.getByLabelText("phone number employee"),
      "8475551234"
    );
    //enter a valid addressLine1
    userEvent.type(
      screen.getByLabelText("addressLine1 employee"),
      "123 Fourth st"
    );
    //enter a valid city
    userEvent.type(screen.getByLabelText("city employee"), "schaumburg");
    //enter a valid state
    userEvent.type(screen.getByLabelText("state employee"), "illinois");
    //enter an invalid zip
    userEvent.type(screen.getByLabelText("zip employee"), "60123");
    //click the add dependent button
    userEvent.click(getByLabelText("add dependent button"));
    //select a valid dependent type
    userEvent.selectOptions(getByLabelText("select dependent 1"), "Spouse");
    //enter a first name
    userEvent.type(screen.getByLabelText("first name dependent 1"), "test");
    //enter a last name
    userEvent.type(screen.getByLabelText("last name dependent 1"), "test");
    //enter an email
    userEvent.type(
      screen.getByLabelText("email dependent 1"),
      "test@gmail.com"
    );
    //enter a valid phone number
    userEvent.type(
      screen.getByLabelText("phone number dependent 1"),
      "8475551234"
    );
    //enter an address line 1
    userEvent.type(
      screen.getByLabelText("addressLine1 dependent 1"),
      "123 fourth st"
    );
    //enter a city
    userEvent.type(screen.getByLabelText("city dependent 1"), "schaumburg");
    //enter a state
    userEvent.type(screen.getByLabelText("state dependent 1"), "illinois");
    //enter an invalid zip
    userEvent.type(screen.getByLabelText("zip dependent 1"), "6012");
    //click the add employee button
    userEvent.click(getByLabelText("submit button"));
    //check whether the error is displayed
    expect(
      screen.getByText(
        "Please select a zip code with 5 digits for test. Ex: 60123"
      )
    ).toBeInTheDocument();
  });
});
