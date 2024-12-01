const LOCAL_URL = "http://localhost:3000/";

const getHeaderInfo = (): HeadersInit => {
  return {
    Accept: "application/json",
    "Content-Type": "application/json",
  };
};

async function getAllAppData() {
  const url = LOCAL_URL + "allapps";
  try {
    const response = await fetch(url, {
      method: "GET",
      headers: getHeaderInfo(),
    });

    const json = await response.json();

    console.log(json);
    return json;
  } catch (error) {
    console.log(error);
  }
}

async function postNewApp(companyName: string, location: string) {
  const url = LOCAL_URL + "newApp";

  const newBody = {
    companyName: companyName,
    location: location,
  };

  try {
    const response = await fetch(url, {
      method: "POST",
      body: JSON.stringify(newBody),
      headers: getHeaderInfo(),
    });

    const json = await response.json();

    console.log(json);
    return json;
  } catch (error) {
    console.log(error);
  }
}

async function deleteItem(id: number) {
  const url = LOCAL_URL + `deleteapp/${id}`;
  try {
    const response = await fetch(url, {
      method: "DELETE",
      headers: getHeaderInfo(),
    });

    const json = await response.json();

    console.log(json);
    return json;
  } catch (error) {
    console.log(error);
  }
}

async function updateStage(id: number, stage: string, date: Date | null) {
  const url = LOCAL_URL + `updateApp/${id}`;

  const newBody = {
    stage: stage,
    date: date,
  };

  try {
    const response = await fetch(url, {
      method: "PUT",
      headers: getHeaderInfo(),
      body: JSON.stringify(newBody),
    });

    const json = await response.json();

    console.log(json);
    return json;
  } catch (error) {
    console.log(error);
  }
}

export { getAllAppData, postNewApp, deleteItem, updateStage };
