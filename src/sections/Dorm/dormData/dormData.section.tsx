import { Box, Typography } from '@mui/material';
import { logoImg } from 'assets';
import React, { useState, useEffect } from 'react';
import Modal from '@mui/material/Modal';

import { ReviewModalComponent } from 'components';

import './dormData.css';

// prop dorm picture from card


//prop open, close Modal
export type functionProp = {
  open: boolean;
  setOpen: (open: boolean) => void;
};

export const DormDataSection: React.FC = () => {
  const [open, setOpen] = useState(false);

  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);

  console.log(open);

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
              <ReviewModalComponent open={open} setOpen={setOpen}/>
            </div>
          </Modal>
        </div>
        <div className='Dorm-header'>
          <h1>
            Dorm Name
            <button className='Button-review' onClick={handleOpen}>
              REVIEW
            </button>
          </h1>
        </div>

        <div className='Box-pic'>
          {/* change to picture prop */}
          <img src={logoImg} />
        </div>
      </Box>
    </div>
  );
};
