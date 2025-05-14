import { Link } from "react-router-dom";
import PageTitle from "../../../../components/page-title";
import { Button } from "antd";

function EventPage() {
  return (
    <div className="flex justify-between">
      <div className="flex items-center">
        <PageTitle title="Events" />
      </div>
      <Link to="/admin/events/create">
        <Button type="primary">Create Event</Button>
      </Link>
    </div>
  );
}

export default EventPage;
