'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _web = require('web3');

var _web2 = _interopRequireDefault(_web);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var web3 = void 0;

if (typeof window !== 'undefined' && typeof window.web3 !== 'undefined') {
  // We are in the browser and metamask is running.
  web3 = new _web2.default(window.web3.currentProvider);
} else {
  // We are on the server *OR* the user is not running metamask
  var provider = new _web2.default.providers.HttpProvider('https://rinkeby.infura.io/v3/882ea730459b4a0baa7d8488e1a1a16e');
  web3 = new _web2.default(provider);
}

exports.default = web3;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInVua25vd24iXSwibmFtZXMiOlsid2ViMyIsIndpbmRvdyIsImN1cnJlbnRQcm92aWRlciIsInByb3ZpZGVyIiwicHJvdmlkZXJzIiwiSHR0cFByb3ZpZGVyIl0sIm1hcHBpbmdzIjoiOzs7Ozs7QUFBQTs7Ozs7O0FBRUEsSUFBSUEsT0FBTyxLQUFLLENBQWhCOztBQUVBLElBQUksT0FBT0MsTUFBUCxLQUFrQixXQUFsQixJQUFpQyxPQUFPQSxPQUFPRCxJQUFkLEtBQXVCLFdBQTVELEVBQXlFO0FBQ3ZFO0FBQ0FBLFNBQU8sa0JBQVNDLE9BQU9ELElBQVAsQ0FBWUUsZUFBckIsQ0FBUDtBQUNELENBSEQsTUFHTztBQUNMO0FBQ0EsTUFBSUMsV0FBVyxJQUFJLGNBQUtDLFNBQUwsQ0FBZUMsWUFBbkIsQ0FBZ0MsK0RBQWhDLENBQWY7QUFDQUwsU0FBTyxrQkFBU0csUUFBVCxDQUFQO0FBQ0Q7O2tCQUVjSCxJIiwiZmlsZSI6InVua25vd24iLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgV2ViMyBmcm9tICd3ZWIzJztcblxudmFyIHdlYjMgPSB2b2lkIDA7XG5cbmlmICh0eXBlb2Ygd2luZG93ICE9PSAndW5kZWZpbmVkJyAmJiB0eXBlb2Ygd2luZG93LndlYjMgIT09ICd1bmRlZmluZWQnKSB7XG4gIC8vIFdlIGFyZSBpbiB0aGUgYnJvd3NlciBhbmQgbWV0YW1hc2sgaXMgcnVubmluZy5cbiAgd2ViMyA9IG5ldyBXZWIzKHdpbmRvdy53ZWIzLmN1cnJlbnRQcm92aWRlcik7XG59IGVsc2Uge1xuICAvLyBXZSBhcmUgb24gdGhlIHNlcnZlciAqT1IqIHRoZSB1c2VyIGlzIG5vdCBydW5uaW5nIG1ldGFtYXNrXG4gIHZhciBwcm92aWRlciA9IG5ldyBXZWIzLnByb3ZpZGVycy5IdHRwUHJvdmlkZXIoJ2h0dHBzOi8vcmlua2VieS5pbmZ1cmEuaW8vdjMvODgyZWE3MzA0NTliNGEwYmFhN2Q4NDg4ZTFhMWExNmUnKTtcbiAgd2ViMyA9IG5ldyBXZWIzKHByb3ZpZGVyKTtcbn1cblxuZXhwb3J0IGRlZmF1bHQgd2ViMzsiXX0=
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInVua25vd24iXSwibmFtZXMiOlsid2ViMyIsIndpbmRvdyIsImN1cnJlbnRQcm92aWRlciIsInByb3ZpZGVyIiwicHJvdmlkZXJzIiwiSHR0cFByb3ZpZGVyIl0sIm1hcHBpbmdzIjoiOzs7Ozs7QUFBQTs7Ozs7O0FBRUEsSUFBSUEsT0FBTyxLQUFLLENBQWhCOztBQUVBLElBQUksT0FBT0MsTUFBUCxLQUFrQixXQUFsQixJQUFpQyxPQUFPQSxPQUFPRCxJQUFkLEtBQXVCLFdBQTVELEVBQXlFO0FBQ3ZFO0FBQ0FBLFNBQU8sa0JBQVNDLE9BQU9ELElBQVAsQ0FBWUUsZUFBckIsQ0FBUDtBQUNELENBSEQsTUFHTztBQUNMO0FBQ0EsTUFBSUMsV0FBVyxJQUFJLGNBQUtDLFNBQUwsQ0FBZUMsWUFBbkIsQ0FBZ0MsK0RBQWhDLENBQWY7QUFDQUwsU0FBTyxrQkFBU0csUUFBVCxDQUFQO0FBQ0Q7O2tCQUVjSCxJIiwiZmlsZSI6InVua25vd24ifQ==