const path = require("path")
const fse = require("fs-extra")
module.exports = (ctx) => {
    const fileDir = ctx.request.fileDir;
    const {
        ext
    } = path.parse(fileDir);
    const body = fse.readFileSync(fileDir);

    ctx.type = ext;
    ctx.body = body;
}