import { rimraf } from "rimraf";
rimraf("node_modules")
  .then((res) => {
    console.log("node_modules folder deleted successfully!");
  })
  .catch((e) => {
    console.error(e);
  });
