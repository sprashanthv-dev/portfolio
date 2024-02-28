import { TimeLineUIConfig } from '../interfaces';

export const buildTimeLineConfig = (
  bgColor: string,
  textColor: string,
): TimeLineUIConfig[] => {
  return [
    {
      className: 'vertical-timeline-element--work',
      contentStyle: {
        backgroundColor: bgColor,
        color: textColor,
      },
      contentArrowStyle: {
        borderRight: `7px solid ${bgColor}`,
      },
      iconStyle: {
        backgroundColor: bgColor,
        color: textColor,
      },
    },
  ];
};

export const getColorsForMode = (mode: string) => {
  return mode === 'light'
    ? {
        bgColor: '#643843',
        textColor: '#fff3cf',
        lineColor: '#85586f',
      }
    : {
        bgColor: '#e3caa5',
        textColor: '#1B262C',
        lineColor: '#F1C376',
      };
};
