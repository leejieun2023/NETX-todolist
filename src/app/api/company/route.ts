export const GET = async (request: Request) => {
    const response = await fetch("http://localhost:4000/companyInfo", {
      cache: "force-cache",
    });
    const data = await response.json();
  
    if (!data) {
      return new Response("Company Info is not found", {
        status: 404,
      });
    }
  
    return Response.json({
      data,
    });
  };