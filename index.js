/*
 * Netrunr JavaScript API wrapper with Promises/Async-Await
 *
 * Copyright(C) 2017,2018 Axiomware Systems Inc.. All Rights Reserved.
 */

var netrunr = require('netrunr-gapi');

module.exports = class netrunrGapiAsync {

    constructor(name) {
        // invokes the setter
        this._name = name;
        this._transportOpenFlag = false;
        this._loginFlag = false;
        this._gwidList = null;
        this._gwLiveFlag = false; 
        this._gapi = new netrunr.gapi();
        this._commandStat = {
            auth: 0,
        };
    }

    get isOpen() {
        return this._transportOpenFlag;
    }

    get isLogin() {
        return this._loginFlag;
    }

    get isGWlive() {
        return this._gwLiveFlag;
    }
    
    version(timeoutInMilliseconds) {
        let self = this;
        return new Promise((resolve, reject) => {
            self._gapi.version({},
                function (robj) {
                    self._gwLiveFlag = true; 
                    resolve(robj);
                },
                function (robj) {
                    reject(robj);
                }
            );
            setTimeout(function () {
                reject({
                    "result": 408,
                    "version": null,
                    "error": '(version) timeout after ' + timeoutInMilliseconds + ' ms'
                })
            }, timeoutInMilliseconds);
        });
    }

    auth(params) {
        let self = this;
        self._commandStat.auth++;
        return new Promise((resolve, reject) => {
            self._gapi.auth(params,
                function (robj) {
                    self._commandStat.auth--;
                    if ((robj.result == 200) && (robj.token))
                        resolve(robj);
                    else
                        reject(robj);
                },
                function (robj) {
                    self._commandStat.auth--;
                    reject(robj);
                }
            )
        });
    }

    isAuth() {
        return this._gapi.isAuth();
    }

    config(params) {
        return this._gapi.config(params);
    }

    login(params) {
        let self = this;
        return new Promise((resolve, reject) => {
            self._gapi.login(params,
                function (robj) {
                    self._loginFlag = true;
                    resolve(robj);
                },
                function (robj) {
                    self._loginFlag = false;
                    reject(robj);
                }
            )
        });
    }

    logout() {
        let self = this;
        return new Promise((resolve, reject) => {
            self._gapi.logout({},
                function (robj) {
                    self._loginFlag = false;
                    self._gwLiveFlag = false;
                    resolve(robj);
                },
                function (robj) {
                    reject(robj);
                }
            )
        });
    }

    open() {
        let self = this;
        return new Promise((resolve, reject) => {
            self._gapi.open({},
                function (robj) {
                    self._transportOpenFlag = true;
                    resolve(robj);
                },
                function (robj) {
                    self._transportOpenFlag = false;
                    reject(robj);
                }
            )
        });
    }
    close() {
        let self = this;
        return new Promise((resolve, reject) => {
            self._gapi.close({},
                function (robj) {
                    self._transportOpenFlag = false;
                    self._gwLiveFlag = false;
                    resolve(robj);
                },
                function (robj) {
                    self._gwLiveFlag = false;
                    reject(robj);
                }
            )
        });
    }

    event(params, success, error) {
        this._gapi.event(params, success, error);
    }

    report(params, success, error) {
        this._gapi.report(params, success, error);
    }

    pair(params) {
        let self = this;
        return new Promise((resolve, reject) => {
            self._gapi.pair(params,
                function (robj) {
                    self._gwLiveFlag = true;
                    resolve(robj);
                },
                function (robj) {
                    reject(robj);
                }
            )
        });
    }

    show() {
        let self = this;
        return new Promise((resolve, reject) => {
            self._gapi.show({},
                function (robj) {
                    self._gwLiveFlag = true;
                    resolve(robj);
                },
                function (robj) {
                    reject(robj);
                }
            )
        });
    }

    list(params) {
        let self = this;
        return new Promise((resolve, reject) => {
            self._gapi.list(params,
                function (robj) {
                    self._gwLiveFlag = true;
                    resolve(robj);
                },
                function (robj) {
                    reject(robj);
                }
            )
        });
    }

    connect(params) {
        let self = this;
        return new Promise((resolve, reject) => {
            self._gapi.connect(params,
                function (robj) {
                    self._gwLiveFlag = true;
                    resolve(robj);
                },
                function (robj) {
                    reject(robj);
                }
            )
        });
    }

    disconnect(params) {
        let self = this;
        return new Promise((resolve, reject) => {
            self._gapi.disconnect(params,
                function (robj) {
                    self._gwLiveFlag = true;
                    resolve(robj);
                },
                function (robj) {
                    reject(robj);
                }
            )
        });
    }

    services(params) {
        let self = this;
        return new Promise((resolve, reject) => {
            self._gapi.services(params,
                function (robj) {
                    self._gwLiveFlag = true;
                    resolve(robj);
                },
                function (robj) {
                    reject(robj);
                }
            )
        });
    }

    characteristics(params) {
        let self = this;
        return new Promise((resolve, reject) => {
            self._gapi.characteristics(params,
                function (robj) {
                    self._gwLiveFlag = true;
                    resolve(robj);
                },
                function (robj) {
                    reject(robj);
                }
            )
        });
    }

    descriptors(params) {
        let self = this;
        return new Promise((resolve, reject) => {
            self._gapi.descriptors(params,
                function (robj) {
                    self._gwLiveFlag = true;
                    resolve(robj);
                },
                function (robj) {
                    reject(robj);
                }
            )
        });
    }

    subscribe(params) {
        let self = this;
        return new Promise((resolve, reject) => {
            self._gapi.subscribe(params,
                function (robj) {
                    self._gwLiveFlag = true;
                    resolve(robj);
                },
                function (robj) {
                    reject(robj);
                }
            )
        });
    }
    unsubscribe(params) {
        let self = this;
        return new Promise((resolve, reject) => {
            self._gapi.unsubscribe(params,
                function (robj) {
                    self._gwLiveFlag = true;
                    resolve(robj);
                },
                function (robj) {
                    reject(robj);
                }
            )
        });
    }
    read(params) {
        let self = this;
        return new Promise((resolve, reject) => {
            self._gapi.read(params,
                function (robj) {
                    self._gwLiveFlag = true;
                    resolve(robj);
                },
                function (robj) {
                    reject(robj);
                }
            )
        });
    }
    write(params) {
        let self = this;
        return new Promise((resolve, reject) => {
            self._gapi.write(params,
                function (robj) {
                    self._gwLiveFlag = true;
                    resolve(robj);
                },
                function (robj) {
                    reject(robj);
                }
            )
        });
    }
    writenoresponse(params) {
        let self = this;
        return new Promise((resolve, reject) => {
            self._gapi.writenoresponse(params,
                function (robj) {
                    self._gwLiveFlag = true;
                    resolve(robj);
                },
                function (robj) {
                    reject(robj);
                }
            )
        });
    }

}


