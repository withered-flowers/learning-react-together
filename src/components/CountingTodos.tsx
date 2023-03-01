import { useState } from "react";

interface Props {
  todoLength: number;
}

const CountingTodos = ({ todoLength }: Props) => {
  const [showAmount, setShowAmount] = useState<boolean>(false);

  const btnOnClick = () => {
    setShowAmount(!showAmount);
  };

  return (
    <>
      <section>
        {showAmount && (
          <p>
            Current todos amount is:{" "}
            <span className="font-bold">{todoLength}</span>
          </p>
        )}

        <button
          className="bg-gray-200 hover:bg-gray-400 rounded py-2 px-4"
          onClick={btnOnClick}
        >
          Show Amount
        </button>
      </section>
    </>
  );
};

export default CountingTodos;
