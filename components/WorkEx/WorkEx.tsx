import { useQuery } from '@tanstack/react-query';
import Timeline from '../Timeline/Timeline';

import { TimeLineUIConfig, TimelineFields } from '../../interfaces';

import fetchWorkEx from '../../fetchers/workEx/fetchWorkEx';
import fetchWorkUIConfig from '../../fetchers/workEx/fetchWorkUIConfig';
import { useTheme } from '../../context/ThemeContext';

const WorkEx = () => {
  const workExApiRes = useQuery(['workExData'], fetchWorkEx);
  const workExData: TimelineFields[] = workExApiRes?.data ?? [];

  const workExUIConfigRes = useQuery(['workExUIConfig'], fetchWorkUIConfig);
  const workExUiConfigData: TimeLineUIConfig[] = workExUIConfigRes?.data ?? [];

  const { theme } = useTheme();

  return (
    <>
      <p className="text-xl text-center mb-4 md:text-left md:text-2xl border-b-4 border-solid border-navbar-hover">
        Professional Experience
      </p>
      {/* Available attributes: animate, className, layout, lineColor */}
      {workExData.length && workExUiConfigData.length ? (
        <Timeline
          attrs={{
            layout: '1-column-left',
            lineColor: theme.type === 'dark' ? '#dfd7bf' : '#643843',
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
