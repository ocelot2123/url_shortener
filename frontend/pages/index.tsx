import type { NextPage } from "next";
import Head from "next/head";
import styles from "../styles/Home.module.css";
import { useMutation } from "urql";
import { GENERATE_URL } from "../api/mutations";
import { useCallback } from "react";
import { useForm } from "react-hook-form";

const Home: NextPage = () => {
  const { register, handleSubmit } = useForm();
  const [res, executeMutation] = useMutation(GENERATE_URL);
  const onSubmit = useCallback(
    (data: any) => {
      console.log(data);
      console.log(process.env.NEXT_PUBLIC_API_URI);
      executeMutation({ input: data.url });
    },
    [executeMutation]
  );

  const { data, fetching, error } = res;
  if (error) alert(error.message);

  return (
    <div className={styles.container}>
      <Head>
        <title>Omni URL Shortener</title>
        <meta name="description" content="Omni URL Shortener" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className={styles.main}>
        <h1 className="text-4xl font-semibold mb-6 text-center">
          Omni URL Shortener
        </h1>
        <div className="box-border h-60 w-2/4 p-4 border-4 rounded-lg border-white min-w-[250px]">
          <div className="w-full max-w-xs mx-auto">
            <form
              className="shadow-md rounded px-8 pt-6 pb-8 mb-4"
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
              </div>
              <input
                type="submit"
                value="Generate"
                className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
              />
            </form>
          </div>
        </div>
      </main>
    </div>
  );
};

export default Home;
