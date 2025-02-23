import styled from "styled-components";

const NumberSelector = ({ setError, error, selectedNumber, setSelectedNumber }) => {
  const arrNumber = [1, 2, 3, 4, 5, 6];

  const numberSelectorHandler = (value) => {
    setSelectedNumber(value);
    setError("");
  };

  return (
    <NumberSelectorContainer>
      {error && <p className="error">{error}</p>}
      <div className="grid">
        {arrNumber.map((value) => (
          <Box
            key={value}
            isSelected={value === selectedNumber}
            onClick={() => numberSelectorHandler(value)}
          >
            {value}
          </Box>
        ))}
      </div>
      <p className="label">Select Number</p>
    </NumberSelectorContainer>
  );
};

export default NumberSelector;

const NumberSelectorContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  text-align: center;

  .grid {
    display: grid;
    grid-template-columns: repeat(3, 1fr);
    gap: 20px;
    justify-content: center;
  }

  .label {
    font-size: 18px;
    font-weight: 600;
    color: #555;
  }

  .error {
    color: red;
    font-size: 16px;
    margin-bottom: 8px;
  }
`;

const Box = styled.div`
  height: 64px;
  width: 64px;
  border: 2px solid #333;
  border-radius: 12px;
  display: flex;
  justify-content: center;
  align-items: center;
  font-size: 18px;
  font-weight: bold;
  cursor: pointer;
  background: ${(props) => (props.isSelected ? "linear-gradient(135deg, #acaaaa, #f8e4f7)" : "#ffffff")};
  color: ${(props) => (props.isSelected ? "white" : "#333")};
  box-shadow: ${(props) => (props.isSelected ? "0px 6px 12px rgba(0, 0, 0, 0.3)" : "0px 4px 8px rgba(0, 0, 0, 0.1)")};
  transition: all 0.3s ease;

  &:hover {
    transform: scale(1.1);
    box-shadow: 0px 8px 16px rgba(0, 0, 0, 0.2);
  }

  @media (max-width: 768px) {
    height: 50px;
    width: 50px;
    font-size: 16px;
  }

  @media (max-width: 480px) {
    height: 40px;
    width: 40px;
    font-size: 14px;
  }
`;
