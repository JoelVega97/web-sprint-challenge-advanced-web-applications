import React from "react";
import axios from "axios";
import { render, screen, waitFor } from "@testing-library/react";
import BubblePage from "./BubblePage";

const mockFetch = jest.mock(axios.get("http://localhost:5000/api/colors"));

const mockColors = [
  {
    data: [
      {
        color: "aliceblue",
        code: {
          hex: "#f0f8ff",
        },
        id: 1,
      },
      {
        color: "limegreen",
        code: {
          hex: "#99ddbc",
        },
        id: 2,
      },
      {
        color: "aqua",
        code: {
          hex: "#00ffff",
        },
        id: 3,
      },
      {
        color: "aquamarine",
        code: {
          hex: "#7fffd4",
        },
        id: 4,
      },
    ],
  },
];

test("Fetches data and renders the bubbles", async () => {
  // Finish this test
  mockFetch.mockResolvedValueOnce(mockColors);
  render(<BubblePage bubbles={[]} />);
  await waitFor(() => screen.getAllByTestId(/circle/i));
  expect(screen.getAllByTestId(/circle/i)).toHaveLength(4);
});
