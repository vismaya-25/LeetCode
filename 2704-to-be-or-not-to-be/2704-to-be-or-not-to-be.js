
var expect = function(value) {
    return {
        toBe: function(val) {
            if (val === value) {
                return true;
            }
            throw new Error("Not Equal");
        },

        notToBe: function(val) {
            if (val !== value) {
                return true;
            }
            throw new Error("Equal");
        }
    };
};
