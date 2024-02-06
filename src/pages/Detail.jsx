import { useSelector } from "react-redux";
import { useParams } from "react-router-dom";

const Detail = () => {
  const todos = useSelector((state) => state.todos);
  const { id } = useParams();
  const { title, body } = todos.find((item) => item.id === id);
  return (
    <div>
      <h3>{title}</h3>
      <p>{body}</p>
    </div>
  );
};

export default Detail;
