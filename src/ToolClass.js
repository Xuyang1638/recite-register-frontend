const ToolClass = class {
    constructor() {
        // Empty constructor function
    }

    GetRequest() {
        var url = location.search; //获取url中"?"符后的字串
        var theRequest = new Object();
        if (url.indexOf("?") != -1) {
            var str = url.substr(1);
            strs = str.split("&");
            for(var i = 0; i < strs.length; i ++) {
                theRequest[strs[i].split("=")[0]]=unescape(strs[i].split("=")[1]);
            }
        }
        return theRequest;
    }
    
    GetParam(paramName) {
        let theRequest = GetRequest()
        return theRequest[paramName]
    }
    
    // Network Interface
    HTTP_GET($, url, next) {
        // Default options are marked with *
        $.getJSON(url, function(data) { // jQuery API
          next(data)
        })
    }
    
    // Logs Module
    RecordLog(logString) {
        let url = '/log/add?content=' + logString
        HTTP_GET(window.$, url, function(data) {
            if (data.code = 200) {
                return true
            } else {
                return false
            }
        })
    }
    
    GetGlobalVariables() {
        return {
            "backendDomain": "//120.55.167.135:8080"
        }
    }    
}

export {ToolClass}