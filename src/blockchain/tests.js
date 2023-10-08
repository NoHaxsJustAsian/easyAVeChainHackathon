const truffleAssert = require('truffle-assertions');
const HealthContract = artifacts.require("HealthContract");
const VETToken = artifacts.require("VETToken");

contract("HealthContract", (accounts) => {
    let healthContract;
    let vetToken;

    before(async () => {
        vetToken = await VETToken.new();
        healthContract = await HealthContract.new(accounts[0], accounts[1], vetToken.address);
    });

    it("should deploy the HealthContract", async () => {
        assert(healthContract.address !== "");
    });

    it("should have correct client, provider, and vetTokenAddress", async () => {
        assert.equal(await healthContract.client(), accounts[0]);
        assert.equal(await healthContract.provider(), accounts[1]);
        assert.equal(await healthContract.vetTokenAddress(), vetToken.address);
    });

    it("should allow only client to return health NFT", async () => {
        await truffleAssert.reverts(
            healthContract.returnHealthNFT(1200, 65, { from: accounts[2] }),
            "Only the client can call this function."
        );
        
        const nftAddress = await healthContract.returnHealthNFT(1200, 65, { from: accounts[0] });
        assert(nftAddress !== "0x0000000000000000000000000000000000000000", "Invalid NFT address returned");
    });

    it("should transfer tokens when health requirements are met", async () => {
        // Setup: send some VETTokens to the HealthContract
        await vetToken.transfer(healthContract.address, 2000, { from: accounts[0] });

        await healthContract.returnHealthNFT(1200, 65, { from: accounts[0] });
        await healthContract.transferTokens({ from: accounts[0] });
        
        const providerBalance = await vetToken.balanceOf(accounts[1]);
        assert.equal(providerBalance.toNumber(), 100, "Tokens were not transferred to provider");
    });

    it("should determine if token transfer is possible based on health stats", async () => {
        await healthContract.returnHealthNFT(1200, 65, { from: accounts[0] });
        const canTransfer1 = await healthContract.ifTokenTransfer();
        assert(canTransfer1, "Should be able to transfer with sufficient health stats");

        await healthContract.returnHealthNFT(900, 55, { from: accounts[0] });
        const canTransfer2 = await healthContract.ifTokenTransfer();
        assert(!canTransfer2, "Shouldn't be able to transfer with insufficient health stats");
    });

    // Add any additional tests or scenarios you want to cover...

});
