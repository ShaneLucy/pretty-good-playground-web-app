import "@testing-library/jest-dom/extend-expect";
import { render } from "@testing-library/svelte";

import Question from "../src/pages/_components/Question.svelte";

test("shows proper heading when rendered", () => {
  const { getByText } = render(Question);

  expect(getByText("Question: 1")).toBeInTheDocument();
});
