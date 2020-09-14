"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ResponseStatus = exports.Errors = void 0;
var Errors;
(function (Errors) {
    Errors["USERNAME"] = "snowUsername is not set";
    Errors["PASSWORD"] = "snowPassword is not set";
    Errors["INSTANCE"] = "snowSourceInstance is not set";
    Errors["APPSYSID"] = "appSysID is not set";
    Errors["APPSCOPE"] = "appScope is not set";
    Errors["GITHUB_TOKEN"] = "GITHUB_TOKEN is missing";
    Errors["GITHUB_WORKSPACE"] = "GITHUB_WORKSPACE is missing";
})(Errors = exports.Errors || (exports.Errors = {}));
var ResponseStatus;
(function (ResponseStatus) {
    ResponseStatus[ResponseStatus["Pending"] = 0] = "Pending";
    ResponseStatus[ResponseStatus["Running"] = 1] = "Running";
    ResponseStatus[ResponseStatus["Successful"] = 2] = "Successful";
    ResponseStatus[ResponseStatus["Failed"] = 3] = "Failed";
    ResponseStatus[ResponseStatus["Canceled"] = 4] = "Canceled";
})(ResponseStatus = exports.ResponseStatus || (exports.ResponseStatus = {}));
