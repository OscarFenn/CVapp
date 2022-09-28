import * as React from 'react';
import Box from '@mui/material/Box';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import Typography from '@mui/material/Typography';
import GeneralInformation from '../src/components/GeneralInformation';
import Education from '../src/components/Education';
import Experience from '../src/components/Experience';
import '@fontsource/roboto/300.css';
import '@fontsource/roboto/400.css';
import '@fontsource/roboto/500.css';
import '@fontsource/roboto/700.css';
import Container from '@mui/material/Container';

function App() {
  return (
    <div>
      <Container maxWidth="md">
      <Card sx={{ 
        width: '100%', mt: "5rem", boxShadow: 3 }}>
        <CardContent>
          <Typography >
            <GeneralInformation />
            <Education />
            <Experience />
          </Typography>
        </CardContent>
        </Card>
        </Container>
    </div>
  );
}

export default App;
