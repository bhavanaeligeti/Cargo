const mongoose = require("mongoose")

mongoose.set('strictQuery', false);

mongoose.connect("mongodb+srv://bhimanpallydeepika:bhimanpallydeepika@cluster0.ngm1m2z.mongodb.net/test",).then(() => {
    console.log(`connection successful`);
}).catch((e) => {
    console.log(`no connection`);
})

module.exports = mongoose