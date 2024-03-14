import React from "react";

const ReportPage = async () => {
    const response = await fetch("http://localhost:3000/api/todos", {
        next: {
            revalidate: 10
        }
    });
    const { data } = await response.json();

    return (
        <div>
            <div>ReportPage</div>
        </div>
    )
}

export default ReportPage;