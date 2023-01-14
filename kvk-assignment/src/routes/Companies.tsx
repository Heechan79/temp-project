import React from "react";
import {
  TableContainer,
  Paper,
  Table,
  TableHead,
  TableRow,
  TableCell,
  TableBody,
} from "@mui/material";

import { useCompaniesQuery } from "../hooks";
import styles from "./Companies.module.css";

export function Companies() {
  const { data } = useCompaniesQuery();

  const companies = data?.data ?? [];

  return (
    <div className={styles.companies}>
      <div>
        <div>Search From with Button</div>

        <div className={styles.listContainer} data-testid="companies-list">
          <TableContainer component={Paper}>
            <Table sx={{ minWidth: 650 }} aria-label="simple table">
              <TableHead>
                <TableRow>
                  {/* TODO: simple image component */}
                  <TableCell>Logo</TableCell>
                  <TableCell align="left">Name</TableCell>
                  <TableCell align="left">City</TableCell>
                  <TableCell align="left">Street name</TableCell>
                </TableRow>
              </TableHead>

              <TableBody>
                {companies.map(({ name, city, streetName, logo, id }) => (
                  <TableRow
                    key={id}
                    sx={{ "&:last-child td, &:last-child th": { border: 0 } }}
                  >
                    <TableCell component="th" scope="row">
                      {logo}
                    </TableCell>
                    <TableCell align="left">{name}</TableCell>
                    <TableCell align="left">{city}</TableCell>
                    <TableCell align="left">{streetName}</TableCell>
                  </TableRow>
                ))}
              </TableBody>
            </Table>
          </TableContainer>
        </div>
      </div>
    </div>
  );
}
