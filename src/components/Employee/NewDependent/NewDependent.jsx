import React from "react";
import newDependentStyles from "./NewDependent.module.scss";
import Input from "../../UI/Input/Input";
import Button from "../../UI/Button/Button";
import Select from "../../UI/Select/Select";

const NewDependent = () => {
  return (
    <div>
      <h1>Add a new dependent</h1>
      <Select />
      <section className={newDependentStyles.nameSection}>
        <Input labelText="First Name" placeholder="Pat" type="text" />
        <Input labelText="Last Name" placeholder="Johnson" type="text" />
      </section>
      <section className={newDependentStyles.contactSection}>
        <Input labelText="Email" placeholder="pat@gmail.com" type="email" />
        <Input
          labelText="Phone Number"
          placeholder="(555) 555-5555"
          type="number"
        />
      </section>
      <section className={newDependentStyles.addressSection}>
        <Input labelText="Same Address As Employee?" type="checkbox" />
        <Input
          labelText="Street Address"
          placeholder="123 Fourth Street"
          type="text"
        />
        <Input labelText="City" placeholder="Schaumburg" type="text" />
        <Input labelText="State" placeholder="Illinois" type="text" />
        <Input labelText="Zip" placeholder="60014" type="number" />
      </section>
      <section className={newDependentStyles.addSection}>
        <Button text="Add Another Dependent" ariaLabel="add dependent button" />
      </section>
    </div>
  );
};

export default NewDependent;
