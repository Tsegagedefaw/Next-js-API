import { comment } from "../../data/comment";

export default function handler(req, res) {
    if (req.method === 'GET') {
        res.status(200).json(comment);
    } else if (req.method === 'POST') {
        const comments = req.body.inputcomment;
        const newComment = {
            id: Date.now(),
            text: comments
        }
        comment.push(newComment);
        res.status(201).json(newComment);
    }

}