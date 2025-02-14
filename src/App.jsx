import { useState } from "react";
import TicketSelection from "./components/TicketSelection";
import FormInput from "./components/FormInput";
import TicketConfirmation from "./components/TicketConfirmation";
import Header from "./components/Header";

function App() {
  const [step, setStep] = useState(1);
  const [formData, setFormData] = useState({
    fullName: "",
    email: "",
    avatar: "",
  });

  const nextStep = () => setStep(step + 1);
  const prevStep = () => setStep(step - 1);
  const resetForm = () => {
    setFormData({ fullName: "", email: "", avatar: "" });
    setStep(1);
  };

  // Define the onSubmit function
  const handleSubmit = (data) => {


    // Update the formData state with the submitted data
    setFormData((prevData) => ({
      ...prevData,
      fullName: data.fullName,
      email: data.email,
      avatar: data.avatarUrl, // Assuming avatarUrl is returned from FormInput
    }));

    // Move to the next step (step 3: TicketConfirmation)
    nextStep();
  };

  return (
    <div className="min-h-screen min-w-full flex flex-col items-center justify-center">
      <Header />
      <div className="bg-custom-gradient border-[#0E464F] border rounded-3xl shadow-lg max-w-2xl w-full mt-16">
        <div className="flex justify-center items-center mb-4">
          {step === 1 && <TicketSelection nextStep={nextStep} />}
          {step === 2 && (
            <FormInput
              prevStep={prevStep}
              onSubmit={handleSubmit} // Pass the onSubmit function
              formData={formData}
              setFormData={setFormData}
            />
          )}
          {step === 3 && (
            <TicketConfirmation
              formData={formData}
              prevStep={prevStep}
              onReset={resetForm}
            />
          )}
        </div>
      </div>
    </div>
  );
}

export default App;