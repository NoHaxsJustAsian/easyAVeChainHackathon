import { Container } from "react-bootstrap";
import individual from "./individual.png";
import safety from "./safety-icon.png";
import healthy from "./healthy.png";
import lock from "./lock.png";

function WhyVeHealth() {
    return (
        <Container>
            <div className="flex flex-wrap justify-between">
            <div style={{ maxWidth: "20%" }} className="block rounded-xl border border-gray-800 bg-gray-800 p-8 shadow-xl no-underline hover:-translate-y-1 hover:scale-110 duration-150">
                <div className="individual">
                  <img src={individual} width="37" />
                </div>

                <h3 className="mt-3 text-xl font-bold text-white">Individualized</h3>

                <p className="mt-4 text-sm text-gray-300">
                    Personalized data for a personalized plan.
                </p>
            </div>
            <div style={{ maxWidth: "20%" }} className="block rounded-xl border border-gray-800 bg-gray-800 p-8 shadow-xl no-underline hover:-translate-y-1 hover:scale-110 duration-150">
                <div className="safety">
                  <img src={safety} width="37" />
                </div>

                <h3 className="mt-3 text-xl font-bold text-white">Data Verification</h3>

                <p className="mt-4 text-sm text-gray-300">
                    Data is verified to ensure that your healthdata is properly being evaluated.
                </p>
            </div>
            <div style={{ maxWidth: "20%" }} className="block rounded-xl border border-gray-800 bg-gray-800 p-8 shadow-xl no-underline hover:-translate-y-1 hover:scale-110 duration-150">
                <div className="healthy">
                  <img src={healthy} width="41" />
                </div>

                <h3 className="mt-3 text-xl font-bold text-white">Live Healthy!</h3>

                <p className="mt-4 text-sm text-gray-300">
                    Discover all the benefits of living a more active lifestyle.
                </p>
            </div>
            <div style={{ maxWidth: "20%" }} className="block rounded-xl border border-gray-800 bg-gray-800 p-8 shadow-xl no-underline hover:-translate-y-1 hover:scale-110 duration-150">
                <div className="lock">
                  <img src={lock} width="41" />
                </div>

                <h3 className="mt-3 text-xl font-bold text-white">Security First</h3>

                <p className="mt-4 text-sm text-gray-300">
                    Your data is secure on the blockchain, and never sold.
                </p>
            </div>
            </div>

        </Container>
    );
}

export default WhyVeHealth;
