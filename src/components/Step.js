import styled from "styled-components";

const Step = ({ step }) => {
  if (step === 1)
    return (
      <StepContainer>
        <ActiveStep>1</ActiveStep>
        <InActiveStep>2</InActiveStep>
        <InActiveStep>3</InActiveStep>
      </StepContainer>
    );
  if (step === 2)
    return (
      <StepContainer>
        <InActiveStep>1</InActiveStep>
        <ActiveStep>2</ActiveStep>
        <InActiveStep>3</InActiveStep>
      </StepContainer>
    );
  if (step === 3)
    return (
      <StepContainer>
        <InActiveStep>1</InActiveStep>
        <InActiveStep>2</InActiveStep>
        <ActiveStep>3</ActiveStep>
      </StepContainer>
    );
};

const StepContainer = styled.div`
  display: flex;
  justify-content: center;
  margin-top: 50px;
`;

const ActiveStep = styled.div`
  width: 50px;
  height: 50px;
  border-radius: 25px;
  margin: 10px;
  background-color: rgb(200, 153, 117);
  color: white;
  display: flex;
  justify-content: center;
  align-items: center;
  font-size: 1rem;
  font-weight: 600;
`;

const InActiveStep = styled.div`
  width: 50px;
  height: 50px;
  border-radius: 25px;
  margin: 10px;
  background-color: rgb(243, 243, 243);
  color: rgb(200, 166, 117);
  display: flex;
  justify-content: center;
  align-items: center;
  font-size: 1rem;
  font-weight: 600;
`;

export default Step;
