import { RiSaveLine } from 'react-icons/ri';
import { MdOutlineCancel } from 'react-icons/md';

import style from './EditForm.module.css';

const EditForm = ({ currentTodo, cancelEdit, onSubmit }) => {
  const handleSubmit = e => {
    e.preventDefault();
    const form = e.target;
    const value = form.text.value.trim();
    if (!value) {
      alert('value is empty');
      return;
    }
    onSubmit(value);
  };

  return (
    <form className={style.form} onSubmit={handleSubmit}>
      <button className={style.submitButton} type="submit">
        <RiSaveLine color="green" size="16px" />
      </button>

      <button onClick={cancelEdit} className={style.editButton} type="button">
        <MdOutlineCancel color="red" size="16px" />
      </button>

      <input
        className={style.input}
        placeholder="What do you want to write?"
        name="text"
        required
        defaultValue={currentTodo.text}
        autoFocus
      />
    </form>
  );
};
export default EditForm;
