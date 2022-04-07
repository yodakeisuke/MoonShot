import React, { useState } from 'react';

import { AchivementId, Achievement } from 'components/viewModel/Result/AchievementType';

import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import Card from '@mui/material/Card';
import CardHeader from '@mui/material/CardHeader';
import CardContent from '@mui/material/CardContent';
import CardActions from '@mui/material/CardActions';
import Chip from '@mui/material/Chip';

import { API, graphqlOperation } from 'aws-amplify';
import { deleteAchievement } from 'graphql/mutations';

type Props = {
  item: Achievement;
};

export const CardOfList: React.FC<Props> = ({ item }) => {
  const [deleteResult, setdeleteResult] = useState<String>('delete');

  const removeAchievement = async (deleteId: AchivementId) => {
    const input = { id: deleteId };
    await API.graphql(graphqlOperation(deleteAchievement, { input }));
    setdeleteResult('Deleted!');
  };

  return (
    <Card sx={{ width: 320, display: 'grid' }}>
      <CardHeader title={item.theme} />
      <CardContent>
        <Chip label="AsIs" size="small" />
        <Typography sx={{ mb: 1 }}>{item.asIs}</Typography>
        <Chip label="ToBe" size="small" />
        <Typography sx={{ mb: 1 }}>{item.toBe}</Typography>
        <Chip label="Gap" size="small" />
        <Typography sx={{ mb: 1 }}>{item.gap}</Typography>
        <Chip label="Cause" size="small" />
        <Typography sx={{ mb: 1 }}>{item.cause}</Typography>
        <Chip label="Action" size="small" />
        <Typography sx={{ mb: 1 }}>{item.action}</Typography>
      </CardContent>
      <CardActions sx={{ display: 'flex', justifyContent: 'space-between', alignSelf: 'end' }}>
        <Button color="primary" variant="contained">
          View
        </Button>
        <Button
          onClick={() => removeAchievement(item.id)}
          color="primary"
          variant="contained"
        >
          {deleteResult}
        </Button>
      </CardActions>
    </Card>
  );
};

export default CardOfList;
