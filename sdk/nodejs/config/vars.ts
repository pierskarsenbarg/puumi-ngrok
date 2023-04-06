// *** WARNING: this file was generated by the Pulumi Terraform Bridge (tfgen) Tool. ***
// *** Do not edit by hand unless you're certain you know what you are doing! ***

import * as pulumi from "@pulumi/pulumi";
import * as utilities from "../utilities";

declare var exports: any;
const __config = new pulumi.Config("ngrok");

/**
 * base URL for the ngrok API. only overridden for ngrok's internal testing purposes.
 */
export declare const apiBaseUrl: string | undefined;
Object.defineProperty(exports, "apiBaseUrl", {
    get() {
        return __config.get("apiBaseUrl");
    },
    enumerable: true,
});

/**
 * ngrok API key used for authenticating to the API
 */
export declare const apiKey: string | undefined;
Object.defineProperty(exports, "apiKey", {
    get() {
        return __config.get("apiKey");
    },
    enumerable: true,
});

