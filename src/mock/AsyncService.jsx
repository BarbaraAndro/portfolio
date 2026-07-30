export const projects = [

    {
        id: 1,
        title: 'Blopy - Información vegana - HTML + CSS',
        img: '/blopy.png',
        description:'Blopy es un sitio web informativo desarrollado con HTML5, CSS3, Sass y Bootstrap, compuesto por cinco páginas. El proyecto presenta información sobre restaurantes, productos, noticias y otros recursos relacionados con el veganismo. Cuenta con un diseño 100% responsive implementado con Flexbox y CSS Grid, además de una estructura semántica y buenas prácticas de SEO para mejorar la accesibilidad y el posicionamiento en buscadores.',
        link:'https://blopy-alpha.vercel.app/',
    },
    {
        id: 2,
        title: 'Ecommerce - Javascript',
        img:'/ecommerce-Js.png',
        description: 'Desarrollé un e-commerce funcional con JavaScript, que incluye autenticación de usuarios, filtrado de productos por categorías y un carrito de compras dinámico. Durante el proyecto apliqué conceptos fundamentales como manipulación del DOM, manejo de eventos, uso de localStorage y sessionStorage, y gestión de datos mediante arrays y objetos.',
        link:'https://ecommerce-js-delta.vercel.app/',
    },
        {
        id: 3,
        title: 'Siempre argenta - Ecommerce - React',
        img:'/ecommerce.png',
        description: 'Siempre argenta es una Single Page Application (SPA) de e-commerce con React, enfocada en la venta de productos argentinos. La aplicación incluye navegación con React Router, listado de productos con filtros dinámicos, carrito de compras y vista de detalle mediante parámetros en la URL. Utilicé useState, useEffect, useContext y Firebase para gestionar el estado, los datos de productos y las órdenes de compra. El proyecto fue desarrollado con un enfoque en la lógica de la aplicación y está optimizado para versión desktop.',
        link:'https://ecommerce-andro.vercel.app/',
    }
    // {
    //     title:;
    //     img:;
    //     description:;
    //     link:;
    // }
]

let error = false
export const getProjects = () => {
    return new Promise ((resolve,reject) =>{
        setTimeout(()=> {
            if (!error){
                resolve(projects)
            }
            else {
                reject(console.log('Error'))
            }
        },1000)
    })
}