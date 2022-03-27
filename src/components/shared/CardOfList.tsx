import React, { useState } from "react"
import { Typography, Button, Card, CardContent, CardHeader } from "@mui/material";
import { API, graphqlOperation } from "aws-amplify";
import { deleteAchievement } from "src/graphql/mutations";
import { AchivementId, Achievement } from "../viewModel/Result/AchievementType";
import { CardActions } from "@mui/material";
import { Chip } from "@mui/material";

type Props = {
  item: Achievement;
};

export const CardOfList: React.FC<Props> = ({item}) => {
  const [deleteResult, setdeleteResult] = useState<String>("delete")

  const removeAchievement = async (deleteId: AchivementId) => {
    const input = { id: deleteId }
    await API.graphql(graphqlOperation(deleteAchievement, { input }));
    setdeleteResult("Deleted!");
  }
  return (
    <Card sx={{ width: 320, display: "grid" }}>
      <CardHeader title={item.theme} />
      <CardContent>
        <Chip label="AsIs" size="small" />
        <Typography sx={{mb: 1}}>{item.asIs}</Typography>
        <Chip label="ToBe" size="small" />
        <Typography sx={{mb: 1}}>{item.toBe}</Typography>
        <Chip label="Gap" size="small" />
        <Typography sx={{mb: 1}}>{item.gap}</Typography>
        <Chip label="Cause" size="small" />
        <Typography sx={{mb: 1}}>{item.cause}</Typography>
        <Chip label="Action" size="small" />
        <Typography sx={{mb: 1}}>{item.action}</Typography>
      </CardContent>
      <CardActions sx={{display: "flex", justifyContent: 'space-between', alignSelf: "end"}}>
        <Button color="primary" variant="contained">
          View
        </Button>
        <Button onClick={ () => removeAchievement(item.id) }
          color="primary" variant="contained">
          {deleteResult}
        </Button>
      </CardActions>
    </Card>
  )
}

export default CardOfList
