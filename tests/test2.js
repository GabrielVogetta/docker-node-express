// tests/test2.js
async function testCreateItem() {
  console.log('=== [TESTE 2] A iniciar: POST /api/items ===');
  try {
    const response = await fetch('http://localhost:3000/api/items', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({ name: 'Item Criado pelo Teste 2' }),
    });

    const data = await response.json();

    if (response.status === 201 && data.success) {
      console.log('✅ [TESTE 2] Passou! Item criado:', data.data);
    } else {
      console.error('❌ [TESTE 2] Falhou! Resposta inesperada:', data);
      process.exit(1);
    }
  } catch (error) {
    console.error('❌ [TESTE 2] Erro de conexão com a API:', error.message);
    process.exit(1);
  }
}

testCreateItem();