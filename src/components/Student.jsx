import * as React from 'react';
import { styled } from '@mui/material/styles';
import Box from '@mui/material/Box';

import Grid from '@mui/material/Grid';
import Paper from '@mui/material/Paper';
import Typography from '@mui/material/Typography';
import TextField from '@mui/material/TextField';
const axios = require('axios').default;


export default function Students() {

    let [students, setStudents] = React.useState([]);


    React.useEffect(() => {
        axios.get('http://localhost:3001/students')
            .then(function (response) {
                // handle success
                console.log(response.data);
                setStudents(response.data);
            })
            .catch(function (error) {
                // handle error
                console.log(error);
            })
    }, [])


    return (
        <Box style={{ marginLeft: "20px", paddingTop: "20px" }}>
            <Typography sx={{ mt: 4, mb: 2 }} variant="h5" component="div">
                Students Detail
            </Typography>

            {students.map((student, index) => {
                return (
                    <Grid container key={index} spacing={2}>
                        <Grid item xs={4}>
                            <TextField disabled={true} id="outlined-basic" label="FirstName" variant="outlined" defaultValue={student.first_name} />
                        </Grid>
                        <Grid item xs={4}>
                            <TextField disabled={true} id="outlined-basic" label="LastName" variant="outlined" defaultValue={student.last_name} />
                        </Grid>
                    </Grid>
                )
            })
            }
        </Box >
    )
}