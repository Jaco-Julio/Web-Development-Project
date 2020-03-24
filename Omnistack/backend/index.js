const express = require("express");

const app = express();

app.get('/', (request,response) => {
    return response.json({
        evento: 'Desenvolvimento web/mobile',
        aluno: 'Jacó Júlio'
    });
});
app.listen(3333);
