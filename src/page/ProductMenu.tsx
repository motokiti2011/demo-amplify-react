// import { useState, useEffect } from "react";
import { generateClient } from 'aws-amplify/data'
import type { Schema } from '../../amplify/data/resource'

const client = generateClient<Schema>()

export default function ProductMenu() {
    const createTodo = async () => {
        await client.models.Todo.create({
          content: window.prompt("Todo content?"),
          isDone: false
        })
      }
    
      return <div>
        <button onClick={createTodo}>Add new todo</button>
      </div>
    }





//     const [todos, setTodos] = useState<Schema["Todo"]["type"][]>([]);

//     const fetchTodos = async () => {
//       const { data: items, errors } = await client.models.Todo.list();
//       setTodos(items);
//     };
  
//     useEffect(() => {
//       fetchTodos();
//     }, []);
  
//     const createTodo = async () => {
//       await client.models.Todo.create({
//         content: window.prompt("Todo content?"),
//         isDone: false,
//       });
  
//       fetchTodos();
//     }

//   return <div>
//     <h1>Product-menu</h1>
//     <button onClick={createTodo}>Add new todo</button>
//       <ul>
//         {todos.map(({ id, content }) => (
//           <li key={id}>{content}</li>
//         ))}
//       </ul>
//   </div>
// }

// src/components/View.tsx
// const ProductMenu = () => {
//     return (
//         <>
//             <h1>Product-menu</h1>
//             <button onClick={createTodo}>Add new todo</button>
//         </>
//     )
// } 
// export default ProductMenu;
