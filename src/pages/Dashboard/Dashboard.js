import React, { useEffect } from 'react'
import Grid from '@material-ui/core/Grid'
import Paper from '@material-ui/core/Paper'

export default function Dashboard() {

    return (
        <div>
            < Grid container >

                < Grid item xs={12} sm={6} md={3}>
                    <Paper>1</Paper>
                </Grid>
                < Grid item xs={12} sm={6} md={3} >
                    <Paper>2</Paper>
                </Grid>
                < Grid item xs={12} sm={6} md={3} >
                    <Paper>3</Paper>
                </Grid>
                < Grid item xs={12} sm={6} md={3} >
                    <Paper>4</Paper>
                </Grid>

            </Grid>

        </div>
    )
}
