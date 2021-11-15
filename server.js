const express = require("express");
const app = express();
const data = require("./data.json");

app.use(express.json());

// Listar todos os clientes
app.get("/clients", function (request, response) {
  response.json(data);
});

// Listar um cliente especifico
app.get("/clients/:id", function (request, response) {
  const { id } = request.params;
  const client = data.find((_client) => _client.id == id);
  // status 204, existe o end-point , mas o cliente com  o id fornecido, não existe
  if (!client) return response.status(204).json({ message: "Tem nada aí não" });
  response.json(client);
});

// Salavar um novo cliente
app.post("/clients", function (request, response) {
  const { name, email } = request.body;
  console.warn(request.body);
  // Logica de Salvar

  response.json({ name, email });
});

// Editar um cliente existente
app.put("/clients/:id", function (request, response) {
  const { id } = request.params;
  const client = data.find((_client) => _client.id == id);
  const { name } = request.body;
  if (!client) return response.status(204).json({ message: "Tem nada aí não" });
  client.name = name;

  response.json(client);
});

// Eliminar um cliente especifico
app.delete("/clients/:id", function (request, response) {
  const { id } = request.params;
  const clientsFiltered = data.filter((_client) => _client.id != id);

  return response.json(clientsFiltered);
});

app.listen(3000, function () {
  console.log("server is runing");
});
