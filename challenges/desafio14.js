db.produtos.find({
    ingredientes: {
        $all: ["picles"],
    },
}, {
    nome: true,
    ingredientes: true,
    valoresNutricionais: { $slice: 3 },
    _id: false,
});