import React from 'react';

function round(minutes) {
    if (minutes < 30 ) {
       let divided = minutes / 5
       let rounded = Math.ceil(divided)
       let emoji = "☕️"
       let emojiArray = []
       for (let i=rounded; i > 0; i--) {
           emojiArray.push(emoji)
       }
       return emojiArray.join("")
    } else {
       let divided = minutes / 10
       let rounded = Math.ceil(divided)
       let emoji = "🍱"
       let emojiArray = []
       for (let i=rounded; i > 0; i--) {
           emojiArray.push(emoji)
       }
       return emojiArray.join("")
    }
   }   

function Article({post: {title, date="January 1, 1970", preview, minutes} }) {
    return (
        <article>
            <h3>{title}</h3>
            <small>{date} </small>
            <span> · {round(minutes)} {minutes} min read</span>
            <p>{preview}</p>
        </article>
    )
}

export default Article;

