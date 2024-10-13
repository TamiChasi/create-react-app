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
import { Visibility } from '@mui/icons-material';



export default function PackageTimeline() {
  const datesArr = [];
  const statusArr = [
    { active: true, statusKey: 'iscoming', date: '1/1/2024', title: 'התקבל מידע על חבילה המיועדת להישלח' },
    { active: true, statusKey: 'isLanding', date: '1/1/2024', title: 'החבילה הגיעה לארץ' },
    { active: true, statusKey: 'isDenied', date: '1/1/2024', title: 'המשלוח מעוכב ממתין לאישור רשות מוסמכת'},
    { active: true, statusKey: 'isSubmit', date: '1/1/2024', title: 'הוגשה הצהרה ומספר הצהרה' },
    { active: true, statusKey: 'isDebt', date: '1/1/2024', title: 'קיים חוב שטרם שולם' },
    { active: true, statusKey: 'isDebtPayed', date: '1/1/2024', title: 'חוב שולם' },
    { active: false, statusKey: 'isReleased', date: '1/1/2024', title: 'המשלוח שוחרר מהמכס'}];

  const { t } = useTranslation()


  return (

    <div className='packageTimeline'>
      <h3>{t("packageTimelineTilte")}</h3>

      <Timeline sx={{
        [`& .${timelineContentClasses.root}`]: {
          flex: 0,
        },
        padding: 0
      }} >
        {statusArr.map((status, index) => (
          <TimelineItem key={'timelineItem' + index}>
            <TimelineOppositeContent className='maxwidth'>
              {status.title}
              <div className='hide-on-desktop dateStyle' style={{ display: status.active ? 'block' : 'none'}}>{status.date}</div>
            </TimelineOppositeContent>
            <TimelineSeparator >
              { status.active && <TimelineDot>
                <PackageIcon />
              </TimelineDot> }
              { !status.active &&<TimelineDot style={{'background-color': 'rgba(206, 215, 224, 1)'}}>
                <PackageIcon style={{'background-color': 'grey'}} />
              </TimelineDot> }
              { index!= statusArr.length-1 && <TimelineConnector />}
            </TimelineSeparator>
            <TimelineContent className='hide-on-mobile' style={{ visibility: status.active ? 'visible' : 'hidden' }}            >{status.date}</TimelineContent>
          </TimelineItem>
        ))}
      </Timeline>
    </div>
  );
}
