"use strict";

var contains = function contains(haystack, needle) {
    return haystack.indexOf(needle) !== -1;
};

var containsPartOf = function containsPartOf(haystack, needle) {
    var _iteratorNormalCompletion = true;
    var _didIteratorError = false;
    var _iteratorError = undefined;

    try {
        for (var _iterator = needle.split("")[Symbol.iterator](), _step; !(_iteratorNormalCompletion = (_step = _iterator.next()).done); _iteratorNormalCompletion = true) {
            var char = _step.value;

            if (contains(haystack, char)) {
                return true;
            }
        }
    } catch (err) {
        _didIteratorError = true;
        _iteratorError = err;
    } finally {
        try {
            if (!_iteratorNormalCompletion && _iterator.return) {
                _iterator.return();
            }
        } finally {
            if (_didIteratorError) {
                throw _iteratorError;
            }
        }
    }

    return false;
};

var insertSpaces = function insertSpaces(value) {
    var spaces = arguments.length <= 1 || arguments[1] === undefined ? [] : arguments[1];

    spaces.forEach(function (space) {
        value = value.slice(0, parseInt(space)) + " " + value.slice(parseInt(space));
    });

    return value.trim();
};

var isNumeric = function isNumeric(value) {
    return (/^\d+$/.test(value)
    );
};

var stripNonNumeric = function stripNonNumeric(value) {
    return value.toString().replace(/\D+/g, "");
};

var stripWhiteSpace = function stripWhiteSpace(value) {
    return value.toString().replace(/ /g, "");
};

var trimToLength = function trimToLength(value, length) {
    return value.substr(0, length);
};

module.exports = {
    contains: contains,
    containsPartOf: containsPartOf,
    insertSpaces: insertSpaces,
    isNumeric: isNumeric,
    stripNonNumeric: stripNonNumeric,
    stripWhiteSpace: stripWhiteSpace,
    trimToLength: trimToLength
};