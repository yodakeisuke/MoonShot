import React from 'react';
import Link from 'next/link';

import Box from '@mui/material/Box';
import Menu from '@mui/material/Menu';
import MenuItem from '@mui/material/MenuItem';
import Divider from '@mui/material/Divider';
import IconButton from '@mui/material/IconButton';
import Tooltip from '@mui/material/Tooltip';
import MenuIcon from '@mui/icons-material/Menu';
import FollowTheSignsIcon from '@mui/icons-material/FollowTheSigns';
import TravelExploreIcon from '@mui/icons-material/TravelExplore';
import AccountBoxIcon from '@mui/icons-material/AccountBox';
import MuiLink from '@mui/material/Link';
import ManageAccountsIcon from '@mui/icons-material/ManageAccounts';

type Props = {
  children? :never
};

export const FeatureMenu : React.FC<Props> = () => {
  const [anchorEl, setAnchorEl] = React.useState<null | HTMLElement>(null);
  const open = Boolean(anchorEl);
  const handleClick = (event: React.MouseEvent<HTMLElement>) => {
    setAnchorEl(event.currentTarget);
  };
  const handleClose = () => {
    setAnchorEl(null);
  };

  return (
    <React.Fragment>
      <Box sx={{ display: 'flex', alignItems: 'center', textAlign: 'center' }}>
        <Tooltip title="Account settings">
          <IconButton
            onClick={handleClick}
            size="medium"
            sx={{ ml: 2, mt: 1 }}
            aria-controls={open ? 'account-menu' : undefined}
            aria-haspopup="true"
            aria-expanded={open ? 'true' : undefined}
          >
            <MenuIcon fontSize="large" />
          </IconButton>
        </Tooltip>
      </Box>
      <Menu
        anchorEl={anchorEl}
        id="account-menu"
        open={open}
        onClose={handleClose}
        onClick={handleClose}
        PaperProps={{
          elevation: 0,
          sx: {
            overflow: 'visible',
            filter: 'drop-shadow(0px 2px 8px rgba(0,0,0,0.32))',
            mt: 1.5,
            '& .MuiAvatar-root': {
              width: 32,
              height: 32,
              ml: -0.5,
              mr: 1,
            },
            '&:before': {
              content: '""',
              display: 'block',
              position: 'absolute',
              top: 0,
              right: 14,
              width: 10,
              height: 10,
              bgcolor: 'background.paper',
              transform: 'translateY(-50%) rotate(45deg)',
              zIndex: 0,
            },
          },
        }}
        transformOrigin={{ horizontal: 'right', vertical: 'top' }}
        anchorOrigin={{ horizontal: 'right', vertical: 'bottom' }}
      >
        <MenuItem>
          <Link href="/" passHref>
            <MuiLink underline="none" color="inherit">
              <Box sx={{ display: 'flex', alignItems: 'center' }}>
                <FollowTheSignsIcon />
                &ensp;??????????????????
              </Box>
            </MuiLink>
          </Link>
        </MenuItem>
        <MenuItem>
          <Link href="/findAchievements/FindAchievements" as="findAchievements" passHref>
            <MuiLink underline="none" color="inherit">
              <Box sx={{ display: 'flex', alignItems: 'center' }}>
                <TravelExploreIcon />
                &ensp;?????????????????????????????????
              </Box>
            </MuiLink>
          </Link>
        </MenuItem>
        <Divider />
        <MenuItem>
          <Link href="/myAchievements/MyAchievementList" as="myAchievements" passHref>
            <MuiLink underline="none" color="inherit">
              <Box sx={{ display: 'flex', alignItems: 'center' }}>
                <AccountBoxIcon />
                &ensp;??????????????????????????????
              </Box>
            </MuiLink>
          </Link>
        </MenuItem>
        <MenuItem>
          <Link href="/myAchievements/Account" as="Account" passHref>
            <MuiLink underline="none" color="inherit">
              <Box sx={{ display: 'flex', alignItems: 'center' }}>
                <ManageAccountsIcon />
                &ensp;?????????????????????
              </Box>
            </MuiLink>
          </Link>
        </MenuItem>
      </Menu>
    </React.Fragment>
  );
};

export default FeatureMenu;
