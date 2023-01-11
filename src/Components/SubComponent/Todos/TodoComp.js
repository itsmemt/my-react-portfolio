import "./TodoComp.css"
const Todo = ({ task, date, isCompleted, onComplete, onDelete }) => (
  <div className="todo-container">
    <div className="tasks">
      <span className="task">{task}</span>
      <span className="todo-date">{date}</span>
    </div>
    <div className="btnn">
      {!isCompleted && (
        <>
          <button onClick={onComplete}>Complete</button>
          <button onClick={onDelete}>Delete X</button>
        </>
      )}
    </div>
  </div>
);
export default Todo;