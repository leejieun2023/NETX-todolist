import React from "react";
import Image from "next/image";
import { companyInfoType } from "@/types/types";

const AboutPage = async () => {
  const response = await fetch("http://localhost:4000/companyInfo");
  const company: companyInfoType = await response.json();

  return (
    <main className="flex justify-center">
      <div>
        <p>회사 이름: {company.name}</p>
        <p>소개: {company.description}</p>
      </div>
      <div>
        <Image
          src={company.image}
          alt="company image"
          width={400}
          height={600}
          className="-z-20"
        />
      </div>
    </main>
  );
};

export default AboutPage;