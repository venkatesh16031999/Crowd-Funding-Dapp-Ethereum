'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _regenerator = require('babel-runtime/regenerator');

var _regenerator2 = _interopRequireDefault(_regenerator);

var _asyncToGenerator2 = require('babel-runtime/helpers/asyncToGenerator');

var _asyncToGenerator3 = _interopRequireDefault(_asyncToGenerator2);

var _getPrototypeOf = require('babel-runtime/core-js/object/get-prototype-of');

var _getPrototypeOf2 = _interopRequireDefault(_getPrototypeOf);

var _classCallCheck2 = require('babel-runtime/helpers/classCallCheck');

var _classCallCheck3 = _interopRequireDefault(_classCallCheck2);

var _createClass2 = require('babel-runtime/helpers/createClass');

var _createClass3 = _interopRequireDefault(_createClass2);

var _possibleConstructorReturn2 = require('babel-runtime/helpers/possibleConstructorReturn');

var _possibleConstructorReturn3 = _interopRequireDefault(_possibleConstructorReturn2);

var _inherits2 = require('babel-runtime/helpers/inherits');

var _inherits3 = _interopRequireDefault(_inherits2);

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _semanticUiReact = require('semantic-ui-react');

var _campaign = require('../ethereum/campaign');

var _campaign2 = _interopRequireDefault(_campaign);

var _web = require('../ethereum/web3');

var _web2 = _interopRequireDefault(_web);

var _routes = require('../routes');

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var _jsxFileName = 'D:\\CROWD FUNDING\\components\\ContributeForm.js';


var ContributeForm = function (_Component) {
  (0, _inherits3.default)(ContributeForm, _Component);

  function ContributeForm() {
    var _ref,
        _this2 = this;

    var _temp, _this, _ret;

    (0, _classCallCheck3.default)(this, ContributeForm);

    for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    return _ret = (_temp = (_this = (0, _possibleConstructorReturn3.default)(this, (_ref = ContributeForm.__proto__ || (0, _getPrototypeOf2.default)(ContributeForm)).call.apply(_ref, [this].concat(args))), _this), _this.state = {
      value: '',
      errorMessage: '',
      loading: false
    }, _this.onSubmit = function () {
      var _ref2 = (0, _asyncToGenerator3.default)( /*#__PURE__*/_regenerator2.default.mark(function _callee(event) {
        var campaign, accounts;
        return _regenerator2.default.wrap(function _callee$(_context) {
          while (1) {
            switch (_context.prev = _context.next) {
              case 0:
                event.preventDefault();

                campaign = (0, _campaign2.default)(_this.props.address);

                _this.setState({ loading: true, errorMessage: '' });

                _context.prev = 3;
                _context.next = 6;
                return _web2.default.eth.getAccounts();

              case 6:
                accounts = _context.sent;
                _context.next = 9;
                return campaign.methods.contribute().send({
                  from: accounts[0],
                  value: _web2.default.utils.toWei(_this.state.value, 'ether')
                });

              case 9:

                _routes.Router.replaceRoute('/campaigns/' + _this.props.address);
                _context.next = 15;
                break;

              case 12:
                _context.prev = 12;
                _context.t0 = _context['catch'](3);

                _this.setState({ errorMessage: _context.t0.message });

              case 15:

                _this.setState({ loading: false, value: '' });

              case 16:
              case 'end':
                return _context.stop();
            }
          }
        }, _callee, _this2, [[3, 12]]);
      }));

      return function (_x) {
        return _ref2.apply(this, arguments);
      };
    }(), _temp), (0, _possibleConstructorReturn3.default)(_this, _ret);
  }

  (0, _createClass3.default)(ContributeForm, [{
    key: 'render',
    value: function render() {
      var _this3 = this;

      return _react2.default.createElement(_semanticUiReact.Form, { onSubmit: this.onSubmit, error: !!this.state.errorMessage, __source: {
          fileName: _jsxFileName,
          lineNumber: 38
        }
      }, _react2.default.createElement(_semanticUiReact.Form.Field, {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 39
        }
      }, _react2.default.createElement('label', {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 40
        }
      }, 'Amount to Contribute'), _react2.default.createElement(_semanticUiReact.Input, {
        value: this.state.value,
        onChange: function onChange(event) {
          return _this3.setState({ value: event.target.value });
        },
        label: 'ether',
        labelPosition: 'right',
        __source: {
          fileName: _jsxFileName,
          lineNumber: 41
        }
      })), _react2.default.createElement(_semanticUiReact.Message, { error: true, header: 'Oops!', content: this.state.errorMessage, __source: {
          fileName: _jsxFileName,
          lineNumber: 49
        }
      }), _react2.default.createElement(_semanticUiReact.Button, { primary: true, loading: this.state.loading, __source: {
          fileName: _jsxFileName,
          lineNumber: 50
        }
      }, 'Contribute!'));
    }
  }]);

  return ContributeForm;
}(_react.Component);

exports.default = ContributeForm;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInVua25vd24iXSwibmFtZXMiOlsiX2pzeEZpbGVOYW1lIiwiQ29udHJpYnV0ZUZvcm0iLCJfQ29tcG9uZW50IiwiX3JlZiIsIl90aGlzMiIsIl90ZW1wIiwiX3RoaXMiLCJfcmV0IiwiX2xlbiIsImFyZ3VtZW50cyIsImxlbmd0aCIsImFyZ3MiLCJBcnJheSIsIl9rZXkiLCJfX3Byb3RvX18iLCJjYWxsIiwiYXBwbHkiLCJjb25jYXQiLCJzdGF0ZSIsInZhbHVlIiwiZXJyb3JNZXNzYWdlIiwibG9hZGluZyIsIm9uU3VibWl0IiwiX3JlZjIiLCJtYXJrIiwiX2NhbGxlZSIsImV2ZW50IiwiY2FtcGFpZ24iLCJhY2NvdW50cyIsIndyYXAiLCJfY2FsbGVlJCIsIl9jb250ZXh0IiwicHJldiIsIm5leHQiLCJwcmV2ZW50RGVmYXVsdCIsInByb3BzIiwiYWRkcmVzcyIsInNldFN0YXRlIiwiZXRoIiwiZ2V0QWNjb3VudHMiLCJzZW50IiwibWV0aG9kcyIsImNvbnRyaWJ1dGUiLCJzZW5kIiwiZnJvbSIsInV0aWxzIiwidG9XZWkiLCJyZXBsYWNlUm91dGUiLCJ0MCIsIm1lc3NhZ2UiLCJzdG9wIiwiX3giLCJrZXkiLCJyZW5kZXIiLCJfdGhpczMiLCJjcmVhdGVFbGVtZW50IiwiZXJyb3IiLCJfX3NvdXJjZSIsImZpbGVOYW1lIiwibGluZU51bWJlciIsIkZpZWxkIiwib25DaGFuZ2UiLCJ0YXJnZXQiLCJsYWJlbCIsImxhYmVsUG9zaXRpb24iLCJoZWFkZXIiLCJjb250ZW50IiwicHJpbWFyeSJdLCJtYXBwaW5ncyI6Ijs7Ozs7O0FBQUE7Ozs7QUFDQTs7OztBQUNBOzs7O0FBQ0E7Ozs7QUFDQTs7OztBQUNBOzs7O0FBQ0E7Ozs7QUFFQTs7OztBQUNBOztBQUNBOzs7O0FBQ0E7Ozs7QUFDQTs7OztBQUxBLElBQUlBLGVBQWUsa0RBQW5COzs7QUFPQSxJQUFJQyxpQkFBaUIsVUFBVUMsVUFBVixFQUFzQjtBQUN6QywwQkFBVUQsY0FBVixFQUEwQkMsVUFBMUI7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M0MsS0FBdEIsRUFBaEIsQ0FBUDtBQUNELFNBSndCO0FBS3pCNEMsZUFBTyxPQUxrQjtBQU16QkMsdUJBQWUsT0FOVTtBQU96QlAsa0JBQVU7QUFDUkMsb0JBQVUxRCxZQURGO0FBRVIyRCxzQkFBWTtBQUZKO0FBUGUsT0FBM0IsQ0FsQkYsQ0FQSyxFQXNDTCxnQkFBTUosYUFBTiwyQkFBNkIsRUFBRUMsT0FBTyxJQUFULEVBQWVTLFFBQVEsT0FBdkIsRUFBZ0NDLFNBQVMsS0FBS2hELEtBQUwsQ0FBV0UsWUFBcEQsRUFBa0VxQyxVQUFVO0FBQ3JHQyxvQkFBVTFELFlBRDJGO0FBRXJHMkQsc0JBQVk7QUFGeUY7QUFBNUUsT0FBN0IsQ0F0Q0ssRUEyQ0wsZ0JBQU1KLGFBQU4sMEJBRUUsRUFBRVksU0FBUyxJQUFYLEVBQWlCOUMsU0FBUyxLQUFLSCxLQUFMLENBQVdHLE9BQXJDLEVBQThDb0MsVUFBVTtBQUNwREMsb0JBQVUxRCxZQUQwQztBQUVwRDJELHNCQUFZO0FBRndDO0FBQXhELE9BRkYsRUFPRSxhQVBGLENBM0NLLENBQVA7QUFxREQ7QUExRDJCLEdBQUQsQ0FBN0I7O0FBNkRBLFNBQU8xRCxjQUFQO0FBQ0QsQ0F6SW9CLGtCQUFyQjs7a0JBMkllQSxjIiwiZmlsZSI6InVua25vd24iLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgX3JlZ2VuZXJhdG9yUnVudGltZSBmcm9tICdiYWJlbC1ydW50aW1lL3JlZ2VuZXJhdG9yJztcbmltcG9ydCBfYXN5bmNUb0dlbmVyYXRvciBmcm9tICdiYWJlbC1ydW50aW1lL2hlbHBlcnMvYXN5bmNUb0dlbmVyYXRvcic7XG5pbXBvcnQgX09iamVjdCRnZXRQcm90b3R5cGVPZiBmcm9tICdiYWJlbC1ydW50aW1lL2NvcmUtanMvb2JqZWN0L2dldC1wcm90b3R5cGUtb2YnO1xuaW1wb3J0IF9jbGFzc0NhbGxDaGVjayBmcm9tICdiYWJlbC1ydW50aW1lL2hlbHBlcnMvY2xhc3NDYWxsQ2hlY2snO1xuaW1wb3J0IF9jcmVhdGVDbGFzcyBmcm9tICdiYWJlbC1ydW50aW1lL2hlbHBlcnMvY3JlYXRlQ2xhc3MnO1xuaW1wb3J0IF9wb3NzaWJsZUNvbnN0cnVjdG9yUmV0dXJuIGZyb20gJ2JhYmVsLXJ1bnRpbWUvaGVscGVycy9wb3NzaWJsZUNvbnN0cnVjdG9yUmV0dXJuJztcbmltcG9ydCBfaW5oZXJpdHMgZnJvbSAnYmFiZWwtcnVudGltZS9oZWxwZXJzL2luaGVyaXRzJztcbnZhciBfanN4RmlsZU5hbWUgPSAnRDpcXFxcQ1JPV0QgRlVORElOR1xcXFxjb21wb25lbnRzXFxcXENvbnRyaWJ1dGVGb3JtLmpzJztcbmltcG9ydCBSZWFjdCwgeyBDb21wb25lbnQgfSBmcm9tICdyZWFjdCc7XG5pbXBvcnQgeyBGb3JtLCBJbnB1dCwgTWVzc2FnZSwgQnV0dG9uIH0gZnJvbSAnc2VtYW50aWMtdWktcmVhY3QnO1xuaW1wb3J0IENhbXBhaWduIGZyb20gJy4uL2V0aGVyZXVtL2NhbXBhaWduJztcbmltcG9ydCB3ZWIzIGZyb20gJy4uL2V0aGVyZXVtL3dlYjMnO1xuaW1wb3J0IHsgUm91dGVyIH0gZnJvbSAnLi4vcm91dGVzJztcblxudmFyIENvbnRyaWJ1dGVGb3JtID0gZnVuY3Rpb24gKF9Db21wb25lbnQpIHtcbiAgX2luaGVyaXRzKENvbnRyaWJ1dGVGb3JtLCBfQ29tcG9uZW50KTtcblxuICBmdW5jdGlvbiBDb250cmlidXRlRm9ybSgpIHtcbiAgICB2YXIgX3JlZixcbiAgICAgICAgX3RoaXMyID0gdGhpcztcblxuICAgIHZhciBfdGVtcCwgX3RoaXMsIF9yZXQ7XG5cbiAgICBfY2xhc3NDYWxsQ2hlY2sodGhpcywgQ29udHJpYnV0ZUZvcm0pO1xuXG4gICAgZm9yICh2YXIgX2xlbiA9IGFyZ3VtZW50cy5sZW5ndGgsIGFyZ3MgPSBBcnJheShfbGVuKSwgX2tleSA9IDA7IF9rZXkgPCBfbGVuOyBfa2V5KyspIHtcbiAgICAgIGFyZ3NbX2tleV0gPSBhcmd1bWVudHNbX2tleV07XG4gICAgfVxuXG4gICAgcmV0dXJuIF9yZXQgPSAoX3RlbXAgPSAoX3RoaXMgPSBfcG9zc2libGVDb25zdHJ1Y3RvclJldHVybih0aGlzLCAoX3JlZiA9IENvbnRyaWJ1dGVGb3JtLl9fcHJvdG9fXyB8fCBfT2JqZWN0JGdldFByb3RvdHlwZU9mKENvbnRyaWJ1dGVGb3JtKSkuY2FsbC5hcHBseShfcmVmLCBbdGhpc10uY29uY2F0KGFyZ3MpKSksIF90aGlzKSwgX3RoaXMuc3RhdGUgPSB7XG4gICAgICB2YWx1ZTogJycsXG4gICAgICBlcnJvck1lc3NhZ2U6ICcnLFxuICAgICAgbG9hZGluZzogZmFsc2VcbiAgICB9LCBfdGhpcy5vblN1Ym1pdCA9IGZ1bmN0aW9uICgpIHtcbiAgICAgIHZhciBfcmVmMiA9IF9hc3luY1RvR2VuZXJhdG9yKCAvKiNfX1BVUkVfXyovX3JlZ2VuZXJhdG9yUnVudGltZS5tYXJrKGZ1bmN0aW9uIF9jYWxsZWUoZXZlbnQpIHtcbiAgICAgICAgdmFyIGNhbXBhaWduLCBhY2NvdW50cztcbiAgICAgICAgcmV0dXJuIF9yZWdlbmVyYXRvclJ1bnRpbWUud3JhcChmdW5jdGlvbiBfY2FsbGVlJChfY29udGV4dCkge1xuICAgICAgICAgIHdoaWxlICgxKSB7XG4gICAgICAgICAgICBzd2l0Y2ggKF9jb250ZXh0LnByZXYgPSBfY29udGV4dC5uZXh0KSB7XG4gICAgICAgICAgICAgIGNhc2UgMDpcbiAgICAgICAgICAgICAgICBldmVudC5wcmV2ZW50RGVmYXVsdCgpO1xuXG4gICAgICAgICAgICAgICAgY2FtcGFpZ24gPSBDYW1wYWlnbihfdGhpcy5wcm9wcy5hZGRyZXNzKTtcblxuXG4gICAgICAgICAgICAgICAgX3RoaXMuc2V0U3RhdGUoeyBsb2FkaW5nOiB0cnVlLCBlcnJvck1lc3NhZ2U6ICcnIH0pO1xuXG4gICAgICAgICAgICAgICAgX2NvbnRleHQucHJldiA9IDM7XG4gICAgICAgICAgICAgICAgX2NvbnRleHQubmV4dCA9IDY7XG4gICAgICAgICAgICAgICAgcmV0dXJuIHdlYjMuZXRoLmdldEFjY291bnRzKCk7XG5cbiAgICAgICAgICAgICAgY2FzZSA2OlxuICAgICAgICAgICAgICAgIGFjY291bnRzID0gX2NvbnRleHQuc2VudDtcbiAgICAgICAgICAgICAgICBfY29udGV4dC5uZXh0ID0gOTtcbiAgICAgICAgICAgICAgICByZXR1cm4gY2FtcGFpZ24ubWV0aG9kcy5jb250cmlidXRlKCkuc2VuZCh7XG4gICAgICAgICAgICAgICAgICBmcm9tOiBhY2NvdW50c1swXSxcbiAgICAgICAgICAgICAgICAgIHZhbHVlOiB3ZWIzLnV0aWxzLnRvV2VpKF90aGlzLnN0YXRlLnZhbHVlLCAnZXRoZXInKVxuICAgICAgICAgICAgICAgIH0pO1xuXG4gICAgICAgICAgICAgIGNhc2UgOTpcblxuICAgICAgICAgICAgICAgIFJvdXRlci5yZXBsYWNlUm91dGUoJy9jYW1wYWlnbnMvJyArIF90aGlzLnByb3BzLmFkZHJlc3MpO1xuICAgICAgICAgICAgICAgIF9jb250ZXh0Lm5leHQgPSAxNTtcbiAgICAgICAgICAgICAgICBicmVhaztcblxuICAgICAgICAgICAgICBjYXNlIDEyOlxuICAgICAgICAgICAgICAgIF9jb250ZXh0LnByZXYgPSAxMjtcbiAgICAgICAgICAgICAgICBfY29udGV4dC50MCA9IF9jb250ZXh0WydjYXRjaCddKDMpO1xuXG4gICAgICAgICAgICAgICAgX3RoaXMuc2V0U3RhdGUoeyBlcnJvck1lc3NhZ2U6IF9jb250ZXh0LnQwLm1lc3NhZ2UgfSk7XG5cbiAgICAgICAgICAgICAgY2FzZSAxNTpcblxuICAgICAgICAgICAgICAgIF90aGlzLnNldFN0YXRlKHsgbG9hZGluZzogZmFsc2UsIHZhbHVlOiAnJyB9KTtcblxuICAgICAgICAgICAgICBjYXNlIDE2OlxuICAgICAgICAgICAgICBjYXNlICdlbmQnOlxuICAgICAgICAgICAgICAgIHJldHVybiBfY29udGV4dC5zdG9wKCk7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgfVxuICAgICAgICB9LCBfY2FsbGVlLCBfdGhpczIsIFtbMywgMTJdXSk7XG4gICAgICB9KSk7XG5cbiAgICAgIHJldHVybiBmdW5jdGlvbiAoX3gpIHtcbiAgICAgICAgcmV0dXJuIF9yZWYyLmFwcGx5KHRoaXMsIGFyZ3VtZW50cyk7XG4gICAgICB9O1xuICAgIH0oKSwgX3RlbXApLCBfcG9zc2libGVDb25zdHJ1Y3RvclJldHVybihfdGhpcywgX3JldCk7XG4gIH1cblxuICBfY3JlYXRlQ2xhc3MoQ29udHJpYnV0ZUZvcm0sIFt7XG4gICAga2V5OiAncmVuZGVyJyxcbiAgICB2YWx1ZTogZnVuY3Rpb24gcmVuZGVyKCkge1xuICAgICAgdmFyIF90aGlzMyA9IHRoaXM7XG5cbiAgICAgIHJldHVybiBSZWFjdC5jcmVhdGVFbGVtZW50KFxuICAgICAgICBGb3JtLFxuICAgICAgICB7IG9uU3VibWl0OiB0aGlzLm9uU3VibWl0LCBlcnJvcjogISF0aGlzLnN0YXRlLmVycm9yTWVzc2FnZSwgX19zb3VyY2U6IHtcbiAgICAgICAgICAgIGZpbGVOYW1lOiBfanN4RmlsZU5hbWUsXG4gICAgICAgICAgICBsaW5lTnVtYmVyOiAzOFxuICAgICAgICAgIH1cbiAgICAgICAgfSxcbiAgICAgICAgUmVhY3QuY3JlYXRlRWxlbWVudChcbiAgICAgICAgICBGb3JtLkZpZWxkLFxuICAgICAgICAgIHtcbiAgICAgICAgICAgIF9fc291cmNlOiB7XG4gICAgICAgICAgICAgIGZpbGVOYW1lOiBfanN4RmlsZU5hbWUsXG4gICAgICAgICAgICAgIGxpbmVOdW1iZXI6IDM5XG4gICAgICAgICAgICB9XG4gICAgICAgICAgfSxcbiAgICAgICAgICBSZWFjdC5jcmVhdGVFbGVtZW50KFxuICAgICAgICAgICAgJ2xhYmVsJyxcbiAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgX19zb3VyY2U6IHtcbiAgICAgICAgICAgICAgICBmaWxlTmFtZTogX2pzeEZpbGVOYW1lLFxuICAgICAgICAgICAgICAgIGxpbmVOdW1iZXI6IDQwXG4gICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAnQW1vdW50IHRvIENvbnRyaWJ1dGUnXG4gICAgICAgICAgKSxcbiAgICAgICAgICBSZWFjdC5jcmVhdGVFbGVtZW50KElucHV0LCB7XG4gICAgICAgICAgICB2YWx1ZTogdGhpcy5zdGF0ZS52YWx1ZSxcbiAgICAgICAgICAgIG9uQ2hhbmdlOiBmdW5jdGlvbiBvbkNoYW5nZShldmVudCkge1xuICAgICAgICAgICAgICByZXR1cm4gX3RoaXMzLnNldFN0YXRlKHsgdmFsdWU6IGV2ZW50LnRhcmdldC52YWx1ZSB9KTtcbiAgICAgICAgICAgIH0sXG4gICAgICAgICAgICBsYWJlbDogJ2V0aGVyJyxcbiAgICAgICAgICAgIGxhYmVsUG9zaXRpb246ICdyaWdodCcsXG4gICAgICAgICAgICBfX3NvdXJjZToge1xuICAgICAgICAgICAgICBmaWxlTmFtZTogX2pzeEZpbGVOYW1lLFxuICAgICAgICAgICAgICBsaW5lTnVtYmVyOiA0MVxuICAgICAgICAgICAgfVxuICAgICAgICAgIH0pXG4gICAgICAgICksXG4gICAgICAgIFJlYWN0LmNyZWF0ZUVsZW1lbnQoTWVzc2FnZSwgeyBlcnJvcjogdHJ1ZSwgaGVhZGVyOiAnT29wcyEnLCBjb250ZW50OiB0aGlzLnN0YXRlLmVycm9yTWVzc2FnZSwgX19zb3VyY2U6IHtcbiAgICAgICAgICAgIGZpbGVOYW1lOiBfanN4RmlsZU5hbWUsXG4gICAgICAgICAgICBsaW5lTnVtYmVyOiA0OVxuICAgICAgICAgIH1cbiAgICAgICAgfSksXG4gICAgICAgIFJlYWN0LmNyZWF0ZUVsZW1lbnQoXG4gICAgICAgICAgQnV0dG9uLFxuICAgICAgICAgIHsgcHJpbWFyeTogdHJ1ZSwgbG9hZGluZzogdGhpcy5zdGF0ZS5sb2FkaW5nLCBfX3NvdXJjZToge1xuICAgICAgICAgICAgICBmaWxlTmFtZTogX2pzeEZpbGVOYW1lLFxuICAgICAgICAgICAgICBsaW5lTnVtYmVyOiA1MFxuICAgICAgICAgICAgfVxuICAgICAgICAgIH0sXG4gICAgICAgICAgJ0NvbnRyaWJ1dGUhJ1xuICAgICAgICApXG4gICAgICApO1xuICAgIH1cbiAgfV0pO1xuXG4gIHJldHVybiBDb250cmlidXRlRm9ybTtcbn0oQ29tcG9uZW50KTtcblxuZXhwb3J0IGRlZmF1bHQgQ29udHJpYnV0ZUZvcm07Il19
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInVua25vd24iXSwibmFtZXMiOlsiX2pzeEZpbGVOYW1lIiwiQ29udHJpYnV0ZUZvcm0iLCJfQ29tcG9uZW50IiwiX3JlZiIsIl90aGlzMiIsIl90ZW1wIiwiX3RoaXMiLCJfcmV0IiwiX2xlbiIsImFyZ3VtZW50cyIsImxlbmd0aCIsImFyZ3MiLCJBcnJheSIsIl9rZXkiLCJfX3Byb3RvX18iLCJjYWxsIiwiYXBwbHkiLCJjb25jYXQiLCJzdGF0ZSIsInZhbHVlIiwiZXJyb3JNZXNzYWdlIiwibG9hZGluZyIsIm9uU3VibWl0IiwiX3JlZjIiLCJtYXJrIiwiX2NhbGxlZSIsImV2ZW50IiwiY2FtcGFpZ24iLCJhY2NvdW50cyIsIndyYXAiLCJfY2FsbGVlJCIsIl9jb250ZXh0IiwicHJldiIsIm5leHQiLCJwcmV2ZW50RGVmYXVsdCIsInByb3BzIiwiYWRkcmVzcyIsInNldFN0YXRlIiwiZXRoIiwiZ2V0QWNjb3VudHMiLCJzZW50IiwibWV0aG9kcyIsImNvbnRyaWJ1dGUiLCJzZW5kIiwiZnJvbSIsInV0aWxzIiwidG9XZWkiLCJyZXBsYWNlUm91dGUiLCJ0MCIsIm1lc3NhZ2UiLCJzdG9wIiwiX3giLCJrZXkiLCJyZW5kZXIiLCJfdGhpczMiLCJjcmVhdGVFbGVtZW50IiwiZXJyb3IiLCJfX3NvdXJjZSIsImZpbGVOYW1lIiwibGluZU51bWJlciIsIkZpZWxkIiwib25DaGFuZ2UiLCJ0YXJnZXQiLCJsYWJlbCIsImxhYmVsUG9zaXRpb24iLCJoZWFkZXIiLCJjb250ZW50IiwicHJpbWFyeSJdLCJtYXBwaW5ncyI6Ijs7Ozs7O0FBQUE7Ozs7QUFDQTs7OztBQUNBOzs7O0FBQ0E7Ozs7QUFDQTs7OztBQUNBOzs7O0FBQ0E7Ozs7QUFFQTs7OztBQUNBOztBQUNBOzs7O0FBQ0E7Ozs7QUFDQTs7OztBQUxBLElBQUlBLGVBQWUsa0RBQW5COzs7QUFPQSxJQUFJQyxpQkFBaUIsVUFBVUMsVUFBVixFQUFzQjtBQUN6QywwQkFBVUQsY0FBVixFQUEwQkMsVUFBMUI7O0FBRUEsV0FBU0QsY0FBVCxHQUEwQjtBQUN4QixRQUFJRSxJQUFKO0FBQUEsUUFDSUMsU0FBUyxJQURiOztBQUdBLFFBQUlDLEtBQUosRUFBV0MsS0FBWCxFQUFrQkMsSUFBbEI7O0FBRUEsa0NBQWdCLElBQWhCLEVBQXNCTixjQUF0Qjs7QUFFQSxTQUFLLElBQUlPLE9BQU9DLFVBQVVDLE1BQXJCLEVBQTZCQyxPQUFPQyxNQUFNSixJQUFOLENBQXBDLEVBQWlESyxPQUFPLENBQTdELEVBQWdFQSxPQUFPTCxJQUF2RSxFQUE2RUssTUFBN0UsRUFBcUY7QUFDbkZGLFdBQUtFLElBQUwsSUFBYUosVUFBVUksSUFBVixDQUFiO0FBQ0Q7O0FBRUQsV0FBT04sUUFBUUYsU0FBU0MsUUFBUSx5Q0FBMkIsSUFBM0IsRUFBaUMsQ0FBQ0gsT0FBT0YsZUFBZWEsU0FBZixJQUE0Qiw4QkFBdUJiLGNBQXZCLENBQXBDLEVBQTRFYyxJQUE1RSxDQUFpRkMsS0FBakYsQ0FBdUZiLElBQXZGLEVBQTZGLENBQUMsSUFBRCxFQUFPYyxNQUFQLENBQWNOLElBQWQsQ0FBN0YsQ0FBakMsQ0FBUixFQUE2SkwsS0FBdEssR0FBOEtBLE1BQU1ZLEtBQU4sR0FBYztBQUN6TUMsYUFBTyxFQURrTTtBQUV6TUMsb0JBQWMsRUFGMkw7QUFHek1DLGVBQVM7QUFIZ00sS0FBNUwsRUFJWmYsTUFBTWdCLFFBQU4sR0FBaUIsWUFBWTtBQUM5QixVQUFJQyxRQUFRLGlDQUFtQixhQUFhLHNCQUFvQkMsSUFBcEIsQ0FBeUIsU0FBU0MsT0FBVCxDQUFpQkMsS0FBakIsRUFBd0I7QUFDM0YsWUFBSUMsUUFBSixFQUFjQyxRQUFkO0FBQ0EsZUFBTyxzQkFBb0JDLElBQXBCLENBQXlCLFNBQVNDLFFBQVQsQ0FBa0JDLFFBQWxCLEVBQTRCO0FBQzFELGlCQUFPLENBQVAsRUFBVTtBQUNSLG9CQUFRQSxTQUFTQyxJQUFULEdBQWdCRCxTQUFTRSxJQUFqQztBQUNFLG1CQUFLLENBQUw7QUFDRVAsc0JBQU1RLGNBQU47O0FBRUFQLDJCQUFXLHdCQUFTckIsTUFBTTZCLEtBQU4sQ0FBWUMsT0FBckIsQ0FBWDs7QUFHQTlCLHNCQUFNK0IsUUFBTixDQUFlLEVBQUVoQixTQUFTLElBQVgsRUFBaUJELGNBQWMsRUFBL0IsRUFBZjs7QUFFQVcseUJBQVNDLElBQVQsR0FBZ0IsQ0FBaEI7QUFDQUQseUJBQVNFLElBQVQsR0FBZ0IsQ0FBaEI7QUFDQSx1QkFBTyxjQUFLSyxHQUFMLENBQVNDLFdBQVQsRUFBUDs7QUFFRixtQkFBSyxDQUFMO0FBQ0VYLDJCQUFXRyxTQUFTUyxJQUFwQjtBQUNBVCx5QkFBU0UsSUFBVCxHQUFnQixDQUFoQjtBQUNBLHVCQUFPTixTQUFTYyxPQUFULENBQWlCQyxVQUFqQixHQUE4QkMsSUFBOUIsQ0FBbUM7QUFDeENDLHdCQUFNaEIsU0FBUyxDQUFULENBRGtDO0FBRXhDVCx5QkFBTyxjQUFLMEIsS0FBTCxDQUFXQyxLQUFYLENBQWlCeEMsTUFBTVksS0FBTixDQUFZQyxLQUE3QixFQUFvQyxPQUFwQztBQUZpQyxpQkFBbkMsQ0FBUDs7QUFLRixtQkFBSyxDQUFMOztBQUVFLCtCQUFPNEIsWUFBUCxDQUFvQixnQkFBZ0J6QyxNQUFNNkIsS0FBTixDQUFZQyxPQUFoRDtBQUNBTCx5QkFBU0UsSUFBVCxHQUFnQixFQUFoQjtBQUNBOztBQUVGLG1CQUFLLEVBQUw7QUFDRUYseUJBQVNDLElBQVQsR0FBZ0IsRUFBaEI7QUFDQUQseUJBQVNpQixFQUFULEdBQWNqQixTQUFTLE9BQVQsRUFBa0IsQ0FBbEIsQ0FBZDs7QUFFQXpCLHNCQUFNK0IsUUFBTixDQUFlLEVBQUVqQixjQUFjVyxTQUFTaUIsRUFBVCxDQUFZQyxPQUE1QixFQUFmOztBQUVGLG1CQUFLLEVBQUw7O0FBRUUzQyxzQkFBTStCLFFBQU4sQ0FBZSxFQUFFaEIsU0FBUyxLQUFYLEVBQWtCRixPQUFPLEVBQXpCLEVBQWY7O0FBRUYsbUJBQUssRUFBTDtBQUNBLG1CQUFLLEtBQUw7QUFDRSx1QkFBT1ksU0FBU21CLElBQVQsRUFBUDtBQXZDSjtBQXlDRDtBQUNGLFNBNUNNLEVBNENKekIsT0E1Q0ksRUE0Q0tyQixNQTVDTCxFQTRDYSxDQUFDLENBQUMsQ0FBRCxFQUFJLEVBQUosQ0FBRCxDQTVDYixDQUFQO0FBNkNELE9BL0MyQyxDQUFoQyxDQUFaOztBQWlEQSxhQUFPLFVBQVUrQyxFQUFWLEVBQWM7QUFDbkIsZUFBTzVCLE1BQU1QLEtBQU4sQ0FBWSxJQUFaLEVBQWtCUCxTQUFsQixDQUFQO0FBQ0QsT0FGRDtBQUdELEtBckRtQixFQUpMLEVBeURWSixLQXpERSxHQXlETSx5Q0FBMkJDLEtBQTNCLEVBQWtDQyxJQUFsQyxDQXpEYjtBQTBERDs7QUFFRCw2QkFBYU4sY0FBYixFQUE2QixDQUFDO0FBQzVCbUQsU0FBSyxRQUR1QjtBQUU1QmpDLFdBQU8sU0FBU2tDLE1BQVQsR0FBa0I7QUFDdkIsVUFBSUMsU0FBUyxJQUFiOztBQUVBLGFBQU8sZ0JBQU1DLGFBQU4sd0JBRUwsRUFBRWpDLFVBQVUsS0FBS0EsUUFBakIsRUFBMkJrQyxPQUFPLENBQUMsQ0FBQyxLQUFLdEMsS0FBTCxDQUFXRSxZQUEvQyxFQUE2RHFDLFVBQVU7QUFDbkVDLG9CQUFVMUQsWUFEeUQ7QUFFbkUyRCxzQkFBWTtBQUZ1RDtBQUF2RSxPQUZLLEVBT0wsZ0JBQU1KLGFBQU4sQ0FDRSxzQkFBS0ssS0FEUCxFQUVFO0FBQ0VILGtCQUFVO0FBQ1JDLG9CQUFVMUQsWUFERjtBQUVSMkQsc0JBQVk7QUFGSjtBQURaLE9BRkYsRUFRRSxnQkFBTUosYUFBTixDQUNFLE9BREYsRUFFRTtBQUNFRSxrQkFBVTtBQUNSQyxvQkFBVTFELFlBREY7QUFFUjJELHNCQUFZO0FBRko7QUFEWixPQUZGLEVBUUUsc0JBUkYsQ0FSRixFQWtCRSxnQkFBTUosYUFBTix5QkFBMkI7QUFDekJwQyxlQUFPLEtBQUtELEtBQUwsQ0FBV0MsS0FETztBQUV6QjBDLGtCQUFVLFNBQVNBLFFBQVQsQ0FBa0JuQyxLQUFsQixFQUF5QjtBQUNqQyxpQkFBTzRCLE9BQU9qQixRQUFQLENBQWdCLEVBQUVsQixPQUFPTyxNQUFNb0MsTUFBTixDQUFhM0MsS0FBdEIsRUFBaEIsQ0FBUDtBQUNELFNBSndCO0FBS3pCNEMsZUFBTyxPQUxrQjtBQU16QkMsdUJBQWUsT0FOVTtBQU96QlAsa0JBQVU7QUFDUkMsb0JBQVUxRCxZQURGO0FBRVIyRCxzQkFBWTtBQUZKO0FBUGUsT0FBM0IsQ0FsQkYsQ0FQSyxFQXNDTCxnQkFBTUosYUFBTiwyQkFBNkIsRUFBRUMsT0FBTyxJQUFULEVBQWVTLFFBQVEsT0FBdkIsRUFBZ0NDLFNBQVMsS0FBS2hELEtBQUwsQ0FBV0UsWUFBcEQsRUFBa0VxQyxVQUFVO0FBQ3JHQyxvQkFBVTFELFlBRDJGO0FBRXJHMkQsc0JBQVk7QUFGeUY7QUFBNUUsT0FBN0IsQ0F0Q0ssRUEyQ0wsZ0JBQU1KLGFBQU4sMEJBRUUsRUFBRVksU0FBUyxJQUFYLEVBQWlCOUMsU0FBUyxLQUFLSCxLQUFMLENBQVdHLE9BQXJDLEVBQThDb0MsVUFBVTtBQUNwREMsb0JBQVUxRCxZQUQwQztBQUVwRDJELHNCQUFZO0FBRndDO0FBQXhELE9BRkYsRUFPRSxhQVBGLENBM0NLLENBQVA7QUFxREQ7QUExRDJCLEdBQUQsQ0FBN0I7O0FBNkRBLFNBQU8xRCxjQUFQO0FBQ0QsQ0F6SW9CLGtCQUFyQjs7a0JBMkllQSxjIiwiZmlsZSI6InVua25vd24ifQ==