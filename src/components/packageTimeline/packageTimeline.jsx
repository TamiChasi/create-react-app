import * as React from 'react';
import Timeline from '@mui/lab/Timeline';
import TimelineItem from '@mui/lab/TimelineItem';
import TimelineSeparator from '@mui/lab/TimelineSeparator';
import TimelineConnector from '@mui/lab/TimelineConnector';
import TimelineDot from '@mui/lab/TimelineDot';
import FastfoodIcon from '@mui/icons-material/Fastfood';
import Typography from '@mui/material/Typography';
import { TimelineOppositeContent } from '@mui/lab';
import TimelineContent, { timelineContentClasses } from '@mui/lab/TimelineContent';
import './packageTimeline.css'
import { useTranslation } from 'react-i18next';
import PackageIcon from '../../icons/packageIcon';



export default function PackageTimeline() {
  const datesArr = [];
  const statusArr = [{ date: '1/1/2024', icon: <FastfoodIcon />, title: 'התקבל מידע על חבילה המיועדת לbvbv bvbvbvbvbv bvbvbvbvbvהישלח' }, { date: '1/1/2024', icon: <FastfoodIcon />, title: 'התקבל מידע על חבילה המיועדת להישלח' }, { date: '1/1/2024', icon: <FastfoodIcon />, title: 'התקבל מידע על חבילה המיועדת להישלח' },
  { date: '1/1/2024', icon: <FastfoodIcon />, title: 'התקבל מידע על חבילה המיועדת לbלח' }, { date: '1/1/2024', icon: <FastfoodIcon />, title: 'התקבל מידע על חבילה המיועדת להישלח' }, { date: '1/1/2024', icon: <FastfoodIcon />, title: 'התקבל מידע על חבילה המיועדת להישלח' }];

  const { t } = useTranslation()


  return (

    <div className='packageTimeline'>
      <h3>{t("packageTimelineTilte")}</h3>

      <Timeline sx={{
        [`& .${timelineContentClasses.root}`]: {
          flex: 0,
        },
      }} >
        {statusArr.map((status, index) => (
          <TimelineItem key={'timelineItem' + index}>
            <TimelineOppositeContent className='maxwidth'>
              {status.title}
            </TimelineOppositeContent>
            <TimelineSeparator >
              <TimelineDot>
                <PackageIcon />
              </TimelineDot>
              <TimelineConnector />
            </TimelineSeparator>
            <TimelineContent>{status.date}</TimelineContent>
          </TimelineItem>
        ))}
      </Timeline>
    </div>
  );
}
