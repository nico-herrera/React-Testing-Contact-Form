import React from "react";
import { render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import ContactForm from "./ContactForm";

test("renders ContactForm", () => {
  render(<ContactForm />);
});

test("can fill in form and display", () => {
  render(<ContactForm />);

  const firstNameInput = screen.getByLabelText(/first name/i);
  const lastNameInput = screen.getByLabelText(/last name/i);
  const emailInput = screen.getByLabelText(/email/i);

  userEvent.type(firstNameInput, "Nic");
  userEvent.type(lastNameInput, "Herrera");
  userEvent.type(emailInput, "email@inbox.com");

  expect(firstNameInput).toHaveValue("Nic");
  expect(lastNameInput).toHaveValue("Herrera");
  expect(emailInput).toHaveValue("email@inbox.com");

  const button = screen.getByRole("button");

  userEvent.click(button);

  const returnedForm = screen.findByText(/nico/i);

  returnedForm.then((item) => {
    expect(item).toBeTruthy();
  });
});
