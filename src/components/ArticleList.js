import React from 'react';
import Article from './Article';


function ArticleList( {posts} ) {
    
    const postList = posts.map(post => {
        return <Article key={post.id} post={post} />
    })

    return (
        <main>
            { postList } 
        </main>
    )
}

export default ArticleList;