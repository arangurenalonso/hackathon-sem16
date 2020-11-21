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
    usuarios: [],
    User: {
      id: "",
      Nombre: "",
      Apellido: "",
      Edad: "",
      Correo: ""
    }
  },
  mutations: {
    getUsuariosMutation: function getUsuariosMutation(state, payload) {
      state.usuarios = payload;
    },
    getUsuerMutation: function getUsuerMutation(state, payload) {
      state.User = payload;
    },
    deleteUserMutation: function deleteUserMutation(state, payload) {
      state.usuarios = state.usuarios.filter(function (items) {
        return items.id !== payload;
      });
    }
  },
  actions: {
    getUsuariosAction: function getUsuariosAction(_ref) {
      var commit = _ref.commit;

      _vue["default"].axios.get('http://localhost:3000/usuarios/').then(function (response) {
        commit('getUsuariosMutation', response.data);
      });
    },
    getUserAction: function getUserAction(_ref2, id) {
      var commit = _ref2.commit;

      _vue["default"].axios.get("http://localhost:3000/usuarios/".concat(id)).then(function (response) {
        commit('getUsuerMutation', response.data);
      });
    },
    deleteUserAction: function deleteUserAction(_ref3, id) {
      var commit = _ref3.commit;

      _vue["default"].axios["delete"]("http://localhost:3000/usuarios/".concat(id)).then(function () {
        commit('deleteUserMutation', id);
      });
    },
    crearUserAction: function crearUserAction(_ref4, usuarioNuevo) {
      var commit = _ref4.commit;

      _vue["default"].axios.post('http://localhost:3000/usuarios/', usuarioNuevo).then(function (response) {
        _router["default"].push('/');
      });
    },
    editarUserAction: function editarUserAction(_ref5, usuarioNuevo) {
      var commit = _ref5.commit;

      _vue["default"].axios.put("http://localhost:3000/usuarios/".concat(usuarioNuevo.id), usuarioNuevo).then(function (response) {
        console.log(usuarioNuevo);

        _router["default"].push('/');
      });
    }
  },
  modules: {}
});

exports["default"] = _default;