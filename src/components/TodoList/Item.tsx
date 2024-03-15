"use client";

import React from "react";
import { useMutation, useQueryClient } from "react-query";
import { TodoType, UpdateTodo } from "@/types/types";

function Item({ todoData }: { todoData: TodoType[] }) {
    const queryClient = useQueryClient();

    const isDoneMutation = useMutation({
        mutationFn: async (updateTodo: UpdateTodo) => {
            try {
                await fetch("http://localhost:3000/api/todos", {
                    method: "PATCH",
                    body: JSON.stringify({ id: updateTodo.id, isDone: updateTodo.isDone })
                });
            } catch (error) {
                console.log("error", error);
            }
        }
    });

    const toggleIsDone = (id: string, isDone: boolean) => {
        const updateTodo = {
            id,
            isDone,
        };
        isDoneMutation.mutate(updateTodo, {
            onSuccess: () => {
                queryClient.invalidateQueries({ queryKey: ["todos"] });
            }
        });
    };


    return (
        <section>
            {todoData.map((item) => (
                <div key={item.id}>
                    <p>{item.title}</p>
                    <p>{item.content}</p>
                    <button onClick={() => toggleIsDone(item.id, item.isDone)}> 체크
                    </button>
                </div>
            ))};
        </section>
    )

}

export default Item;