const list = document.querySelector('.todo-list');
// const listItem = document.querySelector('.list-item')
const input = document.querySelector('.add-todo')
const form = document.querySelector('.todo-form')
console.log(form)
console.log(input)

// form.addEventListener("submit", e => {
//     e.preventDefault();
//     fetch("http://localhost:3000/todo", {
//         method: "POST",
//         headers : {
//             Accept: "application/json",
//             "Content-Type" : "application/json"
//         },
//         body: JSON.stringify({todo: input.value})
//     })
//         .then(res => {
//             return res.json()
//         })
//         .then(json => {
//             const li = document.createElement('li')
//             li.innerHTML = json.todo
//             list.appendChild(li)
//         })
//         .catch(error => {
//             console.error('Error:', error);
//             // Handle the error, e.g., display an error message to the user
//         });
// })

form.addEventListener("submit", async e => {
    e.preventDefault()

    try {
        const res = await fetch("http://localhost:3000/todo", {
            method: "POST",
            headers : {
                Accept: "application/json",
                "Content-Type" : "application/json"
            },
            body: JSON.stringify({todo: input.value})
        })

        if(!res.ok){
            throw new Error("Failed to add todo");
        }

        const json = await res.json();
        const li = document.createElement('li')
                li.innerHTML = json.todo
                list.appendChild(li)
                input.value = ""
    
        console.log("Success:", json);
    

    } catch(error){
        console.error('Error:', error);
    }


})