class Logger  {
    constructor(){
        this.level={};
        this.configure("DBG",true);
        this.configure("LOG",true);
        this.configure("WAR",true);
        this.configure("ERR",true);
    }
    dbg  (txt) { if (this.level["DBG"] === false ) return; console.debug  ( new Date().toISOString() + " - [DBG] - " + txt)}
    log  (txt) { if (this.level["LOG"] === false ) return; console.log  ( new Date().toISOString() + " - [LOG] - " + txt)}
    warn  (txt) { if (this.level["WAR"] === false ) return; console.warn ( new Date().toISOString() + " - [WAR] - " + txt);}
    error   (txt) { if (this.level["ERR"] === false ) return; console.error( new Date().toISOString() + " - [ERR] - " + txt);}
    register (obj, prefix) {
        obj.log = function(x) { LOGGER.log(`[${prefix}] ` +x );}
        obj.warn = function(x) { LOGGER.warn(`[${prefix}] ` +x );}
        obj.error = function(x) { LOGGER.error(`[${prefix}] ` +x );}
        obj.dbg = function(x) { LOGGER.dbg(`[${prefix}] ` +x );}
    }
    deactivate(){ 
        Object.keys(this.level).forEach( l => this.level[l] = false);
    }
    activate(){ 
        Object.keys(this.level).forEach( l => this.level[l] = true);
    }
    configure  (level,status) { 
        this.level[level] = status;
    }
}
var LOGGER = new Logger();

module.exports=LOGGER;
