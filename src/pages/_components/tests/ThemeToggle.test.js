jest.mock("svelte/transition", () => ({
  draw: () => ({
    delay: 0,
    duration: 1750,
  }),
  fade: () => ({
    delay: 0,
    duration: 2500,
  }),
}));

import "@testing-library/jest-dom/extend-expect";
import { render, fireEvent } from "@testing-library/svelte";
import { waitFor } from "@testing-library/dom";

import "./matchMedia.mock";
import ThemeToggle from "../ThemeToggle.svelte";

test("clicking <ThemeToggle /> toggles colour scheme & darkMode value in localstorage", async () => {
  expect(document.body.classList.contains("dark-theme")).toBeFalsy();
  expect(window.localStorage.getItem("darkMode")).toBeFalsy();

  const { getByTitle } = render(ThemeToggle);
  const sunIcon = getByTitle("light mode");
  await fireEvent.click(sunIcon);

  await waitFor(() => {
    expect(document.body.classList.contains("dark-theme")).toBeTruthy();
    expect(window.localStorage.getItem("darkMode")).toBeTruthy();
    expect(window.localStorage.getItem("darkMode")).toEqual("true");
  });

  const moonIcon = getByTitle("dark mode");
  await fireEvent.click(moonIcon);

  await waitFor(() => {
    expect(window.localStorage.getItem("darkMode")).toEqual("false");
    expect(document.body.classList.contains("dark-theme")).toBeFalsy();
  });
});

describe("Loading component with darkMode = true set in localstorage", () => {
  beforeEach(() => {
    window.localStorage.setItem("darkMode", true);
  });

  test("<ThemeToggle /> loads the body with 'dark-theme' applied", async () => {
    render(ThemeToggle);
    await waitFor(() => {
      expect(document.body.classList.contains("dark-theme")).toBeTruthy();
    });
  });

  test("Colour theme toggles", async () => {
    const { getByTitle } = render(ThemeToggle);
    const moonIcon = getByTitle("dark mode");
    await fireEvent.click(moonIcon);
    await waitFor(() => {
      expect(window.localStorage.getItem("darkMode")).toEqual("false");
      expect(document.body.classList.contains("dark-theme")).toBeFalsy();
    });
  });
});
