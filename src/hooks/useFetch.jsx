import { useEffect, useState } from "react";

export default function useFetch(url) {
  const [data, setData] = useState(null);
  const [isPending, setIsPending] = useState(false);
  const [error, SetError] = useState(null);

  useEffect(() => {
    async function getData() {
      setIsPending(true);
      try {
        const req = await fetch(url);

        if (req.status !== 200) {
          throw new Error(req.message);
        }
        const data = await req.json();
        setData(data);
        SetError(null);
        setIsPending(false);
      } catch (error) {
        SetError(error);
        setData(null);
        setIsPending(false);
      }
    }
    getData();
  }, [url]);

  return { data, isPending, error };
}
