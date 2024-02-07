import {
  VerticalTimeline,
  VerticalTimelineElement,
} from 'react-vertical-timeline-component'; //TODO: Add the types package for timeline component
import 'react-vertical-timeline-component/style.min.css';

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
          date={item.period}
        >
          <h3 className="vertical-timeline-element-title">{item.title}</h3>
          <h4 className="vertical-timeline-element-subtitle">
            {item.subtitle}
          </h4>
          <p>{item.description}</p>
        </VerticalTimelineElement>
      ))}
    </VerticalTimeline>
  );
};

export default Timeline;
