const fs = require("fs");
const hre = require("hardhat");

async function main() {
  const GuardianNet = await hre.ethers.getContractFactory("GuardianNet");
  const guardianNet = await GuardianNet.deploy();
  await guardianNet.waitForDeployment();

  console.log("GuardianNet deployed to:", await guardianNet.getAddress());

  // Save contract data (address + ABI)
  const contractData = {
    address: guardianNet.address,
    abi: guardianNet.interface.format("json"),
  };

  fs.writeFileSync(
    "./frontend/src/contracts/GuardianNet.json",
    JSON.stringify(contractData, null, 2)
  );
}

main()
  .then(() => process.exit(0))
  .catch((error) => {
    console.error(error);
    process.exit(1);
  });
