import { Box } from '@mui/material'
import Typography from '@mui/material/Typography';

export function Footer() {
    return (
        <Box sx={{
            height: '56px',
            width: '100%',
            display: 'flex',
            flexDirection: 'row',
            justifyContent: 'flex-start',
            alignItems: 'center',
            borderBottom: 'solid 1px grey'
        }}>
            <Box sx={{
                textAlign: 'center',
                marginLeft: '30px',
            }}>
                <Typography variant='h6'>Home</Typography>
            </Box>
            <Box sx={{
                textAlign: 'center',
                marginLeft: '30px',
            }}>
                <Typography variant='h6'> LeaderBoards</Typography>
            </Box>
            <Box sx={{
                textAlign: 'center',
                marginLeft: '30px',
            }}>
                <Typography variant='h6'>Insight</Typography>
            </Box>
        </Box>
    );
}