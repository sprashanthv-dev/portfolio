import {
  VerticalTimeline,
  VerticalTimelineElement,
} from 'react-vertical-timeline-component';
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

  // TODO: Having only two config's only now (even, odd), can be extended if needed later
  const evenIdxConfig = uiConfig[0];
  const oddIdxConfig = uiConfig[1];

  // TODO: Refactor the even / odd logic into a separate function instead of repetition
  return (
    <>
      <VerticalTimeline
        animate={animate}
        layout={layout}
        lineColor={lineColor}
        className={className}
      >
        {data.map((item, index) => (
          <VerticalTimelineElement
            key={item.id}
            className={
              index % 2 === 0 ? evenIdxConfig.className : oddIdxConfig.className
            }
            contentStyle={
              index % 2 === 0
                ? evenIdxConfig.contentStyle
                : oddIdxConfig.contentStyle
            }
            contentArrowStyle={
              index % 2 === 0
                ? evenIdxConfig.contentArrowStyle
                : oddIdxConfig.contentArrowStyle
            }
            iconStyle={
              index % 2 === 0 ? evenIdxConfig.iconStyle : oddIdxConfig.iconStyle
            }
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
    </>
  );
};

export default Timeline;
