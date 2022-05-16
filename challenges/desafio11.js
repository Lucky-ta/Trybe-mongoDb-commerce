db.produtos.find({
    $and: [
        { nome: { $ne: "Big Mac" } },
        { nome: { $ne: "McChicken" } },
    ],
}, {
    nome: true,
    curtidas: true,
    vendidos: true,
    _id: false,
});