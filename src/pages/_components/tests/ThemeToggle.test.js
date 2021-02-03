import "@testing-library/jest-dom/extend-expect";
import { render, fireEvent } from "@testing-library/svelte";
import "./matchMedia.mock";
import ThemeToggle from "../ThemeToggle.svelte";

test("clicking <ThemeToggle /> toggles colour scheme & darkMode value in localstorage", async () => {
  expect(document.body.classList.contains("dark-theme")).toBeFalsy();
  expect(window.localStorage.getItem("darkMode")).toBeFalsy();

  const { getByTitle } = render(ThemeToggle);
  const sunIcon = getByTitle("sun");
  await fireEvent.click(sunIcon);

  expect(document.body.classList.contains("dark-theme")).toBeTruthy();
  expect(window.localStorage.getItem("darkMode")).toBeTruthy();
  expect(window.localStorage.getItem("darkMode")).toEqual("true");

  const moonIcon = getByTitle("moon");
  await fireEvent.click(moonIcon);

  expect(window.localStorage.getItem("darkMode")).toEqual("false");
  expect(document.body.classList.contains("dark-theme")).toBeFalsy();
});

describe("Loading component with darkMode = true set in localstorage", () => {
  beforeEach(() => {
    window.localStorage.setItem("darkMode", true);
  });

  test("<ThemeToggle /> loads the body with 'dark-theme' applied", async () => {
    render(ThemeToggle);
    expect(document.body.classList.contains("dark-theme")).toBeTruthy();
  });

  test("Colour theme toggles", async () => {
    const { getByTitle } = render(ThemeToggle);
    const moonIcon = getByTitle("moon");
    await fireEvent.click(moonIcon);

    expect(window.localStorage.getItem("darkMode")).toEqual("false");
    expect(document.body.classList.contains("dark-theme")).toBeFalsy();
  });
});
