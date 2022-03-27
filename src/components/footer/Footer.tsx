import Box from '@mui/material/Box'
import Link from 'next/link';

import React from 'react'
import Typography from '@mui/material/Typography';


export const Footer: React.FC = () => {
  const MyGitHub: string = "https://github.com/yodakeisuke"
  return (
    <Box sx={{display: "flex", justifyContent: "center", alignItems: "center", fontFamily: "serif", mt: 4}}>
      <pre><Typography fontFamily="serif">Made By :  </Typography></pre>
      <Link href={MyGitHub}>
        <a target="_blank">Keisuke Yoda</a>
      </Link>
    </Box>
  )
}

export default Footer
