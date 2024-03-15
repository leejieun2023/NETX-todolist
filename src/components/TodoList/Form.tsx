"use client";

import React, { useState } from "react";
import { newTodo } from "@/types/types";
import { useMutation, useQueryClient } from "@tanstack/react-query";

function Form() {
    const [title, setTitle] = useState("");
    const [content, setContent] = useState("");

    const queryClient = useQueryClient();

    const writeMutation = useMutation({
        mutationFn: async (newtodo: newTodo) => {
            try {
                await fetch("http://localhost:4001/todos", {
                    method: "POST",
                    body: JSON.stringify(newtodo)
                });
            } catch (error) {
                console.log("error", error);
            }
        }
    });

    const handleSubmit = async () => {
        if (!title || !content) {
            alert("제목 또는 내용을 채워주세요!");
            return;
        }
        if (!window.confirm("등록하시겠습니까?")) {
            return;
        }

        try {
            const newtodo: newTodo = {
                title,
                content,
                isDone: false
            };
            writeMutation.mutate(newtodo, {
                onSuccess: () => {
                    queryClient.invalidateQueries({ queryKey: ["todos"] });
                    setTitle("");
                    setContent("");
                }
            });
        } catch (error) {
            alert("등록이 실패되었습니다.")
        }
    };

    return (
        <section>
            <form onSubmit={(event) => {
                event.preventDefault();
                handleSubmit();
            }}>
                <input
                    placeholder="제목"
                    value={title}
                    onChange={(event) => setTitle(event.target.value)}>
                </input>

                <input
                    placeholder="해야 할 일"
                    value={content}
                    onChange={(event) => setContent(event.target.value)}>
                </input>

                <button
                    type="submit">
                    추가하기
                </button>
            </form>
        </section>
    );
}

export default Form;