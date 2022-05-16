db.produtos.updateMany({
    nome: { $ne: "McChicken" },
}, {
    $addToSet: {
        ingredientes: "ketchup",
    },
});

db.produtos.find({},
     { nome: 1, ingredientes: true, _id: false });