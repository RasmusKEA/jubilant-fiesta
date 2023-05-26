const redis = require("redis");
const publisher = redis.createClient();

(async () => {
  const test = {
    name: "test",
  };

  await publisher.connect();

  await publisher.publish("test", JSON.stringify(test));
})();
