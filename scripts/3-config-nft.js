import sdk from "./1-initialize-sdk.js";
import { readFileSync } from "fs";

const bundleDrop = sdk.getBundleDropModule(
  "0xEf4Cd14188f4D09E2416f7AdaA42d58262f561eF",
);

(async () => {
  try {
    await bundleDrop.createBatch([
      {
        name: "nopacity Badge",
        description: "This badge signifies you are a member of nopacity, and pledge to uphold and act upon nopacity's values.",
        image: readFileSync("scripts/assets/nopacity logo.jpg"),
      },
    ]);
    console.log("✅ Successfully created a new NFT in the drop!");
  } catch (error) {
    console.error("failed to create the new NFT", error);
  }
})()