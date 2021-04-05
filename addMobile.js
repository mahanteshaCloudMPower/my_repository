(function(){

    let getMethod = require("../../config/getGlobalMethod");

    let methodName = getMethod.FileName;

    let modelName = "Login";

    module.exports.userLogin = async (commandObj) => {
        let request = commandObj.body;
        let model = addMobile(methodName.dbAbstrator)(modelName);
        let utils = commandObj.utils;

        let response = await model.save(request);
        return utils.createResponseObj(response, "LoginFailed", "LoginSuccess");
    };
})();