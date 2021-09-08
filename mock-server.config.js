const path = require("path");
const fse = require("fs-extra");

const conf = {
    mockDir: path.resolve(__dirname, "./.mocks"),
    port: 3000
}
const projectConf = path.resolve(__dirname, "../mock-server.config.js")
const isExist = fse.existsSync(projectConf);

if (isExist) {
    Object.assign(conf, projectConf)
}
module.exports = conf;