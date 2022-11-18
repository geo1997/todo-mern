import React from "react";
import {AppBar , Grow,Typography , Container} from '@mui/material';
import Grid from "@mui/material/Grid";

import Form from "./components/Form/Form";
import Tasks from "./components/Tasks/Tasks";


function App() {
  return (
        <Container>
          <AppBar position="static" color="inherit">

            </AppBar>
            <Grow in>
                <Container>
                    <Grid container alignItems="center" spacing={4} justify="space-between">
                        <Grid item xs={12} sm={7}>
                            <Tasks></Tasks>
                        </Grid>
                        <Grid item xs={12} sm={4}>
                            <Form></Form>
                        </Grid>
                    </Grid>
                </Container>
            </Grow>

        </Container>
  );
}

export default App;
