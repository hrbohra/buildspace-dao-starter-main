import sdk from "./1-initialize-sdk.js";
import { readFileSync } from "fs";

const editionDrop = sdk.getEditionDrop("0xcdE46Aa40e072Ccf065d6657b4817028fBAb043a");

(async () => {
  try {
    await editionDrop.createBatch([
      {
        name: "Motivation Quote",
        description: "This NFT will give you access to HealthDAO!",
        image: readFileSync("scripts/assets/2.jpg"),
      },
    ]);
    console.log("✅ Successfully created a new NFT in the drop!");
  } catch (error) {
    console.error("failed to create the new NFT", error);
  }
})();