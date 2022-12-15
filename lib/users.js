import axios from "axios";

const url = "https://jsonplaceholder.typicode.com/users";

export const getUsers = async () => {
  const { data } = await axios.get(url, {
    headers: { "Accept-Encoding": "gzip,deflate,compress" },
  });
  return data;
};

export const getAllUsersids = async () => {
  const { data } = await axios(url, {
    headers: { "Accept-Encoding": "gzip,deflate,compress" },
  });
  const paths = data.map((user) => {
    params: {
      id: user.id.toString();
    }
  });
  return paths;
};

export const getUserData = async (id) => {
  const { data } = await axios(url, {
    headers: { "Accept-Encoding": "gzip,deflate,compress" },
  });
  const user = data.filter((user) => user.id === id);
  return {
    id: user,
  };
};
