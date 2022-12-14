import { FC } from 'react'
import { useNavigate } from 'react-router-dom'
import {
  AppBar,
  Avatar,
  Toolbar,
  IconButton,
  Typography,
  Container,
} from '@mui/material'
import MenuIcon from '@mui/icons-material/Menu'

const Appbar: FC = () => {
  const navigate = useNavigate()

  return (
    <AppBar
      color='primary'
      position='fixed'
      sx={{ height: '4rem', display: 'flex' }}
    >
      <Toolbar>
        <Container
          sx={{
            display: 'flex',
            justifyContent: 'start',
            alignItems: 'center',
          }}
        >
          <IconButton
            size='large'
            edge='start'
            color='inherit'
            aria-label='menu'
            sx={{
              mr: 2,
            }}
            onClick={() => navigate('/')}
          >
            <MenuIcon />
          </IconButton>
          <Typography variant='h5'>Vocab</Typography>
        </Container>
        <Avatar src='/avatar.jpeg' alt='users avatar' />
      </Toolbar>
    </AppBar>
  )
}

export default Appbar
