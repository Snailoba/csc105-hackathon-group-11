import React from 'react';
import { Box, Typography} from '@mui/material';

const Button = ({ text = '', handle = () => {}, fontSize = 16 }) => {
    return(
        <Box onClick={handle} sx={{
            backgroundColor: 'rgba(255,255,255,0.45)',
            padding: '6px 18px',
            borderRadius: 12,
            border: '1px solid rgba(255,255,255,0.6)',
            cursor: 'pointer',
            '&:hover': {
                backgroundColor: "#97DFFC",
                transform: 'scale(1.05)',
                transition: 'all 0.1s ease-in-out'
            },
        }}
        >
            <Typography fontSize={fontSize}>{text}</Typography>
        </Box>
    )
}

export default Button;