"use client";

import { TodoList } from "@/types/types";
import { useQuery } from "@tanstack/react-query";
import Item from "./Item";
import React from "react";

function List() {

    const { data, isLoading } = useQuery<TodoList>({
        queryKey: ["todos"],
        queryFn: async () => {
            try {
                const response = await fetch("http://localhost:3000/api/todos");
                const { todoList } = await response.json();

                return todoList

            } catch (error) {
                return [];
            }
        }
    });

    if (isLoading) {
        return <div>데이터 로드 중...</div>;
    }
    if (!data) {
        return <div>데이터 불러오기 오류</div>;
    }

    const todoList: TodoList = data.filter((item) => !item.isDone);
    const doneList: TodoList = data.filter((item) => item.isDone);

    return (
        <section>
            <div>
                working <Item todoData={todoList} />
            </div>

            <div>
                done <Item todoData={doneList} />
            </div>

        </section>
    );
};

export default List;