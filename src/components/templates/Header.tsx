import { 
    Box,
    Link,
    Typography
 } from '@mui/material'
import { Form } from '@/components/elems/Form';

export function Header() {
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
            <Link underline='hover'>
                <Box sx={{
                    textAlign: 'center',
                    padding: '0 15px 0 15px',
                }}>
                    <Typography variant='h6'>Home</Typography>
                </Box>
            </Link>
            <Link underline='hover'>
                <Box sx={{
                    textAlign: 'center',
                    padding: '0 15px 0 15px',
                }}>
                    <Typography variant='h6'>LeaderBoards</Typography>
                </Box>
            </Link>
            <Link underline='hover'>
                <Box sx={{
                    textAlign: 'center',
                    padding: '0 15px 0 15px',
                }}>
                    <Typography variant='h6'>Insight</Typography>
                </Box>
            </Link>
            <Box sx={{ marginLeft: 'auto' }}>
                <Form />
            </Box>
        </Box>
    );
}