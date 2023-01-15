import React from "react";
import * as Hooks from "../hooks/useCompaniesQuery";

import { render, screen } from "@testing-library/react";
import { Companies } from "./Companies";
import { UseQueryResult } from "react-query";
import { Company, CompanyAPIResponse } from "../models/company.model";

import { Alert } from "@mui/material";

it("should render component", () => {
  jest.spyOn(Hooks, "useCompaniesQuery").mockReturnValue({} as any);
  render(<Companies />);
});

it("should render list with items", () => {
  // TODO: Move to fixtures
  const mockData = [
    {
      id: "1",
      name: "Wintheiser Group",
      city: "West Esteban",
      zipCode: "97018",
      streetName: "Lilly View",
      logo: "https://via.placeholder.com/150",
      createdAt: "2021-07-16T19:41:28.272Z",
    },
    {
      id: "2",
      name: "Feest, Schinner and Lowe",
      city: "New Ahmad",
      zipCode: "07811",
      streetName: "Bartell Tunnel",
      logo: "https://via.placeholder.com/150",
      createdAt: "2021-10-03T18:37:01.931Z",
    },
  ] as any;

  jest
    .spyOn(Hooks, "useCompaniesQuery")
    .mockReturnValue({ data: { total: 2, data: mockData } } as UseQueryResult<
      CompanyAPIResponse,
      unknown
    >);

  render(<Companies />);

  //  Maybe not the best selector but stumble upon some limitation of setting test-id on MUI components
  const listItem1 = screen.getByText("Wintheiser Group");
  const listItem2 = screen.getByText("Feest, Schinner and Lowe");

  expect(listItem1).toBeVisible();
  expect(listItem2).toBeVisible();
});

it("should display the Alert component when error response is returned", () => {
  jest.spyOn(Hooks, "useCompaniesQuery").mockReturnValue({
    data: { total: 2, data: [] as Company[] },
    isError: true,
  } as UseQueryResult<CompanyAPIResponse, unknown>);

  render(<Companies />);
  const alertComp = screen.getByRole("alert");

  expect(alertComp).toBeVisible();
});
