"use client";

import React from "react";
import Link from "next/link";
import Form from "@/components/TodoList/Form";
import List from "@/components/TodoList/List";

const TodosCsrPage = () => {

  return (
    <main>
      <Form></Form>
      <List></List>
      <Link href={"/report"}>할일정보통계보러가기</Link>
    </main>
  );
};

export default TodosCsrPage;