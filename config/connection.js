const { connect, connection} = require('mongoose');

const connectionString = process.env.MONGODB_URI || 'mongodb+srv://jrsevi:Birdman44!@atlascluster.u9uhjhx.mongodb.net/';

connect (connectionString, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
});

module.exports = connection;