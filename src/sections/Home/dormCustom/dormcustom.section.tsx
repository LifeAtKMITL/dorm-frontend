import { Box, Button, Typography } from '@mui/material';
import { useNavigate } from 'react-router-dom';
import './dormCustom.css';

export const DormCustomSection: React.FC = () => {
  const navigate = useNavigate();

  const navigateToCustomPage = () => {
    navigate('custom');
  };
  return (
    <div>
      <Box py={4}>
        <div className='Box'>
          {/* <Typography variant="h6">(Dorm-Custom)</Typography> */}
          <Typography variant='h2' mb={1} fontWeight={500} sx={{fontSize: "55px"}}>
            <p className='font-link'>Customize your dorm</p>
          </Typography>
          <Typography variant='h5' m={3}>
            <p className='font-link'>Filter your type of dorm</p>
          </Typography>
          <button className='Button' onClick={navigateToCustomPage}>
            <p className='content-font gts'>GET STARTED</p>
          </button>
          {/* <Button variant="contained" onClick={navigateToCustomPage}>Get Started</Button>  */}
        </div>
      </Box>
    </div>
  );
};
