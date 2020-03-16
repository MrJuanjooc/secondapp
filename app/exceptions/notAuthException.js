class notAuthException extends Error {
    constructor (){
        super ('Usuario no tiene autorización');
        this.status = 401;
    };
};

module.exports = notAuthException