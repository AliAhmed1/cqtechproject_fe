import * as React from 'react';
import Box from '@mui/material/Box';
import Grid from '@mui/material/Grid';
import Typography from '@mui/material/Typography';
import TextField from '@mui/material/TextField';
const axios = require('axios').default;



export default function Books() {
    let [books, setBooks] = React.useState([]);


    React.useEffect(() => {
        axios.get('http://localhost:3001/books')
            .then(function (response) {
                // handle success
                console.log(response.data);
                setBooks(response.data);
            })
            .catch(function (error) {
                // handle error
                console.log(error);
            })
    }, [])


    return (
        <Box style={{ marginLeft: "20px", paddingTop: "20px" }}>
            <Typography sx={{ mt: 4, mb: 2 }} variant="h5" component="div">
                Books Detail
            </Typography>

            {books.map((book, index) => {
                return (
                    <Grid container key={index} spacing={2}>
                         <Grid item xs={4}>
                            <TextField disabled={true} id="outlined-basic" label="Book Name" variant="outlined" defaultValue={book.book_name} />
                        </Grid>
                        <Grid item xs={4}>
                            <TextField disabled={true} id="outlined-basic" label="Author" variant="outlined" defaultValue={book.author} />
                        </Grid>
                        <Grid item xs={4}>
                            <TextField disabled={true} id="outlined-basic" label="Date of Borrow" variant="outlined" defaultValue={book.date_of_borrow} />
                        </Grid>
                        <Grid item xs={4}>
                            <TextField disabled={true} id="outlined-basic" label="Date of Return" variant="outlined" defaultValue={book.date_of_return} />
                        </Grid>
                        <Grid item xs={4}>
                            <TextField disabled={true} id="outlined-basic" label="Borrow by FirstName" variant="outlined" defaultValue={book.first_name} />
                        </Grid>
                        <Grid item xs={4}>
                            <TextField disabled={true} id="outlined-basic" label="Borrow by LastName" variant="outlined" defaultValue={book.last_name} />
                        </Grid>
                    </Grid>
                )
            })
            }
        </Box >
    )
}