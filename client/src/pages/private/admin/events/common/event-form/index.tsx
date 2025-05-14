import { message, Steps } from "antd";
import General from "./general";
import LocationAndDate from "./location-and-date";
import Media from "./media";
import Tickets from "./tickets";
import { useState } from "react";
import { Form } from "antd";
import { uploadFileToFirebaseAndReturnUrl } from "../../../../../../api-services/storage-service";
import { createEvent } from "../../../../../../api-services/events-service";
import { useNavigate } from "react-router-dom";

export interface EventFormStepProps {
  eventData: any;
  setEventData: (data: any) => void;
  setCurrentStep: (step: number) => void;
  currentStep: number;
  selectedMediaFiles?: any;
  setSelectedMediaFiles?: (files: any) => void;
  loading?: boolean;
  onFinish?: () => void;
}

function EventForm() {
  const [currentStep, setCurrentStep] = useState(0);
  const [eventData, setEventData] = useState<any>({});
  const [selectedMediaFiles, setSelectedMediaFiles] = useState<any[]>([]);
  const [loading, setLoading] = useState(false);
  const navigate = useNavigate();

  const onFinish = async () => {
    try {
      setLoading(true);
      const [...urls] = await Promise.all(
        selectedMediaFiles.map(async (file) => {
          return await uploadFileToFirebaseAndReturnUrl(file);
        })
      );
      const eventDataWithUrls = {
        ...eventData,
        mediaFiles: urls,
      };
      await createEvent(eventDataWithUrls);
      message.success("Event created successfully");
      navigate("/admin/events");
    } catch (error: any) {
      message.error("Error creating event", error.message);
    } finally {
      setLoading(false);
    }
  };

  const commonProps = {
    eventData,
    setEventData,
    setCurrentStep,
    currentStep,
    selectedMediaFiles,
    setSelectedMediaFiles,
    loading,
    setLoading,
    onFinish,
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
      content: <Tickets {...commonProps} />,
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
            disable={currentStep < index}
            // status={currentStep === index ? "process" : "wait"}
          />
        ))}
      </Steps>
      <div className="mt-5">{stepsData[currentStep].content}</div>
    </Form>
  );
}

export default EventForm;
