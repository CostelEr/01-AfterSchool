import React from "react";
import { useParams } from "react-router-dom";

interface Text3UrlParameters {
  id: string;
  page: string;
}

export function Text3() {
  const { id, page } = useParams<Text3UrlParameters>();
  return (
    <pre>
      Text 3 : {id}, {page}
    </pre>
  );
}
