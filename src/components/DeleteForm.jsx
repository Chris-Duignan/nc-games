const DeleteForm = ({handleDelete, id}) => {

  return (
      <button className="delete-btn" onClick={() => {handleDelete(id)}}>Yes, delete my comment</button>
  );
};

export default DeleteForm;
