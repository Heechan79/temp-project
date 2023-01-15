import { Card, CardMedia, CardContent, Typography } from "@mui/material";
import React from "react";
import { useCompanyDetailQuery } from "../hooks";

export function CompanyDetail() {
  const { data } = useCompanyDetailQuery("1");

  return (
    <Card sx={{ maxWidth: 345 }}>
      <CardMedia
        sx={{ height: 140 }}
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
  );
}
