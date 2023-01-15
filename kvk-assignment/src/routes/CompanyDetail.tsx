import React from "react";
import {
  Card,
  CardMedia,
  CardContent,
  Typography,
  Alert,
  Button,
} from "@mui/material";
import { useParams } from "react-router-dom";

import { useCompanyDetailQuery } from "../hooks";
import styles from "./CompanyDetail.module.css";

export function CompanyDetail() {
  const { id } = useParams<{ id: string }>();
  const { data, refetch, isError } = useCompanyDetailQuery(id!);

  const { name, streetName, zipCode, city, catchPhrase, phoneNumber, website } =
    data || {};

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
          Could not get company details.
        </Alert>
      </div>
    );
  }

  return (
    <>
      {data && (
        <div className={styles.details}>
          <div className={styles.detailsCard}>
            <Card>
              <CardMedia
                sx={{ height: 340 }}
                image="https://via.placeholder.com/150"
                title="green iguana"
              />
              <CardContent>
                <Typography gutterBottom variant="h5" component="div">
                  {name}
                </Typography>

                <Typography
                  style={{ marginBottom: "10px" }}
                  variant="body2"
                  color="text.secondary"
                >
                  {streetName} - {zipCode} - {city}
                </Typography>

                <Typography
                  style={{ marginBottom: "10px" }}
                  variant="subtitle1"
                >
                  {catchPhrase}
                </Typography>
                <Typography variant="subtitle1">
                  Telephone: {phoneNumber}
                </Typography>
                <Typography variant="subtitle1">
                  <a href={website} target="_blank" rel="noreferrer">
                    {website}
                  </a>
                </Typography>
              </CardContent>
            </Card>
          </div>
        </div>
      )}
    </>
  );
}
