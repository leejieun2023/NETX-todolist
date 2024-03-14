import React from "react";
import { TodoType } from "@/types/types";

const ReportPage = async () => {
    const response = await fetch("http://localhost:4001/todos", {
        next: {
            revalidate: 10,
        },
    });
    const todolist = await response.json();

    const totalTodo = todolist.length;
    const working = todolist.filter((item: TodoType) => item.isDone === false).length;
    const done = todolist.filter((item: TodoType) => item.isDone === true).length;

    return (
        <main>
            <div>
                <h1>📌 현재까지 {totalTodo}개의 TodoList가 등록되었습니다 (｡•̀ᴗ-)✧</h1>
                <p>현재까지 {working}개의 할 일이 존재합니다 (ò_óˇ)💪</p>
                <p>완료된 TodoList는 {done}개 입니다 (๑•̑з•̑๑)👍</p>
            </div>
        </main>
    )
}

export default ReportPage;