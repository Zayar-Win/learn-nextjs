import { useState } from "react";
import { useRouter } from "next/router";

const EventsList = ({ events }) => {
  const [filterEvents, setFilterEvents] =
    useState(events);
  const router = useRouter();
  const filterbySportHandler = async () => {
    const response = await fetch(
      "http://localhost:4000/events?category=sports"
    );
    const data = await response.json();

    setFilterEvents(data);
    router.push(
      "/events?category=sports",
      undefined,
      {
        shallow: true,
      }
    );
  };
  return (
    <>
      <button onClick={filterbySportHandler}>
        Filter by sports
      </button>
      <h1>EventsList</h1>
      {filterEvents.map((event) => {
        return (
          <div key={event.id}>
            <h2>
              {event.id} {event.title} |{" "}
              {event.category}
            </h2>
            <p>{event.description}</p>
          </div>
        );
      })}
    </>
  );
};

export default EventsList;

export const getServerSideProps = async (
  context
) => {
  const { query } = context;
  const { category } = query;
  const queryString = category
    ? "?category=sports"
    : "";
  const response = await fetch(
    `http://localhost:4000/events${queryString}`
  );
  const data = await response.json();

  return {
    props: {
      events: data,
    },
  };
};
