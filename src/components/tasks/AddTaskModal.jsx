import { useForm } from "react-hook-form";
import Modal from "../ui/Modal";
import { useDispatch } from "react-redux";
import { addTask } from "../../redux/features/tasks/tasksSlice";

const AddTaskModal = ({ isOpen, setIsOpen }) => {
  const { register, handleSubmit, reset } = useForm();
const dispatch = useDispatch();

  const onCancel = () =>{
    reset();
    setIsOpen(false);
  }

  const onSubmit = (data) => {
    dispatch(addTask(data));
    onCancel();
  };
  const assignToOptions = ["Alice", "Bob", "Charlie", "Diana", "Eve"];

  const priorityOptions = ["Low", "Medium", "High", "Urgent"];
  return (
    <Modal isOpen={isOpen} setIsOpen={setIsOpen} title="This is title">
            <form onSubmit={handleSubmit(onSubmit)}>
      <div className="flex flex-col gap-3">
        {/* Title Field */}
        <label htmlFor="title">Title</label>
        <input
          className="w-full rounded-md"
          type="text"
          {...register("title")}
        />

        {/* Description Field */}
        <label htmlFor="description">Description</label>
        <textarea
          className="w-full rounded-md"
          {...register("description")}
        />

        {/* Deadline Field (Date Picker) */}
        <label htmlFor="deadline">Deadline</label>
        <input
          className="w-full rounded-md"
          type="date"
          {...register("deadline")}
        />

        {/* Assign To Dropdown */}
        <label htmlFor="assignTo">Assign To</label>
        <select
          className="w-full rounded-md"
          {...register("assignTo")}
        >
          {assignToOptions.map((name, index) => (
            <option key={index} value={name}>
              {name}
            </option>
          ))}
        </select>

        {/* Priority Dropdown */}
        <label htmlFor="priority">Priority</label>
        <select
          className="w-full rounded-md"
          {...register("priority")}
        >
          {priorityOptions.map((priority, index) => (
            <option key={index} value={priority}>
              {priority}
            </option>
          ))}
        </select>
      </div>

      {/* Submit Button */}
      <button onClick={onCancel} type="submit" className="mt-4 p-2 bg-blue-500 text-white rounded-md">
        Cancel
      </button>
      <button type="submit" className="mt-4 p-2 bg-blue-500 text-white rounded-md">
        Submit
      </button>
    </form>
      {/* <form onSubmit={handleSubmit(onSubmit)}>
        <div className="flex flex-col gap-3">
          <label htmlFor="title">Title</label>
          <input className="w-full rounded-md" type="text" {...register("name")} />
        </div>
        <button type="submit">submit</button>
      </form> */}
    </Modal>
  );
};

export default AddTaskModal;
