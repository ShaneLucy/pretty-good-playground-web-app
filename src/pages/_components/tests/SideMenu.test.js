import "@testing-library/jest-dom/extend-expect";
import { render } from "@testing-library/svelte";
import "./matchMedia.mock";
import SideMenu from "../SideMenu.svelte";

test("correct btc address is displayed", async () => {
  const { getByText } = render(SideMenu);
  const btcAddress = getByText("bc1q9deac6065jnxzlv54f562hghl6w5kznjpzgel3");
  expect(btcAddress).toBeTruthy();
});

test("correct xmr address is displayed", async () => {
  const { getByText } = render(SideMenu);
  const xmrAddress = getByText(
    "47Q5HrgDMabGZP5K9ghKeshbjqqQPWbQBGUvPByT2FYCKe7vKpd9kDf65Sr3pJLjq5dLeUeDXtTyJeQgBD2STvMrKDzFM5S"
  );
  expect(xmrAddress).toBeTruthy();
});

test("correct buy me a coffee url is correct", async () => {
  const { getByRole } = render(SideMenu);
  const bmcUrl = getByRole("link");
  expect(bmcUrl).toContainHTML('href="https://www.buymeacoffee.com/shanelucy"');
});
