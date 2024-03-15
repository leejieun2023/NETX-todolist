import { TodoType } from "@/types/types";
import Link from "next/link";
import React from "react";

const TodosSsrPage = async () => {

  const response = await fetch(`http://localhost:4000/todos`, {
    cache: 'no-cache'
  });
  const data: TodoType[] = await response.json();

  const todoList = data.filter((item) => item.isDone === false);
  const doneList = data.filter((item) => item.isDone === true);


    return (
        <>
          <div>SSR PAGE</div>
          <Link href={"/report"}>할일정보통계보러가기</Link>
        </>
      );
    };

export default TodosSsrPage;