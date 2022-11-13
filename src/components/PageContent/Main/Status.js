import { StyledStatus } from "../../styles/Status.styled";

export default function Status({ setStatus, darkMode }) {
  const handleStatusChange = (event) => {
    setStatus(event.target.value);
  };

  return (
    <StyledStatus darkMode={darkMode}>
      <button onClick={handleStatusChange} value={"All"}>
        All
      </button>
      <button onClick={handleStatusChange} value={"Active"}>
        Active
      </button>
      <button onClick={handleStatusChange} value={"Completed"}>
        Completed
      </button>
    </StyledStatus>
  );
}
