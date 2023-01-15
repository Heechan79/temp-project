import React from "react";
import { debounce } from "lodash";
import {
  TableContainer,
  Paper,
  Table,
  TableHead,
  TableRow,
  TableCell,
  TableBody,
  Button,
  TextField,
  Alert,
  Avatar,
} from "@mui/material";

import { useCompaniesQuery } from "../hooks";
import styles from "./Companies.module.css";
import { DEFAULT_DEBOUNCE_TIME } from "../settings";
import { Link } from "react-router-dom";

export function Companies() {
  const [searchTerm, setSearchTerm] = React.useState<string>("");
  const [query, setQuery] = React.useState<string>("");
  const { data, isError, refetch } = useCompaniesQuery(query);

  const companies = data?.data ?? [];

  function handleSearch(e: React.ChangeEvent<HTMLInputElement>) {
    // TODO: this can be optimized with a lesser state?
    setSearchTerm(e.target.value);

    const debouncer = debounce(() => {
      setQuery(() => e.target.value);
    }, DEFAULT_DEBOUNCE_TIME);
    debouncer();
  }

  if (isError) {
    return (
      <div className="error">
        <Alert
          id="error-aler"
          severity="error"
          action={
            <Button color="inherit" size="small" onClick={() => refetch()}>
              RETRY
            </Button>
          }
        >
          Could not get companies, please retry.
        </Alert>
      </div>
    );
  }

  return (
    <div className={styles.companies}>
      <div>
        <form className={styles.searchForm}>
          <div className={styles.searchField}>
            <TextField
              id="outlined-search"
              label="Search field"
              type="search"
              fullWidth
              onChange={handleSearch}
              value={searchTerm}
            />
          </div>
          <Button variant="contained">search</Button>
        </form>

        <div className={styles.listContainer} data-testid="companies-list">
          <TableContainer component={Paper}>
            <Table
              sx={{ minWidth: 650 }}
              aria-label="simple table"
              component="div"
            >
              <TableHead component="div">
                <TableRow component="div">
                  <TableCell component="div">Logo</TableCell>
                  <TableCell component="div" align="left">
                    Name
                  </TableCell>
                  <TableCell component="div" align="left">
                    City
                  </TableCell>
                  <TableCell component="div" align="left">
                    Street name
                  </TableCell>
                </TableRow>
              </TableHead>

              <TableBody component="div">
                {companies.map(({ name, city, streetName, logo, id }) => (
                  <TableRow
                    component={Link}
                    to={id}
                    key={id}
                    sx={{ "&:last-child td, &:last-child th": { border: 0 } }}
                  >
                    <TableCell component="div" scope="row">
                      <Avatar alt={logo} src={logo} />
                    </TableCell>
                    <TableCell component="div" align="left">
                      {name}
                    </TableCell>
                    <TableCell component="div" align="left">
                      {city}
                    </TableCell>
                    <TableCell component="div" align="left">
                      {streetName}
                    </TableCell>
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
