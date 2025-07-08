export const projects = [

    {
        id: 1,
        title: 'Proyecto 1',
        img: 'https://picsum.photos/201',
        description:'Lorem ipsum dolor sit amet consectetur. Ornare turpis lorem aliquet eleifend. Ultrices a tellus sit dictumst. Ornare blandit ut feugiat dolor quis sed feugiat ullamcorper.',
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
        title: 'Proyecto 3',
        img:'https://picsum.photos/203',
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
        },2000)
    })
}