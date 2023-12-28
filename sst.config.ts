import { SSTConfig } from "sst";
import { StorageStack } from "./stacks/StorageStack";
import { ApiStack } from "./stacks/ApiStack";
import { AuthStack } from "./stacks/AuthStack";

export default {
    config(_input) {
        return {
            name: "notes",
            region: "eu-west-3", // Paris
        };
    },
    stacks(app) {
        app.stack(StorageStack).stack(ApiStack).stack(AuthStack);
    },
} satisfies SSTConfig;
