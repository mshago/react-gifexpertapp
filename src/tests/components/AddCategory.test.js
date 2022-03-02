import React from "react";
import "@testing-library/jest-dom";
import { shallow } from "enzyme";
import AddCategory from "../../components/AddCategory";

describe("Test <AddCategory />", () => {
  const setCategories = jest.fn();
  let wrapper;
  beforeEach(() => {
    jest.clearAllMocks();
    wrapper = shallow(<AddCategory setCategory={setCategories} />);
  });

  test("show the component correctly", () => {
    expect(wrapper).toMatchSnapshot();
  });

  test("should change textInput", () => {
    const input = wrapper.find("input");
    const value = "Hola Mundo";
    input.simulate("change", { target: { value } });

    expect(wrapper.find("p").text().trim()).toBe(value);
  });

  test("should not post data on submit", () => {
    wrapper.find("form").simulate("submit", { preventDefault() {} });
    expect(setCategories).not.toHaveBeenCalled();
  });

  test("tarea aaaa", () => {
    const value = "hola mundo";
    wrapper.find("input").simulate("change", { target: { value } });
    wrapper.find("form").simulate("submit", { preventDefault() {} });
    expect(setCategories).toHaveBeenCalled();
    expect(setCategories).toHaveBeenCalledTimes(1);
    expect(setCategories).toHaveBeenCalledWith(expect.any(Function));

    expect(wrapper.find("input").prop("value")).toBe("");
  });
});
