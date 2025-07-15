import Input from "./Input";

export default function UserInput({ onChangeInput, userInput }) {
  return (
    <section id="user-input">
      <div className="input-group">
        <Input
          id="initialInvestment"
          type="number"
          inputValue={userInput.initialInvestment}
          label="initial investment"
          onChange={(event) =>
            onChangeInput("initialInvestment", event.target.value)
          }
        />
        <Input
          id="annualInvestment"
          type="number"
          inputValue={userInput.annualInvestment}
          label="annual investment"
          onChange={(event) =>
            onChangeInput("annualInvestment", event.target.value)
          }
        />
      </div>
      <div className="input-group">
        <Input
          id="expectedInvestment"
          type="number"
          inputValue={userInput.expectedInvestment}
          label="expected return"
          onChange={(event) =>
            onChangeInput("expectedInvestment", event.target.value)
          }
        />
        <Input
          id="duration"
          type="number"
          inputValue={userInput.duration}
          label="duration"
          onChange={(event) => onChangeInput("duration", event.target.value)}
        />
      </div>
    </section>
  );
}
