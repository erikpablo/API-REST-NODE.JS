"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var fastify_1 = require("fastify");
var app = (0, fastify_1.default)();
// GET POST PUT DELETE PATCH 
//  http://localhost:3333/hello
app.get('/hello', function () {
    return 'hello world';
});
// Chamando o servidor para escutar na porta 3333
// o listen vai retorna um Promise, e por isso usamos o then para da um console.log
app.listen({
    port: 3333,
}).then(function () {
    console.log('Server is running');
});
