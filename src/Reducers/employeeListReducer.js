//reducer function for managing the employeeList's state
export const employeeListReducer = (state, action) => {
  //determine which action the user is taking
  switch (action.type) {
    case "ADD_TO_EMPLOYEE_LIST":
      //create a variable for the current state
      const currentCart = [...state];
      //determine whether the employeeList contains this item
      const existingItem = currentCart.find(
        (item) => item.id === action.payload.id
      );
      //check if the item exists
      if (existingItem !== undefined) {
        //get the existing amount
        const currentAmount = existingItem.amount;
        //determine the new amount
        const newAmount = currentAmount + action.payload.amount;
        //update the quantity on the existingItem
        existingItem.amount = newAmount;
        //update the currentCart with the updated object
        const newCart = currentCart.map((item) =>
          item.id === action.payload.id ? existingItem : item
        );
        //update the state of the cart
        return newCart;
      } else {
        //the item doesn't exist yet so we need to add it to the cart
        return [...state, action.payload];
      }
    default:
      return state;
  }
};
