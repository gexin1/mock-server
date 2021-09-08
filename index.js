const Koa = require('koa');
const app = new Koa();
const conf = require("./mock-server.config");
const port = conf.port || 9524;
const requestHandle = require("./src/middleware/request-handle");

app.use(requestHandle);

app.listen(port, () => {
    console.info(`mock-server已启动 端口${port}`);
});