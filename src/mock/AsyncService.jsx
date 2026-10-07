export const projects = [

    {
        id: 1,
        titleKey: 'project1_title',
        img: '/blopy.png',
        descriptionKey:'project1_description',
        link:'https://blopy-alpha.vercel.app/',
    },
    {
        id: 2,
        title: 'Ecommerce - Javascript',
        img:'/ecommerce-Js.png',
        descriptionKey: 'project2_description',
        link:'https://ecommerce-js-delta.vercel.app/',
    },
        {
        id: 3,
        title: 'Siempre argenta - Ecommerce - React',
        img:'/ecommerce.png',
        descriptionKey: 'project3_description',
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