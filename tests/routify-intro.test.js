import '@testing-library/jest-dom/extend-expect'
import { render } from '@testing-library/svelte'

import RoutifyIntro from "../src/pages/example/_components/RoutifyIntro.svelte";


test('shows proper heading when rendered', () => {
  const { getByText } = render(RoutifyIntro)

  expect(getByText('Hello World')).toBeInTheDocument()
})

