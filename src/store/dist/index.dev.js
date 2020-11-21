"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _vue = _interopRequireDefault(require("vue"));

var _vuex = _interopRequireDefault(require("vuex"));

var _axios = _interopRequireDefault(require("axios"));

var _vueAxios = _interopRequireDefault(require("vue-axios"));

var _router = _interopRequireDefault(require("./../router"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

_vue["default"].use(_vueAxios["default"], _axios["default"]);

_vue["default"].use(_vuex["default"]);

var _default = new _vuex["default"].Store({
  state: {
    usuarios: []
  },
  mutations: {
    getUsuariosMutation: function getUsuariosMutation(state, payload) {
      state.usuarios = payload;
    },
    deleteUserMutation: function deleteUserMutation(state, payload) {
      state.usuarios = state.usuarios.filter(function (items) {
        return items.id !== payload;
      });
    }
  },
  actions: {
    /*
    async getUsuariosAction({commit}){
      const info =await fetch('http://localhost:3000/usuarios/')
      const data = await info.json();
      console.log(data)
      commit('getUsuariosMutation',data)
        },
    */
    getUsuariosAction: function getUsuariosAction(_ref) {
      var commit = _ref.commit;

      _vue["default"].axios.get('http://localhost:3000/usuarios/').then(function (response) {
        console.log(response.data);
        commit('getUsuariosMutation', response.data);
      });
    },
    deleteUserAction: function deleteUserAction(_ref2, id) {
      var commit = _ref2.commit;

      _vue["default"].axios["delete"]("http://localhost:3000/usuarios/".concat(id)).then(function () {
        commit('deleteUserMutation', id);
      });
    },
    crearUserAction: function crearUserAction(_ref3, usuarioNuevo) {
      var commit = _ref3.commit;

      _vue["default"].axios.post('http://localhost:3000/usuarios/', usuarioNuevo).then(function (response) {
        _router["default"].push('/');
      });
    }
  },
  modules: {}
});

exports["default"] = _default;