const Contenedor = require('./Contenedor');

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

const contenedor = new Contenedor('productos.txt');

const guardar = async ()=>{
    await contenedor.save(escuadra);
    await contenedor.save(calculadora);
    await contenedor.save(lapiz);
    await contenedor.save(goma);
}

const getOne = async id =>{
    const producto = await contenedor.getById(id);
    console.log(producto);
}

const getAll = async()=>{
    let productos = await contenedor.getAll();
    console.table(productos);
}

const deleteOne = async id =>{
    await contenedor.deleteById(id);
    console.log('Elemento borrado');
}

const deleteAll = async()=>{
    await contenedor.deleteAll();
    console.log('Se eliminaron todos los productos');
}

//guardar();
//getOne(2);
//getAll();
//deleteOne(2);
//deleteAll();
