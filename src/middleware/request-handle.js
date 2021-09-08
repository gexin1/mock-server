const jsonHandle = require("../file-hanlde/json-handle")
const jsHandle = require("../file-hanlde/js-handle");
const imageHandle = require("../file-hanlde/image-handle")
const path = require("path");
const {
    mockDir
} = require("../../mock-server.config")
const fse = require("fs-extra");
const fileExts = ['.json', '.js', '.jpg', '.jpeg', '.png', '.gif', '.svg', '.webp'];
module.exports = async ctx => {
    let url = ctx.request.url;
    let fileDir = path.join(mockDir, url);

    const {
        ext
    } = path.parse(url);

    // 对文件进行预处理
    // 猜测一下可能存在的文件
    while (true) {
        if (ext) {
            break;
        }
        for (const extItem of fileExts) {
            const isExist = fse.existsSync(fileDir + extItem);
            if (isExist) {
                fileDir = fileDir + extItem;
                url = url + extItem;
                break;
            }
        }
        break;
    }

    ctx.request.fileDir = fileDir;


    try {
        if (/.json$/.test(url)) {
            jsonHandle(ctx);
            return;
        }
        if (/.js$/.test(url)) {
            jsHandle(ctx);
            return;
        }
        if (/\.(png|svg|jpe?g|gif)$/.test(url)) {
            imageHandle(ctx);
            return;
        }
    } catch (error) {
        ctx.body = error.message;
        return
    }


    ctx.body = `${url}-${fileDir}没有找到对应对应文件或处理类型`;
}