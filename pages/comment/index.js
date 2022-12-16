import react from "react"

function commentsPage(){
    const [comments, setComments] = react.useState([]);
    const [inputcomment,setInputComment] = react.useState('');
    
    // For Get API
    const fetchComment = async()=>{
            const response = await fetch('api/comment')
            const data = await response.json()
            setComments(data)
        }
    // For POST API
    const submitComment = async()=>{
        const response = await fetch('/api/comment',{
            method:'POST',
            body: JSON.stringify({inputcomment}),
            headers:{
                'Content-Type':'application/json'
            }
        })
        const data = await response.json();
        console.log(data);
    }
    // FOr DELETE API
    const handleDelete = async commentid =>{
        const response = await fetch(`/api/comment/${commentid}`,{
            method:'DELETE'
        })
        const data = await response.json();
        console.log(data);
        fetchComment();
    }
        return(
        
        <>
            <input type='text' value={inputcomment} 
                onChange={e=>setInputComment(e.target.value)}
            />
            <button onClick={submitComment}>
                Submit Comment
            </button>
            <button onClick={fetchComment}>
                Load Comments
            </button>
            <ui>
                {
                    comments.map(comment=>{
                        return (
                            <div key={comment.id}>
                                <li>
                                    {comment.text}
                                    <button onClick={()=>handleDelete(comment.id)}>
                                        Delete
                                    </button>
                                </li>
                            </div>
                        )
                    })
                }
                
            </ui>
        </>
    )
}

export default commentsPage