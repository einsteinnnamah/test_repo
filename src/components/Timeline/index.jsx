import TimelineItem from "@mui/lab/TimelineItem";
import TimelineSeparator from "@mui/lab/TimelineSeparator";
import TimelineConnector from "@mui/lab/TimelineConnector";
import TimelineContent from "@mui/lab/TimelineContent";
import markGreen from "../../assets/drawables/markGreen.svg";
import Timeline from "@mui/lab/Timeline";
import "./style.scss";
import Radio from "@mui/material/Radio";
const TimelineComponent = ({ timelineAction, stage }) => {
  return (
    <>
      <Timeline>
        {timelineAction &&
          timelineAction.map((item, i) => {
            return (
              <TimelineItem>
                <TimelineSeparator>
                  {stage > i + 1 ? (
                    <img src={markGreen} alt="" />
                  ) : (
                    <Radio
                      value="a"
                      onChange={() => {}}
                      name="radio-buttons"
                      inputProps={{ "aria-label": "A" }}
                      checked={stage === i + 1 ? true : false}
                    />
                  )}
                  {console.log(
                    parseInt(timelineAction.length) - (i + 1),
                    i + 1,
                    "check"
                  )}
                  {parseInt(timelineAction.length) - (i + 1) !== 0 && (
                    <TimelineConnector />
                  )}
                </TimelineSeparator>
                <TimelineContent>
                  <p className="top">{item.title}</p>
                  <p className="bottom">{item.desc}</p>
                </TimelineContent>
              </TimelineItem>
            );
          })}
      </Timeline>
    </>
  );
};

export default TimelineComponent;
