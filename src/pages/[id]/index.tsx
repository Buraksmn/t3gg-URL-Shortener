"use client";

import React from "react";

import { useRouter } from "next/router";
import { api } from "@app/utils/api";

const URL: React.FC = () => {
  const { query } = useRouter();

  const { data } = api.example.getUrl.useQuery({
    key: query.id as string,
  });

  if (data?.finded) {
    if (data.finded.length === 0) {
      console.log("data.finded", data.finded);
      window.location.href = "/";
    } else {
      window.location.href = `https://${data.finded[0]?.originalLink}`;
    }
  }

  return <div></div>;
};
export default URL;
