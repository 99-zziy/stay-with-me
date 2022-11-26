import api from "./api";

export const searchRooms = async ({ start, end, capacity }) => {
  const { data } = await api.get(
    `${process.env.REACT_APP_SERVER_URL}/book/date?start=${start}&end=${end}&capacity=${capacity}`
  );
  return data;
};

export const reserveRoom = async ({
  bookPrice,
  checkInDate,
  checkOutDate,
  roomId,
  bookOption,
  userName,
  userPhone,
  cardNum,
  cardCompany,
}) => {
  const { data } = await api.post(
    `${process.env.REACT_APP_SERVER_URL}/book?bookPrice=${bookPrice}&checkInDate=${checkInDate}&checkOutDate=${checkOutDate}&roomId=${roomId}&bookOption=${bookOption}&userName=${userName}&userPhone=${userPhone}&cardNum=${cardNum}&cardCompany=${cardCompany}`
  );
  return data;
};

export const login = async ({ bookId, cardNum }) => {
  const { data } = await api.get(
    `${process.env.REACT_APP_SERVER_URL}/book/check?bookId=${bookId}&cardNum=${cardNum}`
  );
  return data;
};
