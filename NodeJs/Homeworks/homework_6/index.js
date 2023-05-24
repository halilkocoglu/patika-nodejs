const Koa = require("koa");
const app = new Koa();
const port = 3000;

app.use((ctx) => {
  if (ctx.request.path === "/") {
    ctx.response.body = "<h1>Home</h1>";
  } else if (ctx.request.path === "/about") {
    ctx.response.body = "<h1>About</h1>";
  } else if (ctx.request.path === "/contact") {
    ctx.response.body = "<h1>Contact</h1>";
  } else {
    ctx.status = 404;
    ctx.response.body = "<h1>Page not found</h1>";
  }
});

app.listen(port, (err) => {
  if (err) {
    console.log(err);
  }
  console.log(`Server listening on ${port}`);
});
