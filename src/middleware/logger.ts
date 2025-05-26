import app from "../app";

app.use(async (c, next) => {
  const start = Date.now();
  await next();
  const end = Date.now();
  console.log(`Running time: ${end - start}`);
  c.res.headers.set("X-Response-Time", `${end - start}`);
});
