import {isToday, isYesterday, format} from 'date-fns';

const formatDateLabel = (date: string) => {
  if (isToday(date)) {
    return 'Today';
  }
  if (isYesterday(date)) {
    return 'Yesterday';
  }

  return format(date, 'EEEE, MMMM d');
};

const extractTime = (timestamp: string) => {
  const date = new Date(timestamp);

  return format(date, 'h:mm a');
};

export {formatDateLabel, extractTime};
