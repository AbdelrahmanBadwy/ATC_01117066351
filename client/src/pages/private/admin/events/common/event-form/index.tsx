import { Steps } from "antd";
import General from "./general";
import LocationAndDate from "./location-and-date";
import Media from "./media";
import Tickets from "./tickets";
import { useState } from "react";
import { Form } from "antd";

export interface EventFormStepProps {
  eventData: any;
  setEventData: (data: any) => void;
  setCurrentStep: (step: number) => void;
  currentStep: number;
  selectedMediaFiles?: any;
  setSelectedMediaFiles?: (files: any) => void;
}

function EventForm() {
  const [currentStep, setCurrentStep] = useState(0);
  const [eventData, setEventData] = useState({});
  const [selectedMediaFiles, setSelectedMediaFiles] = useState<any[]>([]);

  const commonProps = {
    eventData,
    setEventData,
    setCurrentStep,
    currentStep,
    selectedMediaFiles,
    setSelectedMediaFiles,
  };
  const stepsData = [
    {
      title: "General",
      content: <General {...commonProps} />,
    },
    {
      title: "Location & Date",
      content: <LocationAndDate {...commonProps} />,
    },
    {
      title: "Media",
      content: <Media {...commonProps} />,
    },
    {
      title: "Tickets",
      content: <Tickets />,
    },
  ];

  return (
    <Form layout="vertical" className="w-full">
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
    </Form>
  );
}

export default EventForm;
