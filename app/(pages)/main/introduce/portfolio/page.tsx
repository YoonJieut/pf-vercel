const PortfolioPage: React.FC<{ value: number }> = (props) => {
  return (
    <>
      {props.value === 1 && <div>test1</div>}
      {props.value === 2 && <div>test2</div>}
      {props.value === 3 && <div>test3</div>}
    </>
  );
};
export default PortfolioPage;
