const comments = [
    {
        "date": new Date(),
        "name": "zt",
        "comment": "Comment 1"
    },
    {
        "date": new Date(),
        "name": "sakura",
        "comment": "Comment 2"
    },
    {
        "date": new Date(),
        "name": "zt",
        "comment": "Comment 3"
    },
    {
        "date": new Date(),
        "name": "hinata",
        "comment": "Comment 4"
    },
];

const createCommentSpan = comment => {
    let box = document.createElement("span");

    let date = document.createElement("span");
    date.appendChild(document.createTextNode(comment.date));

    let name = document.createElement("span");
    name.appendChild(document.createTextNode(comment.name));

    let cmt = document.createElement("span");
    cmt.appendChild(document.createTextNode(comment.comment));

    box.appendChild(date);
    box.appendChild(name);
    box.appendChild(cmt);

    document.querySelector("#comments").appendChild(box);
}