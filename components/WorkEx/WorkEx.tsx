import Timeline from '../Timeline/Timeline';

import { useQuery } from '@tanstack/react-query';

import { TimeLineUIConfig, TimelineFields } from '../../interfaces';

import fetchWorkEx from '../../fetchers/workEx/fetchWorkEx';
import fetchWorkUIConfig from '../../fetchers/workEx/fetchWorkUIConfig';

const WorkEx = () => {
  const workExApiRes = useQuery(['workExData'], fetchWorkEx);
  const workExData: TimelineFields[] = workExApiRes?.data ?? [];

  const workExUIConfigRes = useQuery(['workExUIConfig'], fetchWorkUIConfig);
  const workExUiConfigData: TimeLineUIConfig[] = workExUIConfigRes?.data ?? [];

  return (
    <>
      <h2 className="text-center">Professional Experience</h2>
      {/* Available attributes: animate, className, layout, lineColor */}
      {workExData.length && workExUiConfigData.length ? (
        <Timeline
          attrs={{ layout: '1-column-left', lineColor: '#8D7B68' }}
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
