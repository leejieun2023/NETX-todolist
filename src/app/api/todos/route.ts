export async function GET(request: Request) {
  const response = await fetch("http://localhost:4001/todos");
  const todos = await response.json();

  if (!todos) {
    return new Response("Todo is not found", {
      status: 404,
    });
  }

  return Response.json({
    data: todos,
  });
}

export async function POST(request: Request) {
  const { title, contents } = await request.json();

  const response = await fetch("http://localhost:4001/todos", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },

    body: JSON.stringify({ title, contents, isDone: false }),
  });

  const todo = await response.json();

  return Response.json({
    data: todo,
  });
}

export async function PATCH(request: Request) {
  const { id, title, contents, isDone } = await request.json();

  const response = await fetch(`http://localhost:4000/todos/${id}`, {
    method: "PATCH",
    headers: {
      "Content-Type": "application/json",
    },

    body: JSON.stringify({ id, title, contents, isDone }),
  });

  const todo = await response.json();

  return Response.json({
    data: todo,
  });
}

export async function DELETE(request: Request) {
  const { id } = await request.json();

  const response = await fetch(`http://localhost:4001/todos/${id}`, {
    method: "DELETE",
    headers: {
      "Content-Type": "application/json",
    },
  });

  const todo = await response.json();

  return Response.json({
    data: todo,
  });
}