'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _immutable = require('immutable');

var Immutable = _interopRequireWildcard(_immutable);

var _dogActions = require('../actions/dog-actions');

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) newObj[key] = obj[key]; } } newObj.default = obj; return newObj; } }

var initialState = Immutable.Map({
  hasBarked: false
});

var dogReducer = function dogReducer() {
  var state = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : initialState;
  var action = arguments[1];

  switch (action.type) {
    case _dogActions.MAKE_BARK:
      return state.set('hasBarked', action.payload);
    default:
      return state;
  }
};

exports.default = dogReducer;