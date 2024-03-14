import Link from "next/link";
import React from "react";

const TodosSsrPage = async () => {

    const response = await fetch("http://localhost:4000/todos", {
        cache: "no-cache",
    });
    const { data } = await response.json();


    return (
        <>
            <p>ssr page</p>
            <Link href={"/report"}>할일정보통계보러가기</Link>
        </>
    );
};

export default TodosSsrPage;