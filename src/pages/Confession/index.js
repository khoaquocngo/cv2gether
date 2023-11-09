import { Button, CircularProgress, TextField, Typography } from '@mui/material';
import { Box } from '@mui/system';
import { Amplify, API, graphqlOperation } from 'aws-amplify';
import { CONFIG_THEME } from 'config/constant';
import { motion } from 'framer-motion';
import React from 'react';
import Snowfall from 'react-snowfall';

import awsconfig from '../../aws-exports';
import { createConfession } from '../../graphql/mutations';

Amplify.configure(awsconfig);

const cfsWebhooks =
  'https://discord.com/api/webhooks/1172223984423682098/QILDFWX5d0qGWM585At7wuYkxtEUiJ056TQBLXkw0yCzHT3lUZiB7izDFs0yNMYNJw8F';

const Result = () => {
  const [description, setDescription] = React.useState('');
  const [loading, setLoading] = React.useState(false);
  const [success, setIsSuccess] = React.useState(false);

  const onChangeInput = (e, field) => {
    switch (field) {
      case 'description':
        setDescription(e.target.value);
        break;
      default:
        break;
    }
  };

  const submitResult = async () => {
    setLoading(true);
    if (!description || !description.trim()) {
      alert('Bạn chưa nhập nội dung nè >!<');
      setLoading(false);
      return;
    }

    try {
      await API.graphql(
        graphqlOperation(createConfession, {
          input: {
            description,
            status: 'New',
            type: 'cfs',
          },
        })
      );
    } catch (error) {
      alert('Lỗi không mong muốn bạn hãy reload lại nhé!');
      setLoading(false);
      return;
    }

    // Send to discord
    const options = {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ content: description }),
    };
    fetch(cfsWebhooks, options);

    setIsSuccess(true);
  };

  const backForm = () => {
    setLoading(false);
    setIsSuccess(false);
    setDescription('');
  };

  return (
    <Box
      sx={{
        height: '100vh',
        width: '100%',
        position: 'relative',
      }}
    >
      {!success ? (
        <Box
          display='flex'
          flexDirection={'column'}
          alignItems={'center'}
          sx={{
            background: `linear-gradient(to bottom, rgba(255,255,255,0.1) 10%, rgba(255,255,255,1)), url('/images/confession.png')`,
            backgroundSize: 'cover',
            '& .MuiFormControlLabel-label': {
              color: CONFIG_THEME.color.blue900,
            },

            '& .MuiFormLabel-root': {
              color: CONFIG_THEME.color.blue900,
            },
            '& .MuiInputBase-root': {
              color: CONFIG_THEME.color.blue900,
              marginBottom: 2,
              fontSize: '16px',
              borderRadius: '20px',
              '&:hover': {
                '& .MuiOutlinedInput-notchedOutline': {
                  borderColor: CONFIG_THEME.color.blue900,
                  borderRadius: '20px',
                  border: '3px solid',
                },
              },
            },
            '& .MuiOutlinedInput-notchedOutline': {
              borderColor: CONFIG_THEME.color.blue400,
              borderRadius: '20px',
              borderWidth: '3px !important',
            },
          }}
        >
          <Typography
            align='center'
            color={'primary'}
            variant='h3'
            marginBottom='100px'
            sx={{
              color: CONFIG_THEME.color.blue900,
              fontWeight: 'bold',
              fontStyle: 'italic',
              marginBottom: 5,
              marginTop: 10,
            }}
          >
            <Box>CONFESSION</Box>
            <Box fontSize='30px'>- Nơi gửi gắm tâm tư -</Box>
          </Typography>

          <TextField
            id='outlined-multiline-static'
            multiline
            rows='10'
            variant='outlined'
            color={'primary'}
            label='Nhập nội dụng bạn muốn gửi'
            sx={{
              width: '80%',
              resize: 'vertical',
              fieldset: {
                borderWidth: '3px',
                borderColor: CONFIG_THEME.color.blue900,
                borderRadius: '20px',
              },
              '& .MuiFormControl-root': {
                width: '100%',
              },
              '& .MuiInputBase-root': {
                backgroundColor: CONFIG_THEME.color.blue400,
                color: CONFIG_THEME.color.blue900,
                marginBottom: 5,
                fontSize: '20px',
                '&:hover': {
                  '& .MuiOutlinedInput-notchedOutline': {
                    borderColor: CONFIG_THEME.color.blue900,
                    borderRadius: '20px',
                  },
                },
              },
            }}
            value={description}
            onChange={e => onChangeInput(e, 'description')}
          ></TextField>
          <Box display='flex'>
            <Button
              sx={{
                ml: 2,
                borderWidth: '2px',
                height: '100%',
                padding: '16px',
                '@media (max-width: 600px)': {
                  padding: '10px',
                  height: 'fit-content',
                  ml: 0,
                  mt: 1,
                },
              }}
              variant='contained'
              onClick={submitResult}
            >
              GỬI CONFESSION
            </Button>
            {loading && <CircularProgress sx={{ ml: 2 }} />}
          </Box>
        </Box>
      ) : (
        <Box
          sx={{
            background: `linear-gradient(to bottom, rgba(255,255,255,0.1) 10%, rgba(255,255,255,1)), url('/images/confession.png')`,
            backgroundSize: 'cover',
            display: 'flex',
            marginTop: '250px',
            alignItems: 'center',
            flexWrap: 'wrap',
            flexDirection: 'column',
            '@media (max-width: 600px)': {
              padding: '25px',
              justifyContent: 'flex-end',
            },
          }}
        >
          <motion.div
            initial={{ opacity: 0, scale: 0.5 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{
              delay: 0.25,
              x: { duration: 0.25 },
              default: { ease: 'linear' },
            }}
          >
            <Box
              sx={{
                border: '3px solid red',
                borderColor: CONFIG_THEME.color.blue900,
                borderRadius: '20px',
                width: '550px',
                padding: '50px',
                '@media (max-width: 600px)': {
                  padding: '25px',
                  width: 'inherit',
                },
                '&>div': {
                  mb: 2,
                },
              }}
            >
              <Box
                sx={{
                  color: CONFIG_THEME.color.blue900,
                }}
              >
                Bạn đã gửi cfs về <strong>cv2gether</strong> rồi nhé. Admin
                chúng tớ sẽ kiểm duyệt và đăng bài sớm nhất có thể nè!!
              </Box>

              <Box
                sx={{
                  marginTop: '50px',
                  textAlign: 'right',
                  color: CONFIG_THEME.color.blue900,
                  cursor: 'pointer',
                  '&:hover': { color: CONFIG_THEME.color.blue500 },
                }}
              >
                <i onClick={backForm}>Bấm vào đây để gửi tiếp cfs nhé!</i>
              </Box>
            </Box>
          </motion.div>
          <Box
            sx={{
              color: CONFIG_THEME.color.blue900,
              fontSize: '15px',
              fontStyle: 'italic',
              mt: 8,
              textAlign: 'right',
              maxWidth: '600px',
              mb: 10,
            }}
          >
            <Box
              sx={{
                color: CONFIG_THEME.color.blue900,
                cursor: 'pointer',
                '&:hover': { color: CONFIG_THEME.color.blue500 },
              }}
            >
              <i
                onClick={() =>
                  window.open('https://www.facebook.com/cv2gether', '_blank')
                }
              >
                Xem confession <strong>tại cv2gether</strong> nhé!!
              </i>
            </Box>
          </Box>
        </Box>
      )}
      <Snowfall />
    </Box>
  );
};

export default Result;
