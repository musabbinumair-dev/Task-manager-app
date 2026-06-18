import { Task } from "@/lib/task-context";
import { useTaskContext } from "@/lib/task-context";
import { getOwnerStyle, timeAgo } from "@/lib/helpers";

interface DoneRowProps {
  task: Task;
}

export default function DoneRow({ task }: DoneRowProps) {
  const { dispatch } = useTaskContext();

  function handleTogglePushed() {
    dispatch({ type: "TOGGLE_PUSHED", payload: task.id });
  }

  const completedTime = task.doneAt ? timeAgo(task.doneAt) : timeAgo(task.createdAt);

  return (
    <div
      data-testid={`row-done-${task.id}`}
      style={{
        display: "flex",
        alignItems: "center",
        gap: "10px",
        padding: "8px 12px",
        border: "2px solid #000",
        backgroundColor: "#F5F0E8",
        boxShadow: "3px 3px 0 #000",
      }}
    >
      {/* Green check */}
      <div style={{ width: "20px", height: "20px", backgroundColor: "#00CC44", border: "2px solid #000", display: "flex", alignItems: "center", justifyContent: "center", flexShrink: 0, fontSize: "12px", fontWeight: 700 }}>
        ✓
      </div>
      {/* Title strikethrough */}
      <div style={{ flex: 1, textDecoration: "line-through", fontFamily: "'Space Grotesk', sans-serif", fontWeight: 600, fontSize: "13px", color: "#666", overflow: "hidden", textOverflow: "ellipsis", whiteSpace: "nowrap" }}>
        {task.title}
      </div>
      {/* Owner badge */}
      <span style={{ ...getOwnerStyle(task.owner), padding: "2px 6px", fontSize: "10px", fontWeight: 700, fontFamily: "'Space Grotesk', sans-serif", flexShrink: 0 }}>
        {task.owner.toUpperCase()}
      </span>
      {/* Category */}
      <span style={{ border: "2px solid #000", padding: "2px 6px", fontSize: "10px", fontWeight: 600, backgroundColor: "#fff", flexShrink: 0 }}>
        {task.category}
      </span>
      {/* Pushed to GitHub toggle */}
      <button
        data-testid={`button-pushed-done-${task.id}`}
        onClick={handleTogglePushed}
        style={{
          border: "2px solid #000",
          padding: "2px 6px",
          fontSize: "10px",
          fontWeight: 700,
          fontFamily: "'Space Grotesk', sans-serif",
          backgroundColor: task.pushedToGitHub ? "#00CC44" : "#FF0033",
          color: task.pushedToGitHub ? "#000" : "#fff",
          cursor: "pointer",
          flexShrink: 0,
        }}
      >
        {task.pushedToGitHub ? "PUSHED" : "UNPUSHED"}
      </button>
      {/* Completed time ago — far right */}
      <span style={{ fontSize: "11px", color: "#888", flexShrink: 0, marginLeft: "auto" }}>
        {completedTime}
      </span>
    </div>
  );
}
