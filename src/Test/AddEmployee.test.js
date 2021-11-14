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

  //   it("renders a cart with an item", () => {
  //     //mock the currentAuthenticatedUser method
  //     jest.spyOn(Auth, "currentAuthenticatedUser").mockImplementation(() => {
  //       return Promise.resolve("done");
  //     });
  //     const { getByLabelText, getByTestId } = render(
  //       <AppContextProvider>
  //         <Header />
  //         <Menu />
  //         <CartDialogContainer />
  //       </AppContextProvider>
  //     );

  //     //add an item from the menu
  //     userEvent.click(getByTestId("add one Royale With Cheese menu 1"));

  //     //click the cart button
  //     userEvent.click(getByLabelText("shopping cart button"));

  //     //there should be a count of 1 for the item in the cart
  //     expect(
  //       screen
  //         .getByTestId("amount of Royale With Cheese cart 1")
  //         .querySelector("input")
  //     ).toHaveValue("1");
  //   });
});
