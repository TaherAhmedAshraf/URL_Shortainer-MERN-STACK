import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

export default function GoLink() {
  const { alias } = useParams();
  const { url, setRedirectTo } = useState(undefined);

  useEffect(() => {
    fetch("/find", {
      method: "POST",
      body: JSON.stringify({
        _id: alias,
      }),
      headers: { "Content-type": "application/json;charset=UTF-8" },
    }).then(async (response) => {
      //   console.log(await response.json());
      const data = await response.json();
      console.log(data);
      if (data === null) {
        window.location.replace("/");
      } else {
        window.location.replace(data.url);
      }
    });
  });

  return <div>redirecting...</div>;
}
