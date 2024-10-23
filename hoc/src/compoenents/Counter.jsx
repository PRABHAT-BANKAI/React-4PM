export const HOC = ({ Counter, color }) => {
  return (
    <div style={{ backgroundColor: `${color}`, height: "400px" }}>{Counter}</div>
  );
};

export default HOC;
