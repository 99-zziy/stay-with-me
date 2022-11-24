import api from "./api";

export const searchRooms = async ({ start, end, capacity }) => {
  const { data } = await api.get(
    `${process.env.REACT_APP_SERVER_URL}/book?start=${start}&end=${end}&capacity=${capacity}`
  );
  return data;
};

export const reserveRoom = async (body) => {
  const { data } = await api.post(
    `${process.env.REACT_APP_SERVER_URL}/book`,
    body
  );
  return data;
};
