import React from "react";
import { Card, CardMedia, CardContent, Typography } from "@mui/material";
import { useParams } from "react-router-dom";

import { useCompanyDetailQuery } from "../hooks";
import styles from "./CompanyDetail.module.css";

export function CompanyDetail() {
  const { id } = useParams<{ id: string }>();
  console.log("id", id);
  const { data } = useCompanyDetailQuery(id!);

  return (
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
              {data?.name}
            </Typography>
            <Typography variant="body2" color="text.secondary"></Typography>
          </CardContent>
        </Card>
      </div>
    </div>
  );
}
