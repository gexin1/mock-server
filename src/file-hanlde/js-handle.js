module.exports = (ctx) => {
    const fileDir = ctx.request.fileDir;
    const handle = require(fileDir)
    handle(ctx);
}