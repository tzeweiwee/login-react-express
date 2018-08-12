import React from "react";
import { shallow } from "enzyme";
import LoginForm from "../LoginForm";
import api from "../../../api/api";

const emailError = ["Invalid Email"];
const passwordError = ["Password is required"];

const event = {
  preventDefault: () => {}
};

describe("LoginForm", () => {
  it("should contain validation errors when email is invalid", () => {
    const wrapper = shallow(<LoginForm />);
    const userInput = { email: "invalid", password: "abc" };
    wrapper.setState(userInput);
    const errors = wrapper
      .instance()
      .validate(userInput.email, userInput.password);
    expect(errors).toEqual(expect.arrayContaining(emailError));
  });

  it("should contain validation errors when password is missing", () => {
    const wrapper = shallow(<LoginForm />);
    const userInput = { email: "test@test.com", password: "" };
    wrapper.setState(userInput);
    const errors = wrapper
      .instance()
      .validate(userInput.email, userInput.password);
    expect(errors).toEqual(expect.arrayContaining(passwordError));
  });

  it("should call login API when there are no validation errors", async () => {
    const wrapper = shallow(<LoginForm />);
    const userInput = { email: "test@test.com", password: "1234" };
    const apiSpy = jest.spyOn(api, "postLogin");
    wrapper.setState(userInput);
    await wrapper.instance().handleSubmit(event);

    expect(apiSpy).toHaveBeenCalled();
  });

  it("should match LoginForm snapshot", () => {
    const wrapper = shallow(<LoginForm />);
    expect(wrapper).toMatchSnapshot();
  });
});
