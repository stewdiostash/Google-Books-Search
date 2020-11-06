import axios from "axios";

console.log(process.env.REACT_APP_API_KEY);

export default {
  getBooks: function (search) {
    return axios({
      method: "GET",
      url: `https://googleapis.com/books/v1/volumes?q=${search}&key=${process.env.REACT_APP_API_KEY}`,
    });
  },
  postBook: function (bookLink) {
    return axios({
      method: "POST",
      url: "/api/books",
      data: {
        link: bookLink,
      },
    });
  },
};
