var create_schema = function (obj, ignore_fields) {
    if( typeof ignore_fields === "undefined"){
        ignore_fields = []
    }
    // NOTE: karate does not support array.includes()
    // NOTE: "##type" indicates it may be of expected "type" or null or key may not exist

    var type = typeof obj
    //if object
    if (type == 'object') {
        // if not null
        if (obj) {
            // if array
            if (Array.isArray(obj)) {
                obj = "#[] ".concat(JSON.stringify(create_schema(obj[0], ignore_fields)))
            }
            // if object 
            else {
                // var keys = Object.keys(obj)
                var keys = Object.keys(obj).filter(function (key) {
                    return ignore_fields.indexOf(key) === -1
                })
                keys.forEach(function (key, _) {
                    special_handling(obj, key, ignore_fields)
                });
            }
            ignore_fields.forEach(function (ignore_field) {
                obj[ignore_field] = "#ignore"
            });
            return obj
        }
        // if null
        else {
            return "#ignore"
        }
    }
    // if leaf
    else {
        // return type of leaf
        return "#".concat(type)
    }
};


var special_handling = function (obj, key, ignore_fields) {
    if (IGNORE.indexOf(key) >= 0) {
        obj[key] = "#ignore"
    } else {
        obj[key] = create_schema(obj[key], ignore_fields)
    }
};

var IGNORE = [];