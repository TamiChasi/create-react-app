import React from 'react';
import CircularProgress from '@mui/material/CircularProgress';
import Typography from '@mui/material/Typography';
import { t } from 'i18next';

const Loading = () => (
    <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', height: '100vh', color:'#0C3058'}}>
        <Typography variant="h6" sx={{ marginTop: 2, color:'#0C3058' }}>
        {t("loadingMsg")}
        </Typography>
        <CircularProgress size={30} thickness={4} sx={{ color: '#1976d2' }} />
    </div>
);

export default Loading;
