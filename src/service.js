const axios = require("axios");

export const onSubmitService = (url, customer) => axios.post(url, customer);
