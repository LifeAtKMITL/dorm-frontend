import { Box, Collapse, IconButton, Rating, Snackbar, Typography } from '@mui/material';
import { logoImg } from 'assets';
import React, { useState, useEffect } from 'react';
import Modal from '@mui/material/Modal';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCircleCheck } from '@fortawesome/free-solid-svg-icons'
import Alert from '@mui/material/Alert';

import { ReviewModalComponent } from 'components';
import { useParams } from 'react-router-dom';

import './dormData.css';
import axios from 'axios';


//prop open, close Modal, Alert
export type FunctionProp = {
  open: boolean;
  setOpen: (open: boolean) => void;
  openAlert: boolean;
  setOpenAlert: (openAlert: boolean) => void;
};

export const DormDataSection: React.FC = () => {
  //state
  const [open, setOpen] = useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);

  const [openAlert, setOpenAlert] = React.useState(false);
  const handleOpenAlert = () => setOpenAlert(true);
  const handleCloseAlert = () => setOpenAlert(false);

  const { id } = useParams();

  //set dorm data
  const [dormName, setDormName] = useState('');
  const [dormImage, setDormImage] = useState('');
  const [dormScore, setDormScore] = useState<number | null>(0);
  const [dormAddr, setDormAddr] = useState('');
  const [dormTel, setDormTel] = useState('');
  const [dormMinPrice, setDormMinPrice] = useState('');
  const [dormMaxPrice, setDormMaxPrice] = useState('');
  const [dormFacilities, setDormFacilities] = useState<any[]>([]);

  useEffect(() => {
    axios
      .get(`https://life-at-kmitl-backend-production.up.railway.app/dorm/${id}`)
      .then((res) => {
        console.log(res);
        setDormName(res.data.name);
        setDormImage(res.data.imagePath[0]);
        setDormScore(res.data.avgScore);
        setDormAddr(res.data.address);
        setDormTel(res.data.tel);
        setDormMinPrice(res.data.rangePrice[0]);
        setDormMaxPrice(res.data.rangePrice[1]);
        setDormFacilities(res.data.facilities);

        console.log('Facility', dormFacilities);
        console.log('AVGscore', dormScore);
      })
      .catch((err) => {
        console.log(err);
      });
  }, [dormScore]);

  return (
    <div className='Box-zone'>
      <Box py={3}>
        <div>
          <Modal
            open={open}
            onClose={handleClose}
            style={{ display: 'flex', alignItems: 'center', justifyContent: 'center' }}
          >
            <div>
              <ReviewModalComponent open={open} setOpen={setOpen} openAlert={openAlert} setOpenAlert={setOpenAlert} />
            </div>
          </Modal>
        </div>
        <div className='Dorm-header'>
          <Snackbar anchorOrigin={{ vertical: 'top', horizontal: 'right' }} open={openAlert} autoHideDuration={2000} onClose={handleCloseAlert}>
            <Alert onClose={handleCloseAlert} severity="success" sx={{ width: '60%' }} variant="filled">
              Review Posted !
            </Alert>
          </Snackbar>
          <Rating name='read-only' value={dormScore} precision={0.5} readOnly size='large' />
          <h1 className='Dorm-name'>
            {dormName}
            <button className='Button-review' onClick={handleOpen}>
              REVIEW
            </button>
          </h1>
        </div>

        <div className='Box-pic'>
          <img src={dormImage} />
        </div>

        <div className='Description'>
          <p style={{color: '#15CD64'}}>Description</p>
          Address : {dormAddr}<br></br>
          Telephone : {dormTel} <br></br>
          Price : {dormMinPrice} - {dormMaxPrice} ฿ <br></br>
        </div>
        <div className='Description'>
          <p style={{color: '#15CD64' }}>Facilities</p>
          <div className='Facility-grid-container'>
            {dormFacilities
              .filter((facility: any) => facility.value)
              .map((facility: any) => {
                return (
                  <div>
                    <div className='Facility-grid-item'>
                      <div className='Icon'>
                        <FontAwesomeIcon icon={faCircleCheck} color='#15CD64'/>
                      </div>
                      <p>{facility.utl.toUpperCase()}</p>
                    </div>
                  </div>
                )})}
          </div>
        </div>
      </Box>
    </div>
  );
};
