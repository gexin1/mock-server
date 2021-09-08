const fse = require("fs-extra")
module.exports = (ctx) => {
    const fileDir = ctx.request.fileDir;
    const content = fse.readFileSync(fileDir);
    ctx.type = 'application/json';
    ctx.body = content;
}