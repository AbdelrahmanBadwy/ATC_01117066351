import { useState } from "react";
import type { EventType } from "../../../../interfaces";
import { Button, Input } from "antd";

function TicketsSelection({ eventData }: { eventData: EventType }) {
  const [loading, setLoading] = useState(false);
  const [selectedTicketType, setSelectedTicketType] = useState<string>("");
  const [maxCount, setMaxCount] = useState<number>(1);
  const [selectedTicketsCount, setSelectedTicketsCount] = useState<number>(1);
  const ticketTypes = eventData.ticketTypes;
  const selectedTicketPrice = ticketTypes.find(
    (ticketType) => ticketType.name === selectedTicketType
  )?.price;
  const totalAmount = (selectedTicketPrice || 0) * selectedTicketsCount;
  return (
    <div>
      <div>
        <h1 className="text-sm text-info font-bold">Select ticket type</h1>

        <div className="flex flex-wrap gap-5 mt-3">
          {ticketTypes.map((ticketType, index) => {
            const available = ticketType.available ?? ticketType.limit;
            return (
              <div
                key={index}
                className={`p-2 border border-gray-200 bg-gray-100 lg:w-96 w-full cursor-pointer
             ${
               selectedTicketType === ticketType.name
                 ? "border-primary border-solid border-2"
                 : ""
             }
            `}
                onClick={() => {
                  setSelectedTicketType(ticketType.name);
                  setMaxCount(available);
                }}
              >
                <h1 className="text-sm text-gray-500 uppercase">
                  {ticketType.name}
                </h1>
                <div className="flex justify-between">
                  <h1 className="text-sm font-bold">$ {ticketType.price}</h1>
                  <h1 className="text-xs">{available} Left</h1>
                </div>
              </div>
            );
          })}
        </div>

        <h1 className="text-sm text-info font-bold mt-10">
          Select tickets count
        </h1>
        <Input
          type="number"
          value={selectedTicketsCount}
          className="w-96"
          onChange={(e) => setSelectedTicketsCount(parseInt(e.target.value))}
          min={1}
          max={maxCount}
        />

        <span className="text-gray-600 text-sm mt-2 font-bold">
          {selectedTicketsCount > maxCount
            ? `Only ${maxCount} tickets available`
            : ""}
        </span>

        <div className="mt-7 flex justify-between bg-gray-200 border border-solid p-3 items-center">
          <h1 className="text-xl text-gray-500 font-bold">
            Total Amount : $ {totalAmount}
          </h1>
          <Button
            type="primary"
            disabled={
              !selectedTicketType ||
              !selectedTicketsCount ||
              loading ||
              selectedTicketsCount > maxCount
            }
            loading={loading}
          >
            Book Now
          </Button>
        </div>
      </div>
    </div>
  );
}

export default TicketsSelection;
