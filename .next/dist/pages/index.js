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

var _factory = require('../ethereum/factory');

var _factory2 = _interopRequireDefault(_factory);

var _Layout = require('../components/Layout');

var _Layout2 = _interopRequireDefault(_Layout);

var _routes = require('../routes');

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var _jsxFileName = 'D:\\CROWD FUNDING\\pages\\index.js?entry';


var CampaignIndex = function (_Component) {
  (0, _inherits3.default)(CampaignIndex, _Component);

  function CampaignIndex() {
    (0, _classCallCheck3.default)(this, CampaignIndex);

    return (0, _possibleConstructorReturn3.default)(this, (CampaignIndex.__proto__ || (0, _getPrototypeOf2.default)(CampaignIndex)).apply(this, arguments));
  }

  (0, _createClass3.default)(CampaignIndex, [{
    key: 'renderCampaigns',
    value: function renderCampaigns() {
      var items = this.props.campaigns.map(function (address) {
        return {
          header: address,
          description: _react2.default.createElement(_routes.Link, { route: '/campaigns/' + address, __source: {
              fileName: _jsxFileName,
              lineNumber: 19
            }
          }, _react2.default.createElement('a', {
            __source: {
              fileName: _jsxFileName,
              lineNumber: 20
            }
          }, 'View Campaign')),
          fluid: true
        };
      });

      return _react2.default.createElement(_semanticUiReact.Card.Group, { items: items, __source: {
          fileName: _jsxFileName,
          lineNumber: 27
        }
      });
    }
  }, {
    key: 'render',
    value: function render() {
      return _react2.default.createElement(_Layout2.default, {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 32
        }
      }, _react2.default.createElement('div', {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 33
        }
      }, _react2.default.createElement('h3', {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 34
        }
      }, 'Open Campaigns'), _react2.default.createElement(_routes.Link, { route: '/campaigns/new', __source: {
          fileName: _jsxFileName,
          lineNumber: 36
        }
      }, _react2.default.createElement('a', {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 37
        }
      }, _react2.default.createElement(_semanticUiReact.Button, {
        floated: 'right',
        content: 'Create Campaign',
        icon: 'add circle',
        primary: true,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 38
        }
      }))), this.renderCampaigns()));
    }
  }], [{
    key: 'getInitialProps',
    value: function () {
      var _ref = (0, _asyncToGenerator3.default)( /*#__PURE__*/_regenerator2.default.mark(function _callee() {
        var campaigns;
        return _regenerator2.default.wrap(function _callee$(_context) {
          while (1) {
            switch (_context.prev = _context.next) {
              case 0:
                _context.next = 2;
                return _factory2.default.methods.getDeployedCampaigns().call();

              case 2:
                campaigns = _context.sent;
                return _context.abrupt('return', { campaigns: campaigns });

              case 4:
              case 'end':
                return _context.stop();
            }
          }
        }, _callee, this);
      }));

      function getInitialProps() {
        return _ref.apply(this, arguments);
      }

      return getInitialProps;
    }()
  }]);

  return CampaignIndex;
}(_react.Component);

exports.default = CampaignIndex;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInVua25vd24iXSwibmFtZXMiOlsiX2pzeEZpbGVOYW1lIiwiQ2FtcGFpZ25JbmRleCIsIl9Db21wb25lbnQiLCJfX3Byb3RvX18iLCJhcHBseSIsImFyZ3VtZW50cyIsImtleSIsInZhbHVlIiwicmVuZGVyQ2FtcGFpZ25zIiwiaXRlbXMiLCJwcm9wcyIsImNhbXBhaWducyIsIm1hcCIsImFkZHJlc3MiLCJoZWFkZXIiLCJkZXNjcmlwdGlvbiIsImNyZWF0ZUVsZW1lbnQiLCJyb3V0ZSIsIl9fc291cmNlIiwiZmlsZU5hbWUiLCJsaW5lTnVtYmVyIiwiZmx1aWQiLCJHcm91cCIsInJlbmRlciIsImZsb2F0ZWQiLCJjb250ZW50IiwiaWNvbiIsInByaW1hcnkiLCJfcmVmIiwibWFyayIsIl9jYWxsZWUiLCJ3cmFwIiwiX2NhbGxlZSQiLCJfY29udGV4dCIsInByZXYiLCJuZXh0IiwibWV0aG9kcyIsImdldERlcGxveWVkQ2FtcGFpZ25zIiwiY2FsbCIsInNlbnQiLCJhYnJ1cHQiLCJzdG9wIiwiZ2V0SW5pdGlhbFByb3BzIl0sIm1hcHBpbmdzIjoiOzs7Ozs7QUFBQTs7OztBQUNBOzs7O0FBQ0E7Ozs7QUFDQTs7OztBQUNBOzs7O0FBQ0E7Ozs7QUFDQTs7OztBQUVBOzs7O0FBQ0E7O0FBQ0E7Ozs7QUFDQTs7OztBQUNBOzs7O0FBTEEsSUFBSUEsZUFBZSwwQ0FBbkI7OztBQU9BLElBQUlDLGdCQUFnQixVQUFVQyxVQUFWLEVBQXNCO0FBQ3hDLDBCQUFVRCxhQUFWLEVBQXlCQyxVQUF6Qjs7QUFFQSxXQUFTRCxhQUFULEdBQXlCO0FBQ3ZCLGtDQUFnQixJQUFoQixFQUFzQkEsYUFBdEI7O0FBRUEsV0FBTyx5Q0FBMkIsSUFBM0IsRUFBaUMsQ0FBQ0EsY0FBY0UsU0FBZCxJQUEyQiw4QkFBdUJGLGFBQXZCLENBQTVCLEVBQW1FRyxLQUFuRSxDQUF5RSxJQUF6RSxFQUErRUMsU0FBL0UsQ0FBakMsQ0FBUDtBQUNEOztBQUVELDZCQUFhSixhQUFiLEVBQTRCLENB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U0FBYixFQUExQixDQUFQOztBQUVGLG1CQUFLLENBQUw7QUFDQSxtQkFBSyxLQUFMO0FBQ0UsdUJBQU9zQixTQUFTUSxJQUFULEVBQVA7QUFYSjtBQWFEO0FBQ0YsU0FoQk0sRUFnQkpYLE9BaEJJLEVBZ0JLLElBaEJMLENBQVA7QUFpQkQsT0FuQjBDLENBQWhDLENBQVg7O0FBcUJBLGVBQVNZLGVBQVQsR0FBMkI7QUFDekIsZUFBT2QsS0FBS3hCLEtBQUwsQ0FBVyxJQUFYLEVBQWlCQyxTQUFqQixDQUFQO0FBQ0Q7O0FBRUQsYUFBT3FDLGVBQVA7QUFDRCxLQTNCTTtBQUZKLEdBQUQsQ0E5Rko7O0FBOEhBLFNBQU96QyxhQUFQO0FBQ0QsQ0F4SW1CLGtCQUFwQjs7a0JBMEllQSxhIiwiZmlsZSI6InVua25vd24iLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgX3JlZ2VuZXJhdG9yUnVudGltZSBmcm9tICdiYWJlbC1ydW50aW1lL3JlZ2VuZXJhdG9yJztcbmltcG9ydCBfYXN5bmNUb0dlbmVyYXRvciBmcm9tICdiYWJlbC1ydW50aW1lL2hlbHBlcnMvYXN5bmNUb0dlbmVyYXRvcic7XG5pbXBvcnQgX09iamVjdCRnZXRQcm90b3R5cGVPZiBmcm9tICdiYWJlbC1ydW50aW1lL2NvcmUtanMvb2JqZWN0L2dldC1wcm90b3R5cGUtb2YnO1xuaW1wb3J0IF9jbGFzc0NhbGxDaGVjayBmcm9tICdiYWJlbC1ydW50aW1lL2hlbHBlcnMvY2xhc3NDYWxsQ2hlY2snO1xuaW1wb3J0IF9jcmVhdGVDbGFzcyBmcm9tICdiYWJlbC1ydW50aW1lL2hlbHBlcnMvY3JlYXRlQ2xhc3MnO1xuaW1wb3J0IF9wb3NzaWJsZUNvbnN0cnVjdG9yUmV0dXJuIGZyb20gJ2JhYmVsLXJ1bnRpbWUvaGVscGVycy9wb3NzaWJsZUNvbnN0cnVjdG9yUmV0dXJuJztcbmltcG9ydCBfaW5oZXJpdHMgZnJvbSAnYmFiZWwtcnVudGltZS9oZWxwZXJzL2luaGVyaXRzJztcbnZhciBfanN4RmlsZU5hbWUgPSAnRDpcXFxcQ1JPV0QgRlVORElOR1xcXFxwYWdlc1xcXFxpbmRleC5qcz9lbnRyeSc7XG5pbXBvcnQgUmVhY3QsIHsgQ29tcG9uZW50IH0gZnJvbSAncmVhY3QnO1xuaW1wb3J0IHsgQ2FyZCwgQnV0dG9uIH0gZnJvbSAnc2VtYW50aWMtdWktcmVhY3QnO1xuaW1wb3J0IGZhY3RvcnkgZnJvbSAnLi4vZXRoZXJldW0vZmFjdG9yeSc7XG5pbXBvcnQgTGF5b3V0IGZyb20gJy4uL2NvbXBvbmVudHMvTGF5b3V0JztcbmltcG9ydCB7IExpbmsgfSBmcm9tICcuLi9yb3V0ZXMnO1xuXG52YXIgQ2FtcGFpZ25JbmRleCA9IGZ1bmN0aW9uIChfQ29tcG9uZW50KSB7XG4gIF9pbmhlcml0cyhDYW1wYWlnbkluZGV4LCBfQ29tcG9uZW50KTtcblxuICBmdW5jdGlvbiBDYW1wYWlnbkluZGV4KCkge1xuICAgIF9jbGFzc0NhbGxDaGVjayh0aGlzLCBDYW1wYWlnbkluZGV4KTtcblxuICAgIHJldHVybiBfcG9zc2libGVDb25zdHJ1Y3RvclJldHVybih0aGlzLCAoQ2FtcGFpZ25JbmRleC5fX3Byb3RvX18gfHwgX09iamVjdCRnZXRQcm90b3R5cGVPZihDYW1wYWlnbkluZGV4KSkuYXBwbHkodGhpcywgYXJndW1lbnRzKSk7XG4gIH1cblxuICBfY3JlYXRlQ2xhc3MoQ2FtcGFpZ25JbmRleCwgW3tcbiAgICBrZXk6ICdyZW5kZXJDYW1wYWlnbnMnLFxuICAgIHZhbHVlOiBmdW5jdGlvbiByZW5kZXJDYW1wYWlnbnMoKSB7XG4gICAgICB2YXIgaXRlbXMgPSB0aGlzLnByb3BzLmNhbXBhaWducy5tYXAoZnVuY3Rpb24gKGFkZHJlc3MpIHtcbiAgICAgICAgcmV0dXJuIHtcbiAgICAgICAgICBoZWFkZXI6IGFkZHJlc3MsXG4gICAgICAgICAgZGVzY3JpcHRpb246IFJlYWN0LmNyZWF0ZUVsZW1lbnQoXG4gICAgICAgICAgICBMaW5rLFxuICAgICAgICAgICAgeyByb3V0ZTogJy9jYW1wYWlnbnMvJyArIGFkZHJlc3MsIF9fc291cmNlOiB7XG4gICAgICAgICAgICAgICAgZmlsZU5hbWU6IF9qc3hGaWxlTmFtZSxcbiAgICAgICAgICAgICAgICBsaW5lTnVtYmVyOiAxOVxuICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9LFxuICAgICAgICAgICAgUmVhY3QuY3JlYXRlRWxlbWVudChcbiAgICAgICAgICAgICAgJ2EnLFxuICAgICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgX19zb3VyY2U6IHtcbiAgICAgICAgICAgICAgICAgIGZpbGVOYW1lOiBfanN4RmlsZU5hbWUsXG4gICAgICAgICAgICAgICAgICBsaW5lTnVtYmVyOiAyMFxuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgJ1ZpZXcgQ2FtcGFpZ24nXG4gICAgICAgICAgICApXG4gICAgICAgICAgKSxcbiAgICAgICAgICBmbHVpZDogdHJ1ZVxuICAgICAgICB9O1xuICAgICAgfSk7XG5cbiAgICAgIHJldHVybiBSZWFjdC5jcmVhdGVFbGVtZW50KENhcmQuR3JvdXAsIHsgaXRlbXM6IGl0ZW1zLCBfX3NvdXJjZToge1xuICAgICAgICAgIGZpbGVOYW1lOiBfanN4RmlsZU5hbWUsXG4gICAgICAgICAgbGluZU51bWJlcjogMjdcbiAgICAgICAgfVxuICAgICAgfSk7XG4gICAgfVxuICB9LCB7XG4gICAga2V5OiAncmVuZGVyJyxcbiAgICB2YWx1ZTogZnVuY3Rpb24gcmVuZGVyKCkge1xuICAgICAgcmV0dXJuIFJlYWN0LmNyZWF0ZUVsZW1lbnQoXG4gICAgICAgIExheW91dCxcbiAgICAgICAge1xuICAgICAgICAgIF9fc291cmNlOiB7XG4gICAgICAgICAgICBmaWxlTmFtZTogX2pzeEZpbGVOYW1lLFxuICAgICAgICAgICAgbGluZU51bWJlcjogMzJcbiAgICAgICAgICB9XG4gICAgICAgIH0sXG4gICAgICAgIFJlYWN0LmNyZWF0ZUVsZW1lbnQoXG4gICAgICAgICAgJ2RpdicsXG4gICAgICAgICAge1xuICAgICAgICAgICAgX19zb3VyY2U6IHtcbiAgICAgICAgICAgICAgZmlsZU5hbWU6IF9qc3hGaWxlTmFtZSxcbiAgICAgICAgICAgICAgbGluZU51bWJlcjogMzNcbiAgICAgICAgICAgIH1cbiAgICAgICAgICB9LFxuICAgICAgICAgIFJlYWN0LmNyZWF0ZUVsZW1lbnQoXG4gICAgICAgICAgICAnaDMnLFxuICAgICAgICAgICAge1xuICAgICAgICAgICAgICBfX3NvdXJjZToge1xuICAgICAgICAgICAgICAgIGZpbGVOYW1lOiBfanN4RmlsZU5hbWUsXG4gICAgICAgICAgICAgICAgbGluZU51bWJlcjogMzRcbiAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICdPcGVuIENhbXBhaWducydcbiAgICAgICAgICApLFxuICAgICAgICAgIFJlYWN0LmNyZWF0ZUVsZW1lbnQoXG4gICAgICAgICAgICBMaW5rLFxuICAgICAgICAgICAgeyByb3V0ZTogJy9jYW1wYWlnbnMvbmV3JywgX19zb3VyY2U6IHtcbiAgICAgICAgICAgICAgICBmaWxlTmFtZTogX2pzeEZpbGVOYW1lLFxuICAgICAgICAgICAgICAgIGxpbmVOdW1iZXI6IDM2XG4gICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH0sXG4gICAgICAgICAgICBSZWFjdC5jcmVhdGVFbGVtZW50KFxuICAgICAgICAgICAgICAnYScsXG4gICAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICBfX3NvdXJjZToge1xuICAgICAgICAgICAgICAgICAgZmlsZU5hbWU6IF9qc3hGaWxlTmFtZSxcbiAgICAgICAgICAgICAgICAgIGxpbmVOdW1iZXI6IDM3XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICBSZWFjdC5jcmVhdGVFbGVtZW50KEJ1dHRvbiwge1xuICAgICAgICAgICAgICAgIGZsb2F0ZWQ6ICdyaWdodCcsXG4gICAgICAgICAgICAgICAgY29udGVudDogJ0NyZWF0ZSBDYW1wYWlnbicsXG4gICAgICAgICAgICAgICAgaWNvbjogJ2FkZCBjaXJjbGUnLFxuICAgICAgICAgICAgICAgIHByaW1hcnk6IHRydWUsXG4gICAgICAgICAgICAgICAgX19zb3VyY2U6IHtcbiAgICAgICAgICAgICAgICAgIGZpbGVOYW1lOiBfanN4RmlsZU5hbWUsXG4gICAgICAgICAgICAgICAgICBsaW5lTnVtYmVyOiAzOFxuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgfSlcbiAgICAgICAgICAgIClcbiAgICAgICAgICApLFxuICAgICAgICAgIHRoaXMucmVuZGVyQ2FtcGFpZ25zKClcbiAgICAgICAgKVxuICAgICAgKTtcbiAgICB9XG4gIH1dLCBbe1xuICAgIGtleTogJ2dldEluaXRpYWxQcm9wcycsXG4gICAgdmFsdWU6IGZ1bmN0aW9uICgpIHtcbiAgICAgIHZhciBfcmVmID0gX2FzeW5jVG9HZW5lcmF0b3IoIC8qI19fUFVSRV9fKi9fcmVnZW5lcmF0b3JSdW50aW1lLm1hcmsoZnVuY3Rpb24gX2NhbGxlZSgpIHtcbiAgICAgICAgdmFyIGNhbXBhaWducztcbiAgICAgICAgcmV0dXJuIF9yZWdlbmVyYXRvclJ1bnRpbWUud3JhcChmdW5jdGlvbiBfY2FsbGVlJChfY29udGV4dCkge1xuICAgICAgICAgIHdoaWxlICgxKSB7XG4gICAgICAgICAgICBzd2l0Y2ggKF9jb250ZXh0LnByZXYgPSBfY29udGV4dC5uZXh0KSB7XG4gICAgICAgICAgICAgIGNhc2UgMDpcbiAgICAgICAgICAgICAgICBfY29udGV4dC5uZXh0ID0gMjtcbiAgICAgICAgICAgICAgICByZXR1cm4gZmFjdG9yeS5tZXRob2RzLmdldERlcGxveWVkQ2FtcGFpZ25zKCkuY2FsbCgpO1xuXG4gICAgICAgICAgICAgIGNhc2UgMjpcbiAgICAgICAgICAgICAgICBjYW1wYWlnbnMgPSBfY29udGV4dC5zZW50O1xuICAgICAgICAgICAgICAgIHJldHVybiBfY29udGV4dC5hYnJ1cHQoJ3JldHVybicsIHsgY2FtcGFpZ25zOiBjYW1wYWlnbnMgfSk7XG5cbiAgICAgICAgICAgICAgY2FzZSA0OlxuICAgICAgICAgICAgICBjYXNlICdlbmQnOlxuICAgICAgICAgICAgICAgIHJldHVybiBfY29udGV4dC5zdG9wKCk7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgfVxuICAgICAgICB9LCBfY2FsbGVlLCB0aGlzKTtcbiAgICAgIH0pKTtcblxuICAgICAgZnVuY3Rpb24gZ2V0SW5pdGlhbFByb3BzKCkge1xuICAgICAgICByZXR1cm4gX3JlZi5hcHBseSh0aGlzLCBhcmd1bWVudHMpO1xuICAgICAgfVxuXG4gICAgICByZXR1cm4gZ2V0SW5pdGlhbFByb3BzO1xuICAgIH0oKVxuICB9XSk7XG5cbiAgcmV0dXJuIENhbXBhaWduSW5kZXg7XG59KENvbXBvbmVudCk7XG5cbmV4cG9ydCBkZWZhdWx0IENhbXBhaWduSW5kZXg7Il19
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInVua25vd24iXSwibmFtZXMiOlsiX2pzeEZpbGVOYW1lIiwiQ2FtcGFpZ25JbmRleCIsIl9Db21wb25lbnQiLCJfX3Byb3RvX18iLCJhcHBseSIsImFyZ3VtZW50cyIsImtleSIsInZhbHVlIiwicmVuZGVyQ2FtcGFpZ25zIiwiaXRlbXMiLCJwcm9wcyIsImNhbXBhaWducyIsIm1hcCIsImFkZHJlc3MiLCJoZWFkZXIiLCJkZXNjcmlwdGlvbiIsImNyZWF0ZUVsZW1lbnQiLCJyb3V0ZSIsIl9fc291cmNlIiwiZmlsZU5hbWUiLCJsaW5lTnVtYmVyIiwiZmx1aWQiLCJHcm91cCIsInJlbmRlciIsImZsb2F0ZWQiLCJjb250ZW50IiwiaWNvbiIsInByaW1hcnkiLCJfcmVmIiwibWFyayIsIl9jYWxsZWUiLCJ3cmFwIiwiX2NhbGxlZSQiLCJfY29udGV4dCIsInByZXYiLCJuZXh0IiwibWV0aG9kcyIsImdldERlcGxveWVkQ2FtcGFpZ25zIiwiY2FsbCIsInNlbnQiLCJhYnJ1cHQiLCJzdG9wIiwiZ2V0SW5pdGlhbFByb3BzIl0sIm1hcHBpbmdzIjoiOzs7Ozs7QUFBQTs7OztBQUNBOzs7O0FBQ0E7Ozs7QUFDQTs7OztBQUNBOzs7O0FBQ0E7Ozs7QUFDQTs7OztBQUVBOzs7O0FBQ0E7O0FBQ0E7Ozs7QUFDQTs7OztBQUNBOzs7O0FBTEEsSUFBSUEsZUFBZSwwQ0FBbkI7OztBQU9BLElBQUlDLGdCQUFnQixVQUFVQyxVQUFWLEVBQXNCO0FBQ3hDLDBCQUFVRCxhQUFWLEVBQXlCQyxVQUF6Qjs7QUFFQSxXQUFTRCxhQUFULEdBQXlCO0FBQ3ZCLGtDQUFnQixJQUFoQixFQUFzQkEsYUFBdEI7O0FBRUEsV0FBTyx5Q0FBMkIsSUFBM0IsRUFBaUMsQ0FBQ0EsY0FBY0UsU0FBZCxJQUEyQiw4QkFBdUJGLGFBQXZCLENBQTVCLEVBQW1FRyxLQUFuRSxDQUF5RSxJQUF6RSxFQUErRUMsU0FBL0UsQ0FBakMsQ0FBUDtBQUNEOztBQUVELDZCQUFhSixhQUFiLEVBQTRCLENB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