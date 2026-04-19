import { useState } from 'react'
import styles from'./Post.module.css'

function Post({ author, content }) {
    const [postContent, setPostContent] = useState(content)

    return (
        <div className={styles.postCard}>
            <div className={styles.postHeader}>
                <h2 className={styles.postAuthor}  >{author}</h2>
            </div>
            
            <div className={styles.postBody}>
                {postContent}
            </div>

            <div className={styles.postEditArea}>
                <input 
                    className={styles.postInput}
                    type="text" 
                    onChange={(e) => setPostContent(e.target.value)} 
                    placeholder="מה דעתך? ערוך את הפוסט..."
                />
            </div>
        </div>
    )
}

export default Post