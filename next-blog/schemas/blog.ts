export default {
    name:'blog',
    type:'document',
    title:'Blogs',
    fields:[
        {
            name:'title',
            type:'string',
            title:'Title of Blog Article'
        },
        {
            name:'slug',
            type:'slug',
            title:'Slug of Blog Article',
            options:{
                source:'title'
            }
        },
        {
            name:'titleImage',
            type:'image',
            title:'Title Image'
        },
        {
            name:'description',
            type:'text',
            title:'Description'
        },
        {
            name:'content',
            type:'array',
            title:'Content',
            of:[
                {type: 'block'},
            ]
        },

    ]
}