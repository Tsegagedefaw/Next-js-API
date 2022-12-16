import { comment } from '../../data/comment'

function Comment({ comment }) {
    return ( 
        <div> { comment.id }. { comment.text } </div>
    )
}

export default Comment

export async function getStaticPaths() {
    return {
        paths: [
            { params: { commentid: '1' } },
            { params: { commentid: '2' } },
            { params: { commentid: '3' } }
        ],
        fallback: false,
    }
}

export async function getStaticProps(context) {
    const { params } = context
    const { commentid } = params

    const comments = comment.find((comment) => comment.id === parseInt(commentid))
    console.log(comments);


    return {
        props: {
            comment,
        },
    }
}