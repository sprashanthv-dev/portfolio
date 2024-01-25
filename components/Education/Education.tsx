import Timeline from "../Timeline/Timeline";

import {useQuery} from "@tanstack/react-query";

import {TimeLineUIConfig, TimelineFields} from "../../interfaces";

import fetchEducation from "../../fetchers/education/fetchEducation";
import fetchEducationUIConfig from "../../fetchers/education/fetchEducationUIConfig";

const Education = () => {
  const educationApiRes = useQuery(["educationData"], fetchEducation);
  const educationData: TimelineFields[] = educationApiRes?.data ?? [];

  const educationUIConfigRes = useQuery(["educationUIConfig"], fetchEducationUIConfig);
  const educationUIConfigData: TimeLineUIConfig[] = educationUIConfigRes?.data ?? [];

  return (
    <>
      <h2 className="center">Education</h2>
      {/* Available attributes: animate, className, layout, lineColor */}
      {educationData.length && educationUIConfigData.length
        ? <Timeline
          attrs={{layout: '1-column-left', lineColor: '#8D7B68'}}
          config={{data: educationData, uiConfig: educationUIConfigData}}/>
        : <div>
          <p>Failed to fetch education data :(</p>
        </div>}
    </>
  )
}

export default Education;