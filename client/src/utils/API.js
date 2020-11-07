import axios from "axios";

console.log(process.env.REACT_APP_API_KEY);

export default {
  getBooks: function (query) {
    return axios({
      method: "GET",
      url: `https://www.googleapis.com/books/v1/volumes?q=${query}&key=${process.env.REACT_APP_API_KEY}`,

      // url: "/api/google",{params:{}}
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
