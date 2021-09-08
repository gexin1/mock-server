const path = require("path");
const fse = require("fs-extra");

const conf = {
    mockDir: path.resolve(__dirname, "../../.mocks"),
    port: 3000
}
const projectDir = path.resolve(__dirname, "../../mock-server.config.js")
const isExist = fse.existsSync(projectDir);

if (isExist) {
    const projectConf = require(projectDir)
    Object.assign(conf, projectConf)
}
module.exports = conf;