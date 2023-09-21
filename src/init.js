const dom = {
    root: document.getElementById('root'),
};

const getPosts= async () => {
    const response = await fetch('https://jsonplaceholder.typicode.com/posts');
    if(!response.ok){
        throw new Error('failed to fetch');
    }
    const data= await response.json();
    return data;
};

const createPost = (data)=>{
       // container
       const container = document.createElement('div');
       container.classList.add('container');
   
       // title
       const title = document.createElement('h2');
       title.innerText = data.title;
   
       // body
       const body = document.createElement('p');
       body.innerText = data.body;
   
       container.append(title, body);
       return container;
}


const getPostsHandler = async()=>{
    const getPostData = await getPosts();
    getPostData.forEach((data)=>{
      const postDom = createPost(data);
      dom.root.append(postDom);
    })
}


window.addEventListener('load',getPostsHandler);
