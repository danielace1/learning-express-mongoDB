import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { z } from "zod";
import { useNavigate } from "react-router-dom";

const Schema = z.object({
  technology: z.string().min(1, { message: "Select Technology" }),
  title: z
    .string()
    .min(1, { message: "Title must be at least 5 characters" })
    .max(50),
  desc: z
    .string()
    .min(100, { message: "Description must be at least 100 characters" }),
});

const Create = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({ resolver: zodResolver(Schema) });

  const navigate = useNavigate();

  const sendInfoToServer = async (data) => {
    const response = await fetch("http://localhost:3000/create", {
      method: "POST",
      headers: {
        Accept: "application/json",
        "Content-Type": "application/json",
      },
      body: JSON.stringify(data),
    });

    if (response.status === 200) {
      alert("Successfully created!");
      navigate("/");
    } else {
      alert("There is some problem in sending info to DB");
      console.log(response);
    }
  };

  return (
    <section className="-mt-5">
      <h1 className="text-3xl font-semibold ">Create Data</h1>

      <form
        action=""
        className="my-5 space-y-7"
        onSubmit={handleSubmit(sendInfoToServer)}
      >
        <div>
          <label htmlFor="technology" className="block mb-2 font-semibold">
            Technology :{" "}
          </label>
          <select
            id="technology"
            name="technology"
            className="outline-none px-5 py-1.5 w-full bg-gray-200 border-none rounded focus:border focus:border-gray-300"
            {...register("technology")}
          >
            <option value="">-- Select Technology --</option>
            <option value="php">PHP</option>
            <option value="JavaScript">JavaScript</option>
            <option value="go">Go</option>
            <option value="Java">Java</option>
            <option value="C++">C++</option>
            <option value="C">C</option>
            <option value="C# ">C#</option>
            <option value="perl">Perl</option>
            <option value="elixir">Elixir</option>
            <option value="Python">Python</option>
            <option value="SQL">SQL</option>
            <option value="Erlang">Erlang</option>
            <option value="Swift">Swift</option>
            <option value="Kotlin">Kotlin</option>
            <option value="Ruby">Ruby</option>
            <option value="Scala">Scala</option>
          </select>
          {errors.technology && (
            <small className="text-sm text-red-600">
              {errors.technology.message}
            </small>
          )}
        </div>
        <div>
          <label htmlFor="title" className="block mb-2 font-semibold">
            Title :{" "}
          </label>
          <input
            type="text"
            name="title"
            id="title"
            placeholder="Enter title"
            className="outline-none px-5 py-1.5 w-full bg-gray-200 rounded border-none focus:border-2 focus:border-gray-300"
            {...register("title")}
          />
          {errors.title && (
            <small className="text-sm text-red-600">
              {errors.title.message}
            </small>
          )}
        </div>
        <div>
          <label htmlFor="desc" className="block mb-2 font-semibold">
            Description :{" "}
          </label>
          <textarea
            name="desc"
            id="desc"
            rows={5}
            placeholder="Type your Description briefly..."
            className="outline-none px-5 py-1.5 w-full bg-gray-200 border-none rounded focus:border focus:border-gray-300"
            {...register("desc")}
          ></textarea>
          {errors.desc && (
            <small className="text-sm text-red-600">
              {errors.desc.message}
            </small>
          )}
        </div>
        <div>
          <button className="w-[140px] h-[40px] shadow-2xl bg-sky-600 outline outline-offset-2 outline-1 outline-sky-600 hover:scale-[1.03] hover:outline-none duration-300 active:scale-[0.99] text-white font-semibold rounded">
            Submit
          </button>
        </div>
      </form>
    </section>
  );
};

export default Create;
