import * as React from 'react';
import Box from '@mui/material/Box';
import LinearProgress from '@mui/material/LinearProgress';
import Typography from '@mui/material/Typography';
import Grid from '@material-ui/core/Grid'

import './Goal.css'

export default function Goal() {
    const [progress, setProgress] = React.useState(0);

    React.useEffect(() => {
        const timer = setInterval(() => {
            setProgress((oldProgress) => {
                if (oldProgress === 100) {
                    return 0;
                }
                const diff = Math.random() * 10;
                return Math.min(oldProgress + diff, 100);
            });
        }, 500);

        return () => {
            clearInterval(timer);
        };
    }, []);

    return (
        <div className="goal-container">
            < Grid justify="space-between" container>
                < Grid item >
                    <Typography variant="h6" component="h2" >
                        Goal
                    </Typography>
                </Grid>
                < Grid item >
                    <Typography variant="h6" component="h2"  style={{ flex: 1 }}>
                        $ Amount
                    </Typography>
                </Grid>
                <Box sx={{ width: '100%' }}>
                    <LinearProgress variant="determinate" value={progress} />
                </Box>
            </Grid>
        </div>
    );
}
