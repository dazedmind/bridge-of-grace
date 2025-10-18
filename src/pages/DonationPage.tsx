import { useState } from "react";

export const DonationPage = () => {
  const [selectedButton, setSelectedButton] = useState("₱ 100");
  const [customAmount, setCustomAmount] = useState(0);
  const [isOrganization, setIsOrganization] = useState(false);

  const handleButtonClick = (button: string) => {
    // toggle off if same button clicked
    if (selectedButton === button) {
      setSelectedButton("");
    } else {
      setSelectedButton(button);
      console.log("Selected button: ", button);
    }
  };

  const handleCustomAmount = () => {
    console.log("Custom amount clicked!")
    setSelectedButton("Custom");
  };

  const handleCustomAmountChange = (amount: number) => {
    setCustomAmount(amount);
    console.log("Custom amount: ", amount);
  }

  const donationOptions = ["₱ 100", "₱ 500", "₱ 1000"];

  return (
    <div>
      <div className="w-dvw md:h-[200px] flex flex-col items-center px-8 md:px-30 gap-4 justify-center bridge-header">
        <h1 className="font-bold text-4xl md:text-6xl text-primary-foreground">
          BE THE BRIDGE
        </h1>
      </div>

      <main className="m-2 md:m-8 px-8 md:px-30 py-12">
        <h1 className="font-bold text-2xl md:text-4xl text-foreground">
          Thank you for choosing to be a part of our journey
        </h1>
        <p className="text-lg leading-relaxed text-muted-foreground">
          Your donation will help us continue our work and make a difference in the lives of children
        </p>

        <div className="mt-4 space-y-2">
          <p>Select donation amount:</p>
          <span className="flex items-center gap-2 flex-wrap">
            {donationOptions.map((amount) => (
              <button
                key={amount}
                onClick={() => handleButtonClick(amount)}
                className={`border text-xl px-4 py-2 rounded-md cursor-pointer transition-all
                  ${
                    selectedButton === amount
                      ? "bg-teal-500/5 text-teal-600 border-teal-500"
                      : "text-primary border-secondary-foreground hover:bg-muted"
                  }`}
              >
                {amount}
              </button>
            ))}
            <span className="relative">
                <input
                min={0}
                type="number"
                placeholder="Enter amount"
                onClick={() => handleCustomAmount()}
                onChange={(e) => handleCustomAmountChange(Number(e.target.value))}
                className={`w-48 border text-xl pl-8 border-secondary-foreground rounded-md p-2 outline-none ${selectedButton === "Custom" ? "bg-teal-500/5 text-teal-600 border-teal-500" : "text-primary border-secondary-foreground hover:bg-muted"}`}
                />
                <p className={`text-xl absolute top-1/2 ${selectedButton === "Custom" ? "text-teal" : "text-primary"} left-3 -translate-y-1/2`}>₱</p>
            </span>
          </span>
        </div>

        <section className="py-12 w-auto md:w-xl space-y-4">
            <h1 className="font-bold text-xl md:text-2xl text-foreground">{isOrganization ? "Your Organization Information" : "Your Information"}</h1>
            <span className="flex flex-col md:flex-row gap-4">
                {isOrganization ? (
                    <input type="text" placeholder="Organization Name" className="border border-secondary-foreground rounded-md p-2 outline-none w-full" />
                ) : (
                    <>
                        <input type="text" placeholder="First name" className="border border-secondary-foreground rounded-md p-2 outline-none w-full" />
                        <input type="text" placeholder="Last name" className="border border-secondary-foreground rounded-md p-2 outline-none w-full" />
                    </>
                )}
            </span>
            <span className="flex flex-col gap-4">
                <input type="email" placeholder="Email" className="border border-secondary-foreground rounded-md p-2 outline-none" />
                <textarea placeholder="Message" rows={4} className="border border-secondary-foreground rounded-md p-2 outline-none" />
            </span>
            
            <div className="flex flex-col gap-4">
                <span className="flex items-center">
                    <input type="checkbox" id="terms" className="mr-2 " onChange={() => setIsOrganization(!isOrganization)} />
                    <label htmlFor="terms">I would like to donate as <a href="/terms" className="text-teal hover:text-teal-600 transition-colors">organization</a></label>
                </span>
                <button className="bg-teal-600 text-primary-foreground text-xl px-4 py-3 font-medium rounded-md cursor-pointer hover:bg-teal-700 transition-all">
                Proceed to Payment
                </button>
            </div>
        </section>
      </main>


    </div>
  );
};
