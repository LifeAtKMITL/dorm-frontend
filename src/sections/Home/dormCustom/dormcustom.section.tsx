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
          <Typography variant='h2' mb={1} fontWeight={500}>
            Custom Your Dorm
          </Typography>
          <Typography variant='h5' m={3}>
            Filter your type of dorm
          </Typography>
          <button className='Button' onClick={navigateToCustomPage}>
            GET STARTED
          </button>
          {/* <Button variant="contained" onClick={navigateToCustomPage}>Get Started</Button>  */}
        </div>
      </Box>
    </div>
  );
};
