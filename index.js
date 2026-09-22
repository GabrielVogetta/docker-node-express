const express = require('express');
const app = express();
const PORT = 3000;

app.use(express.json());

// Dados em memória para simular um banco de dados
let items = [
  { id: 1, name: 'Item Teste 1' }
];

// Rota 1: GET - Teste de busca de dados
app.get('/api/items', (req, res) => {
  console.log('[GET /api/items] Chamado');
  res.status(200).json({ success: true, data: items });
});

// Rota 2: POST - Teste de criação de dados
app.post('/api/items', (req, res) => {
  console.log('[POST /api/items] Chamado com body:', req.body);
  
  const { name } = req.body;
  if (!name) {
    return res.status(400).json({ success: false, message: 'Nome é obrigatório' });
  }

  const newItem = { id: items.length + 1, name };
  items.push(newItem);

  res.status(201).json({ success: true, data: newItem });
});

// Rota 3: DELETE - Teste de remoção
app.delete('/api/items/:id', (req, res) => {
  const id = parseInt(req.params.id);
  console.log(`[DELETE /api/items/${id}] Chamado`);

  items = items.filter(item => item.id !== id);
  res.status(200).json({ success: true, message: `Item ${id} removido` });
});

// Inicialização do Servidor
app.listen(PORT, () => {
  console.log(`🚀 Servidor rodando na porta ${PORT}`);
});