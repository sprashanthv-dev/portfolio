import { useQuery } from '@tanstack/react-query';
import Timeline from '../Timeline/Timeline';

import { TimeLineUIConfig, TimelineFields } from '../../interfaces';

import fetchWorkEx from '../../fetchers/workEx/fetchWorkEx';
import { useTheme } from '../../context/ThemeContext';
import { buildTimeLineConfig, getColorsForMode } from '../../lib/utils';

const WorkEx = () => {
  const workExApiRes = useQuery(['workExData'], fetchWorkEx);
  const workExData: TimelineFields[] = workExApiRes?.data ?? [];

  const { theme } = useTheme();
  const { bgColor, textColor, lineColor } = getColorsForMode(theme.type);

  const workExUiConfigData: TimeLineUIConfig[] = buildTimeLineConfig(
    bgColor,
    textColor,
  );

  return (
    <>
      <p className={`text-xl mb-4 text-left md:text-2xl border-b-2 border-solid 
      ${theme.type === 'light' ? 'border-light-mode-alt-color' : 'border-dark-mode-alt-color'}`}>
        Professional Experience
      </p>
      {/* Available attributes: animate, className, layout, lineColor */}
      {workExData.length && workExUiConfigData.length ? (
        <Timeline
          attrs={{
            layout: '1-column-left',
            lineColor,
          }}
          config={{ data: workExData, uiConfig: workExUiConfigData }}
        />
      ) : (
        <div>
          <p>Failed to fetch work experience data :(</p>
        </div>
      )}
    </>
  );
};

export default WorkEx;
