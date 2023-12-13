import React, {Suspense} from 'react';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Container from '@mui/material/Container';
import Link from '@mui/material/Link';
import CssBaseline from '@mui/material/CssBaseline';
import Toolbar from '@mui/material/Toolbar';
import { Route, Routes } from "react-router-dom";
import Home from "./components/home/home"
import { CircularProgress } from '@mui/material';
// import Todos from './components/todos/todos';
const LazyTodo = React.lazy(()=>import("./components/todos/todos"))
const LazyPost = React.lazy(()=>import("./components/posts/posts"))

function App() {
  return (
    <Box sx={{ direction: 'rtl'}}>
      <Box sx={{ display: 'flex' }}>
        <CssBaseline />
        <AppBar component="nav" sx={{backgroundColor: '#4acfa8'}}>
          <Toolbar>
            <Box sx={{ display: { xs: 'none', sm: 'block' }, '& :not(style)': {ml: 20}}}>
              <Link href="/" underline='none' sx={{ color: '#b60a60' }}>בית</Link>
              <Link href="/todo" underline='none' sx={{ color: '#b60a60' }}>משימות</Link>
              <Link href="/post" underline='none' sx={{ color: '#b60a60' }}>מאמרים</Link>
              <Link href="/photo" underline='none' sx={{ color: '#b60a60' }}>תמונות</Link>
              <Link href="/users" underline='none' sx={{ color: '#b60a60' }}>משתמשים</Link>
            </Box>
          </Toolbar>
        </AppBar>
      </Box>

      <Container maxWidth="md" component="main" sx={{ p: 10, display: { xs: 'none', sm: 'block' }}}>
        <Routes>
          <Route path="/" element={<Home/>}/>
          <Route path="/todo" element={<Suspense fallback={<CircularProgress color='success'/>}><LazyTodo/></Suspense>}/>
          <Route path="/post" element={<Suspense fallback={<CircularProgress color='success'/>}><LazyPost/></Suspense>}/>
          <Route path="/photo" element={<>photo</>}/>
          <Route path="/users" element={<>users</>}/>
        </Routes>
      </Container>
    </Box>
  );
}

export default App;