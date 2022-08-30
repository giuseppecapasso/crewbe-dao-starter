import sdk from "./1-initialize-sdk.js";
import { readFileSync } from "fs";

const editionDrop = sdk.getEditionDrop("0x9B0fcabea502AAF2987CB170C52B4eFAfED1C868");

(async () => {
  try {
    await editionDrop.createBatch([
      {
        name: "Key Access Crewbe",
        description: "This NFT will give you access to CrewbeDAO!",
        image: readFileSync("scripts/assets/key.png"),
      },
    ]);
    console.log("✅ Successfully created a new NFT in the drop!");
  } catch (error) {
    console.error("failed to create the new NFT", error);
  }
})();