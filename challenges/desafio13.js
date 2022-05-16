// Inclua o campo criadoPor em todos os documentos, colocando Ronald McDonald no valor desse campo

db.produtos.updateMany({}, {
    $set: {criadoPor: 'Ronald McDonald'}
})

db.produtos.find({}, {
    nome: true,
    criadoPor: true,
    _id: false
})