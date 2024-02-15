import React from "react";
import { useEffect, useState } from "react";
import axios from "axios";

export default function useFetch(url = "") {
  const [data, setData] = useState([]);
  const [error, setError] = useState(null);
  const [loading, setLoading] = useState(false);

  useEffect(
    function () {
      async function fetchData() {
        try {
          setLoading(true);
          const response = await axios(url);
          setData(response.data);
        } catch (err) {
          setError(err);
        } finally {
          setLoading(false);
        }
      }
      fetchData();
    },
    [url]
  );
  return { data, error, loading };
}
