// tests/test4.js
async function testDeleteItem() {
  console.log('=== [TESTE 3] A iniciar: DELETE /api/items/1 ===');
  try {
    const response = await fetch('http://localhost:3000/api/items/1', {
      method: 'DELETE',
    });

    const data = await response.json();

    if (response.status === 200 && data.success) {
      console.log('✅ [TESTE 3] Passou! Mensagem:', data.message);
    } else {
      console.error('❌ [TESTE 3] Falhou! Resposta inesperada:', data);
      process.exit(1);
    }
  } catch (error) {
    console.error('❌ [TESTE 3] Erro de conexão com a API:', error.message);
    process.exit(1);
  }
}

testDeleteItem();