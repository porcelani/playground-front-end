/**
 * Created by Edlaine on 19/03/16.
 */
var Util = (function(){
    var util = {};
    util.replaceWithData = function (target, obj) {
        for (var prop in obj) {
            if (obj.hasOwnProperty(prop)) {
                var pattern = '\{\{' + prop + '\}\}';
                var er = new RegExp(pattern, 'g');
                target.innerHTML = target.innerHTML.replace(er,obj[prop]);
            }
        }
    };
    return util;
})();