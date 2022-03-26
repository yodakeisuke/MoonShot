import React from "react"
import { useEffect, useState } from "react";

import { Box, List, ListItem, Typography, Button } from "@mui/material";
import { Achievement, AchivementId } from "./AchievementType";

import API, { graphqlOperation } from '@aws-amplify/api';
import { deleteAchievement } from 'src/graphql/mutations';


type Props = {
  items: Achievement[];
};

const ResultList: React.FC<Props> = ({items}) => {

  const removeAchievement = async (deleteId: AchivementId) => {
    console.log("queryDelete");
    console.log(deleteId);
    await API.graphql(graphqlOperation(deleteAchievement, { input: deleteId }));
  }

  return (
    <Box sx={{display: "flex", flexDirection: "column"}}>
      {items ?
        <List sx={{width: '100%'}}>
          {items.map((e) => (
            <ListItem key={e.id} disablePadding={true}>
              <Box sx={{display: "grid"}}>
                <Typography>{e.id}</Typography>
                <Typography>{e.user}</Typography>
                <Typography>{e.asIs}</Typography>
                <Typography>{e.toBe}</Typography>
                <Typography>{e.gap}</Typography>
                <Typography>{e.cause}</Typography>
                <Typography>{e.action}</Typography>
              </Box>
              <button onClick={ () => removeAchievement(e.id) }>
                DELETE
              </button>
            </ListItem>
          ))}
        </List>
      : <Typography>未登録</Typography>
      }
    </Box>
  );
};

export default ResultList
