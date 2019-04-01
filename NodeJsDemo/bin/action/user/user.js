
var role = {

};

var User = {
    createNew: function (userName, password, role) {
        var user = {};
        user.username = userName;
        user.password = password;
        user.role = role;
        return user;
    }
};

function createUser(userName, password, role) {
    /**
     * 1.校验用户名
     * 2.校验密码
     * 3.将用户名，密码,角色存入数据库
     */
}

function delUser(userName) {
    /**
     * 1.在数据库中查询是否有记录
     * 2.如果有
     */
    return true;
}

function listUser(pageIndex, pageSize) {
    /**
     * 1.根据pageIndex和pageSize查询用户
     * 2.按照list返回用户信息
     */
    var arrayOfUser = new Array([pageSize]);
    return arrayOfUser;
}