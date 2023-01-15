import React from "react";
import { useNavigate, useParams } from "react-router-dom";
import {
  Card,
  CardMedia,
  CardContent,
  Typography,
  Alert,
  Button,
} from "@mui/material";

import { useCompanyDetailQuery } from "../hooks";
import styles from "./CompanyDetail.module.css";

export function CompanyDetail() {
  const { id } = useParams<{ id: string }>();
  const { data, refetch, isError } = useCompanyDetailQuery(id!);
  const navigate = useNavigate();

  const { name, streetName, zipCode, city, catchPhrase, phoneNumber, website } =
    data || {};

  function handleGoBack() {
    navigate(-1);
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
          Could not get company details.
        </Alert>
      </div>
    );
  }

  return (
    <>
      <div className={styles.backButton}>
        <Button onClick={handleGoBack} variant="text">
          Back to overview
        </Button>
      </div>

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
                  variant="subtitle2"
                  color="text.secondary"
                >
                  {streetName} - {zipCode} - {city}
                </Typography>

                <Typography style={{ marginBottom: "10px" }} variant="body1">
                  {catchPhrase}
                </Typography>

                <Typography variant="caption">
                  {phoneNumber} |{" "}
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
