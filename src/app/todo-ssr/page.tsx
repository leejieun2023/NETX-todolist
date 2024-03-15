import Link from "next/link";
import React from "react";

const TodosSsrPage = async () => {




    return (
        <>
          <div>SSR PAGE</div>
          <Link href={"/report"}>할일정보통계보러가기</Link>
        </>
      );
    };

export default TodosSsrPage;