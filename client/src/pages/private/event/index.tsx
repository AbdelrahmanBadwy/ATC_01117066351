import { useEffect, useState } from "react";

import type { EventType } from "../../../interfaces";
import { message } from "antd";
import { useParams } from "react-router-dom";
import { getEventById } from "../../../api-services/events-service";
import Spinner from "../../../components/spinner";

function EventInfoPage() {
  const [eventData, setEventData] = useState<EventType | any>(null);
  const [loading, setLoading] = useState(false);

  const params: any = useParams();

  const getData = async () => {
    setLoading(true);
    try {
      const response = await getEventById(params.id);
      setEventData(response.data);
    } catch (error: any) {
      message.error("Error fetching event data:", error.message);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    getData();
  }, []);
  if (loading) {
    return (
      <div className="flex h-screen justify-center items-center">
        <Spinner />
      </div>
    );
  }
  return <div>EventInfoPage</div>;
}

export default EventInfoPage;
