import { Link, useNavigate } from "react-router-dom";
import PageTitle from "../../../../components/page-title";
import { Button, message, Table } from "antd";
import { useEffect, useState } from "react";
import { getEvents } from "../../../../api-services/events-service";
import { getDateTimeFormat } from "../../../../helpers/date-time-formate";
import { Pen, Trash2 } from "lucide-react";

function EventPage() {
  const [events, setEvents] = useState([]);
  const [loading, setLoading] = useState(true);
  const navigate = useNavigate();
  const getData = async () => {
    try {
      setLoading(true);
      const data = await getEvents();
      console.log("Events data:", data);
      setEvents(data.data);
    } catch (error) {
      message.error(
        `Error fetching events: ${
          error instanceof Error ? error.message : error
        }`
      );
    } finally {
      setLoading(false);
    }
  };

  const deleteEventHandler = async (id: string) => {
    try {
      setLoading(true);
      // await deleteEvent(id);
      getData();
      message.success("Event deleted successfully");
    } catch (error) {
      message.error("Failed to delete event");
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    getData();
  }, []);
  const columns = [
    {
      title: "Event Name",
      dataIndex: "name",
      key: "name",
    },
    {
      title: "Date & Time",
      dataIndex: "date",
      render: (date: any, row: any) => {
        return getDateTimeFormat(`${date} ${row.time}`);
      },
      key: "date",
    },
    {
      title: "Organizer",
      dataIndex: "organizer",
      key: "organizer",
    },
    {
      title: "Created At",
      dataIndex: "createdAt",
      render: (date: any) => getDateTimeFormat(date),
    },
    {
      title: "Actions",
      dataIndex: "actions",
      render: (_text: any, record: any) => (
        <div className="flex gap-5">
          <Trash2
            className="cursor-pointer text-red-700"
            size={16}
            onClick={() => deleteEventHandler(record._id)}
          />
          <Pen
            className="cursor-pointer text-yellow-700"
            size={16}
            onClick={() => navigate(`/admin/events/edit/${record._id}`)}
          />
        </div>
      ),
    },
  ];
  return (
    <div>
      <div className="flex justify-between">
        <div className="flex items-center">
          <PageTitle title="Events" />
        </div>
        <Link to="/admin/events/create">
          <Button type="primary">Create Event</Button>
        </Link>
      </div>
      <Table
        columns={columns}
        dataSource={events}
        loading={loading}
        pagination={{
          pageSize: 10,
          showSizeChanger: true,
          pageSizeOptions: [5, 10, 20, 50],
        }}
        rowKey={(record: { _id: any }) => record._id}
        onRow={(record: { _id: any }) => ({
          onClick: () => {
            navigate(`/admin/events/${record._id}`);
          },
        })}
        scroll={{ x: 768, y: 500 }}
      />
    </div>
  );
}

export default EventPage;
