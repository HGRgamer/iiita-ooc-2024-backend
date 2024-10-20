require('dotenv').config();
const { imgToUrl } = require("./src/Utils");

const imgData = 'data:image/png;base64,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';

const url = imgToUrl(imgData);
url.then(data => {
    console.log(data);
})