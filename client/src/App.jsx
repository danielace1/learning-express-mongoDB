import { useState, useEffect } from "react";
import Card from "./components/Card";

const App = () => {
  const [data, setData] = useState([]);

  async function getData() {
    const Url = await fetch(
      "https://learning-express-mongodb.onrender.com/read"
    );
    const dataFromDB = await Url.json();
    setData(dataFromDB);
  }

  useEffect(() => {
    getData();
  }, []);

  return (
    <div className="space-y-10 sm:space-y-20">
      <section className="grid sm:grid-cols-2 items-center gap-x-3">
        <div className="mb-20">
          <h1 className="font-semibold text-3xl sm:text-5xl mb-2">
            Learning{" "}
            <span className="animate-text bg-gradient-to-r from-green-500 via-sky-400 to-emerald-500 bg-clip-text text-transparent font-black">
              MERN
            </span>{" "}
            Stack
          </h1>
          <p>
            MERN stack is a popular JavaScript framework used for building web
            applications. It is an acronym for MongoDB, Express.js, React, and
            Node.js. Each component of the stack plays a specific role in the
            development process. MERN stack, known for its versatility and
            efficiency, allows developers to build robust and scalable
            applications using JavaScript.
          </p>
        </div>
        <div>
          <img src="/learningMERN.svg" alt="MERN" className="sm:ml-10 ml-3" />
        </div>
      </section>

      <section className="space-y-10">
        {data.length === 0 && (
          <div>
            <img
              src="https://www.redbrixs.com/uploads/images/nodatafound.png"
              alt="No Data Available"
              className="mx-auto"
            />
          </div>
        )}

        <div className="sm:flex items-center sm:justify-between">
          <div>
            <h1 className="mb-3 text-2xl font-semibold text-center underline">
              Data Coming from DB
            </h1>
          </div>
          <div>
            <button
              onClick={getData}
              className="flex items-center bg-green-500 px-5 py-2 rounded hover:cursor-pointer hover:bg-green-600 text-white"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="20"
                height="20"
                viewBox="0 0 24 24"
                className="fill-current mr-2 hover:animate-spin animate"
              >
                <path d="M12 20q-3.35 0-5.675-2.325T4 12q0-3.35 2.325-5.675T12 4q1.725 0 3.3.712T18 6.75V5q0-.425.288-.712T19 4q.425 0 .713.288T20 5v5q0 .425-.288.713T19 11h-5q-.425 0-.712-.288T13 10q0-.425.288-.712T14 9h3.2q-.8-1.4-2.187-2.2T12 6Q9.5 6 7.75 7.75T6 12q0 2.5 1.75 4.25T12 18q1.7 0 3.113-.862t2.187-2.313q.2-.35.563-.487t.737-.013q.4.125.575.525t-.025.75q-1.025 2-2.925 3.2T12 20"></path>
              </svg>
              Refresh
            </button>
          </div>
        </div>

        {data.map((list) => (
          <Card
            key={list._id}
            technology={list.technology}
            title={list.title}
            desc={list.desc}
            created_at={list.created_at}
          />
        ))}
      </section>
    </div>
  );
};

export default App;
