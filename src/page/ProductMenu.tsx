import { generateClient } from 'aws-amplify/data';
import { useEffect, useState } from "react";
import type { Schema } from '../../amplify/data/resource';


const client = generateClient<Schema>()

export default function ProductMenu() {
    

  const [todos, setTodos] = useState<Schema["Todo"]["type"][]>([]);

  const fetchTodos = async () => {
    const { data: items
      // , errors 
    } = await client.models.Todo.list();
    setTodos(items);
  };

  useEffect(() => {
    fetchTodos();
  }, []);
  
  /**
   * 登録処理
   */
  const createTodo = async () => {
      await client.models.Todo.create({
        content: window.prompt("Todo content?"),
        isDone: false
    })
    fetchTodos();
  }
    
  
      return <div>
        <button onClick={createTodo}>Add new todo</button>
          <ul>
            {todos.map(({ id, content }) => (
              <li key={id}>{content}</li>
            ))}
        </ul>
      </div>
    }

