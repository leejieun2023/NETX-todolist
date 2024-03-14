import React from "react";

const AboutPage = async () => {
  const response = await fetch("http://localhost:3000/api/company", {
    cache: "force-cache",
  });

  const { data } = await response.json();

  return (
    <>
      <div>AboutPage</div>
      <p>회사 이름: {data.name}</p>
      <p>소개: {data.description}</p>
    </>
  );
};

export default AboutPage;