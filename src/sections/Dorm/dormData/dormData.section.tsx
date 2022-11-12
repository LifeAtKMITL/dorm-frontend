import { Box, Rating, Typography } from '@mui/material';
import { logoImg } from 'assets';
import React, { useState, useEffect } from 'react';
import Modal from '@mui/material/Modal';
import Alert from '@mui/material/Alert';

import { ReviewModalComponent } from 'components';
import { useParams } from 'react-router-dom';

import './dormData.css';
import axios from 'axios';

//prop open, close Modal
export type functionProp = {
  open: boolean;
  setOpen: (open: boolean) => void;
};

export const DormDataSection: React.FC = () => {
  //state
  const [open, setOpen] = useState(false);

  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);

  const { id } = useParams();

  //set dorm data
  const [dormName, setDormName] = useState('');
  const [dormImage, setDormImage] = useState('');
  const [dormScore, setDormScore] = useState<number | null>(0);

  useEffect(() => {
    axios
      .get(`https://life-at-kmitl-backend-production.up.railway.app/dorm/${id}`)
      .then((res) => {
        console.log(res);
        setDormName(res.data.name);
        setDormImage(res.data.imagePath[0]);
        setDormScore(res.data.avgScore);
        console.log('AVGscore', dormScore);
      })
      .catch((err) => {
        console.log(err);
      });
  }, [dormScore]);

  return (
    <div className='Box-zone'>
      <Box py={4}>
        <div>
          <Modal
            open={open}
            onClose={handleClose}
            style={{ display: 'flex', alignItems: 'center', justifyContent: 'center' }}
          >
            <div>
              <ReviewModalComponent open={open} setOpen={setOpen} />
            </div>
          </Modal>
        </div>
        <div className='Dorm-header'>
          <Alert variant="filled" severity="success">
              Review posted !
          </Alert>
          <Rating name='read-only' value={dormScore} precision={0.5} readOnly size="large" />
          <h1>
            {dormName}
            <button className='Button-review' onClick={handleOpen}>
              REVIEW
            </button>
          </h1>
        </div>

        <div className='Box-pic'>
          <img src={dormImage} />
          <p>description</p>
        </div>
      </Box>
    </div>
  );
};
