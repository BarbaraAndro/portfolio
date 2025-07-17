export const projects = [

    {
        id: 1,
        title: 'Blopy - Información vegana',
        img: '/blopy.png',
        description:'Pagina realizada en mi curso de Desarrollo Web en Coderhouse donde se aplican los conocimientos basicos de HTML y CSS. A su vex se aplican librerias tales como Sass y Bootstrap.  Blopy es una pagina donde encontraras información de lugares para comer, productos de todo tipo, noticias y mucho mas, todo vegano.',
        link:'https://blopy-alpha.vercel.app/',
        // tools/tecnology:{
        //     html:true;
        //     css:true;
        //     js:true;
        //     react:false;
        //}
    },
    {
        id: 2,
        title: 'Proyecto 2',
        img:'https://picsum.photos/202',
        description: 'Lorem ipsum dolor sit amet consectetur. Ornare turpis lorem aliquet eleifend. Ultrices a tellus sit dictumst. Ornare blandit ut feugiat dolor quis sed feugiat ullamcorper.',
        link:'https://ecommerce-andro.vercel.app/',
    },
    // {
    //     title:;
    //     img:;
    //     description:;
    //     link:;
    // }
        {
        id: 3,
        title: 'Siempre argenta - Ecommerce',
        img:'/ecommerce.png',
        description: 'Lorem ipsum dolor sit amet consectetur. Ornare turpis lorem aliquet eleifend. Ultrices a tellus sit dictumst. Ornare blandit ut feugiat dolor quis sed feugiat ullamcorper.',
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