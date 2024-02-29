"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Oecd = exports.Kosis = exports.Ecos = exports.Indicator = void 0;
var indicator_1 = require("./indicator");
Object.defineProperty(exports, "Indicator", { enumerable: true, get: function () { return indicator_1.Indicator; } });
var ecos_1 = require("./ecos");
Object.defineProperty(exports, "Ecos", { enumerable: true, get: function () { return ecos_1.Ecos; } });
var kosis_1 = require("./kosis");
Object.defineProperty(exports, "Kosis", { enumerable: true, get: function () { return kosis_1.Kosis; } });
var oecd_1 = require("./oecd");
Object.defineProperty(exports, "Oecd", { enumerable: true, get: function () { return oecd_1.Oecd; } });
// (async () => {
//   try {
//     await sequelize.sync({ force: true, alter: true });
//     console.log('SUCCESS')
//   } catch (error) {
//     console.log(error) 
//   }
// })();
//# sourceMappingURL=index.js.map