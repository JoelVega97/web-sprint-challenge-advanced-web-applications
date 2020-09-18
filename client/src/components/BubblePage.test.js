import React from "react";
import axios from "axios";
import { render, screen, waitFor } from "@testing-library/react";
import { axiosWithAuth } from "../utils/axiosWithAuth";
import BubblePage from "./BubblePage";
import { fetchApi as mockFetch } from "./fetchApi";

jest.mock("./fetchApi");

const mockColors = {
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
  ],
};

test("Fetches data and renders the bubbles", async () => {
  // Finish this test
  mockFetch.mockResolvedValue(mockColors);
  render(<BubblePage />);

  await waitFor(() => {
    expect(screen.getByText(/bubbles/i)).toBeInTheDocument();
  });
});
