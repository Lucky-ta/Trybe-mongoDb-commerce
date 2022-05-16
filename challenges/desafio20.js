// Remova o primeiro ingrediente do sanduíche Quarteirão com Queijo

db.produtos.updateOne({
    nome: 'Quarteirão com Queijo'
}, {
    $pop: {
        ingredientes: -1
    }
})

db.produtos.find(
    {},
    {
      nome: true,
      ingredientes: true,
      _id: false,
    },
  );