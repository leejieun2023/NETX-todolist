import React from "react";
import Image from "next/image";
import { companyInfoType } from "@/types/types";

const AboutPage = async () => {
  const response = await fetch("http://localhost:4001/companyInfo");
  const company: companyInfoType = await response.json();

  return (
    <main className="flex justify-center">
      <div className="flex justify-evenly items-center">
        <Image
          src={company.image}
          alt="company image"
          width={300}
          height={400}
          className="-z-20"
        />
      </div>
      <div>
        <p>회사 이름: {company.name}</p>
        <p>소개: {company.description}</p>
      </div>
    </main>
  );
};

export default AboutPage;