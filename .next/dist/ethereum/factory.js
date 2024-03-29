'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _web = require('./web3');

var _web2 = _interopRequireDefault(_web);

var _CampaignFactory = require('./build/CampaignFactory.json');

var _CampaignFactory2 = _interopRequireDefault(_CampaignFactory);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var instance = new _web2.default.eth.Contract(JSON.parse(_CampaignFactory2.default.interface), '0xe71daF826142cAea46f0C217C00b3C0253D7F615');

exports.default = instance;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInVua25vd24iXSwibmFtZXMiOlsiaW5zdGFuY2UiLCJldGgiLCJDb250cmFjdCIsIkpTT04iLCJwYXJzZSIsImludGVyZmFjZSJdLCJtYXBwaW5ncyI6Ijs7Ozs7O0FBQUE7Ozs7QUFDQTs7Ozs7O0FBRUEsSUFBSUEsV0FBVyxJQUFJLGNBQUtDLEdBQUwsQ0FBU0MsUUFBYixDQUFzQkMsS0FBS0MsS0FBTCxDQUFXLDBCQUFnQkMsU0FBM0IsQ0FBdEIsRUFBNkQsNENBQTdELENBQWY7O2tCQUVlTCxRIiwiZmlsZSI6InVua25vd24iLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgd2ViMyBmcm9tICcuL3dlYjMnO1xuaW1wb3J0IENhbXBhaWduRmFjdG9yeSBmcm9tICcuL2J1aWxkL0NhbXBhaWduRmFjdG9yeS5qc29uJztcblxudmFyIGluc3RhbmNlID0gbmV3IHdlYjMuZXRoLkNvbnRyYWN0KEpTT04ucGFyc2UoQ2FtcGFpZ25GYWN0b3J5LmludGVyZmFjZSksICcweGU3MWRhRjgyNjE0MmNBZWE0NmYwQzIxN0MwMGIzQzAyNTNEN0Y2MTUnKTtcblxuZXhwb3J0IGRlZmF1bHQgaW5zdGFuY2U7Il19
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInVua25vd24iXSwibmFtZXMiOlsiaW5zdGFuY2UiLCJldGgiLCJDb250cmFjdCIsIkpTT04iLCJwYXJzZSIsImludGVyZmFjZSJdLCJtYXBwaW5ncyI6Ijs7Ozs7O0FBQUE7Ozs7QUFDQTs7Ozs7O0FBRUEsSUFBSUEsV0FBVyxJQUFJLGNBQUtDLEdBQUwsQ0FBU0MsUUFBYixDQUFzQkMsS0FBS0MsS0FBTCxDQUFXLDBCQUFnQkMsU0FBM0IsQ0FBdEIsRUFBNkQsNENBQTdELENBQWY7O2tCQUVlTCxRIiwiZmlsZSI6InVua25vd24ifQ==