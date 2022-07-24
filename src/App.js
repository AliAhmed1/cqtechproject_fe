import Students from './components/Student';
import Books from './components/Books';
import './App.css';
import CssBaseline from '@mui/material/CssBaseline';
import Box from '@mui/material/Box';
import Container from '@mui/material/Container';

function App() {
  return (
    <>
      <CssBaseline />
      <div style={{ marginBottom: "10px", marginLeft: "20px", textAlign: "center" }}>
        <h1>Detail Page</h1>
      </div>
      <Container
        maxWidth="lg"
      >
        <Box sx={{ bgcolor: '#cfe8fc', height: '100vh' }}>
          <Students />
          <Books />
        </Box>
      </Container>
    </>
  );
}

export default App;
