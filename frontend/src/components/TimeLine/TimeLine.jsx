import React, { useState } from "react";
import Timeline from "@mui/lab/Timeline";
import TimelineItem from "@mui/lab/TimelineItem";
import TimelineSeparator from "@mui/lab/TimelineSeparator";
import TimelineConnector from "@mui/lab/TimelineConnector";
import TimelineContent from "@mui/lab/TimelineContent";
import TimelineOppositeContent from "@mui/lab/TimelineOppositeContent";
import TimelineDot from "@mui/lab/TimelineDot";
import { Event } from "@mui/icons-material";
import Typography from "@mui/material/Typography";

const TimeLine = ({ timelines = [] }) => {
  const [selectedItem, setSelectedItem] = useState(null);
  const handleItemClick = (item) => {
    setSelectedItem(item === selectedItem ? null : item);
  };

  return (
    <div className="timeline-container">
      <Timeline position="alternate">
        {timelines.map((item, index) => (
          <TimelineItem
            key={index}
            onClick={() => handleItemClick(item)}
            className={`timeline-item ${
              selectedItem === item ? "timeline-item-selected" : ""
            }`}
          >
            <TimelineOppositeContent
              sx={{ m: "auto 0" }}
              align="right"
              variant="body2"
              color="text.secondary"
              className="timeline-opposite-content"
            >
              <Typography>
                {new Date(item.date).toLocaleDateString()}
              </Typography>
            </TimelineOppositeContent>
            <TimelineSeparator>
              <TimelineDot
                color={selectedItem === item ? "secondary" : "primary"}
                className={`timeline-dot ${
                  selectedItem === item ? "timeline-dot-selected" : ""
                }`}
              >
                <Event />
              </TimelineDot>
              {index !== timelines.length - 1 && <TimelineConnector />}
            </TimelineSeparator>
            <TimelineContent sx={{ py: "12px", px: 2 }}>
              <Typography
                variant="h6"
                className={`timeline-title ${
                  selectedItem === item ? "timeline-title-selected" : ""
                }`}
              >
                {item.title}
              </Typography>
              {selectedItem === item && (
                <Typography
                  className={`timeline-description ${
                    selectedItem === item ? "timeline-description-selected" : ""
                  }`}
                >
                  {item.description}
                </Typography>
              )}
            </TimelineContent>
          </TimelineItem>
        ))}
      </Timeline>
    </div>
  );
};

export default TimeLine;
