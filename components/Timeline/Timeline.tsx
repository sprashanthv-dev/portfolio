import {
  VerticalTimeline,
  VerticalTimelineElement,
} from 'react-vertical-timeline-component'; //TODO: Add the types package for timeline component
import 'react-vertical-timeline-component/style.min.css';

import Skills from "../Skills/Skills";

import { TimelineItem, TimelineParentConfig } from '../../interfaces';

// TODO: Change the any type to a generic API Response interface

// TODO: Check how to implement "Load More" functionality with timeline component
// TODO: Related link - https://github.com/stephane-monnot/react-vertical-timeline/issues/164
type timeLineProps = {
  attrs: TimelineParentConfig;
  config: TimelineItem;
};

const Timeline = ({ attrs, config }: timeLineProps) => {
  const { animate, layout, lineColor, className } = attrs;
  const { data, uiConfig } = config;

  // TODO: Future enhancement - ui config can accept array of configuration
  // TODO: styles, one for each timeline element
  const timelineItemConfig = uiConfig[0];

  return (
    <VerticalTimeline
      animate={animate}
      layout={layout}
      lineColor={lineColor}
      className={className}
    >
      {data.map((item) => (
          <VerticalTimelineElement
              key={item.id}
              className={timelineItemConfig.className}
              contentStyle={timelineItemConfig.contentStyle}
              contentArrowStyle={timelineItemConfig.contentArrowStyle}
              iconStyle={timelineItemConfig.iconStyle}
          >
            <div className="flex flex-col items-center text-center m-4 md:m-2 md:text-lg md:flex-row md:justify-between md:text-left">
              <span className="font-bold my-2 md:my-0">{item.position}</span>
              <span>{item.period}</span>
            </div>
            <div className="flex flex-col items-center  m-4 md:m-2 md:text-lg md:flex-row md:justify-between">
            <span className="font-bold my-2 text-center md:my-0 md:text-left">
              {item.org}
            </span>
              <span>{item.location}</span>
            </div>
            <ul className="flex m-4 flex-col">
              {item.description.map((elt, index) => (
                  <li key={index} className="text-lg list-disc text-justify my-2">
                    {elt}
                  </li>
              ))}
            </ul>
            <Skills skills={item.skills}/>
          </VerticalTimelineElement>
      ))}
    </VerticalTimeline>
  );
};

export default Timeline;
