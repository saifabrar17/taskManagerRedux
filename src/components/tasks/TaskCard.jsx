import { ArrowRightIcon, TrashIcon } from "@heroicons/react/24/outline";
import { useDispatch } from "react-redux";
import { updateStatus } from "../../redux/features/tasks/tasksSlice";

const TaskCard = (task) => {
  // console.log(task.task,'individual');
  const dispatch = useDispatch();

  let updatedStatus;
  if (task.task.status == "pending") {
    updatedStatus = "running";
  } else if (task.task.status == "running") {
    updatedStatus = "done";
  } else {
    updatedStatus = "archive";
  }
  return (
    <div className="bg-secondary/10 rounded-md p-5">
      <h1 className={`text-lg font-semibold mb-3`}>{task?.task.title}</h1>
      <p className="mb-3">{task?.task.description}</p>
      <p className="text-sm">Assigned to - {task?.task.assignTo}</p>
      <div className="flex justify-between mt-3">
        <p>{task?.task.deadline}</p>
        <div className="flex gap-3">
          <button title="Delete">
            <TrashIcon className="h-5 w-5 text-red-500" />
          </button>
          <button
            onClick={() =>
              dispatch(
                updateStatus({ id: task?.task.id, status: updatedStatus })
              )
            }
            title="Update Status"
          >
            <ArrowRightIcon className="h-5 w-5 text-primary" />
          </button>
        </div>
      </div>
    </div>
  );
};

export default TaskCard;
