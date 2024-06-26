const baseUrl = "https://serverpanelhashalom.onrender.com";

export const fetchApi = async (route, method, body) => {
  const url = baseUrl + route;
  try {
    const response = await fetch(url, {
      method: method || 'GET',
      headers: {
        'Content-Type': 'application/json',
      },
      body: body ? JSON.stringify(body) : null,
    });

    if (!response.ok) {
      const errorResponse = await response.text();
      throw new Error(`Network response was not ok: ${errorResponse}`);
    }

    return await response.json();
  } catch (error) {
    console.error('fetch Error', error.message);
    throw error; // Rethrow the error to handle it in the component
  }
};

// export const login = async (body) => {
//   const url = "/login";
//   return await fetchApi(url, 'POST', body);
// };

export const createUser = async (body) => {
  const url = "/createNewUser";
  return await fetchApi(url, 'POST', body);
};

export const All_Data = async () => {
  const url = "/getAllUsers";
  return await fetchApi(url, 'GET', null);
}
