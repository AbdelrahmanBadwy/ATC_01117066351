import { Steps } from "antd";
import General from "./general";
import LocationAndDate from "./location-and-date";
import Media from "./media";
import Tickets from "./tickets";
import { useState } from "react";
import { useNavigate } from "react-router-dom";

function EventForm() {
  const [currentStep, setCurrentStep] = useState(0);
  const stepsData = [
    {
      title: "General",
      content: <General />,
    },
    {
      title: "Location & Date",
      content: <LocationAndDate />,
    },
    {
      title: "Media",
      content: <Media />,
    },
    {
      title: "Tickets",
      content: <Tickets />,
    },
  ];
  return (
    <div>
      <Steps
        current={currentStep}
        size="small"
        onChange={(index: number) => setCurrentStep(index)}
      >
        {stepsData.map((step, index) => (
          <Steps.Step
            key={index}
            title={step.title}
            // status={currentStep === index ? "process" : "wait"}
          />
        ))}
      </Steps>
      <div className="mt-5">{stepsData[currentStep].content}</div>
    </div>
  );
}

export default EventForm;
