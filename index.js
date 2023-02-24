let posts=[
    {id:1, name: "Post 1", detail:'Lorem ipsum'},
    {id:2, name: "Post 2", detail:'Lorem ipsum dolor'},
    {id:3, name: "Post 3", detail:'Lorem ipsum sit'},
    {id:4, name: "Post 4", detail:'Lorem ipsum amet' },

]
const listPosts=()=>posts.map(post=>{
    console.log(post);
});

const addPost = () => {
    let promiseNewPost = new Promise((res, rej) => {
        posts.push({id:5, name: 'Post 5', detail:'Lorem ipsum' })
        res('Adding new post is successful')
    })

    return promiseNewPost
};


const updatePosts=async()=>{
    try{
        
        let res=await addPost()
        console.log(res);
        setTimeout(()=>{
         listPosts()

        }, 1000)

    }catch(err){
        console.log(err);
    }
}
updatePosts()