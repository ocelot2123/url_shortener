import "../App.css";
import styles from "../Home.module.css";
import { useMutation } from "urql";
import { GENERATE_URL } from "../api/mutations";
import { useCallback } from "react";
import { useForm } from "react-hook-form";

function HomePage() {
  let generated_url;
  const { register, handleSubmit } = useForm();
  const [res, executeMutation] = useMutation(GENERATE_URL);
  const onSubmit = useCallback(
    (data) => {
      executeMutation({ input: data.url });
    },
    [executeMutation]
  );

  const { data, fetching, error } = res;
  console.log(error);

  if (!error && data) {
    console.log(data);
    generated_url =
      process.env.REACT_APP_API_FRONTEND_URL + "/" + data.generateUrl.url.id;
  }

  return (
    <div className={styles.container}>
      <main className={styles.main}>
        <h1 className="text-4xl font-semibold mb-6 text-center">
          Omni URL Shortener
        </h1>
        <div className="box-border h-60 w-2/4 p-4 border-4 rounded-lg border-white min-w-[250px]">
          <div className="w-full max-w-xs mx-auto">
            <form
              className="shadow-md rounded px-8 pt-6 pb-8"
              onSubmit={handleSubmit(onSubmit)}
            >
              <div className="mb-4">
                <label className="block text-sm font-bold mb-2">URL</label>
                <input
                  {...register("url")}
                  className="border rounded w-full py-2 px-3 leading-tight focus:outline-none focus:shadow-outline"
                  id="url"
                  type="text"
                  placeholder="URL"
                />
                {error && <div className="text-red-600">{error.message}</div>}
              </div>
              <input
                type="submit"
                value="Generate"
                className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
              />
            </form>
          </div>
          {generated_url && (
            <div className="text-center text-lg text-green-300">
              {"Shortened URL: "}
              <a href={generated_url} target="_blank" rel="noreferrer">
                {generated_url}
              </a>
            </div>
          )}
        </div>
      </main>
    </div>
  );
}

export default HomePage;
