const Contenedor = require('./Contenedor');

const contenedor = new Contenedor('productos.txt');

let escuadra = {
    thumbnail:'https://http2.mlstatic.com/D_NQ_NP_962515-MLA43205915348_082020-O.webp',
    price:160,
    title:'Escuadra'
};

let calculadora = {
    thumbnail:'https://http2.mlstatic.com/D_NQ_NP_989801-MLA31009712983_062019-O.webp',
    price:700,
    title:'Calculadora'
};

let lapiz = {
    thumbnail:'https://http2.mlstatic.com/D_NQ_NP_801870-MLA42548221678_072020-O.webp',
    price:200,
    title:'Lapiz'
};

let goma = {
    thumbnail:'https://http2.mlstatic.com/D_NQ_NP_647035-MLA30162492582_042019-O.webp',
    price:35,
    title:'Goma'
};



(async function(){
    await contenedor.save(escuadra);
    await contenedor.save(calculadora);
    await contenedor.save(lapiz);
    await contenedor.save(goma);
    const producto = await contenedor.getById(2);
    console.log(producto);
    let productos = await contenedor.getAll();
    console.table(productos);
    await contenedor.deleteById(4);
    console.log('Elemento borrado');
    productos = await contenedor.getAll();
    console.table(productos);
    await contenedor.deleteAll();
    console.log('Se eliminaron todos los productos');
})();
