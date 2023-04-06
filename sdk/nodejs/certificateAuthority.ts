// *** WARNING: this file was generated by the Pulumi Terraform Bridge (tfgen) Tool. ***
// *** Do not edit by hand unless you're certain you know what you are doing! ***

import * as pulumi from "@pulumi/pulumi";
import * as utilities from "./utilities";

/**
 * Certificate Authorities are x509 certificates that are used to sign other
 *  x509 certificates. Attach a Certificate Authority to the Mutual TLS module
 *  to verify that the TLS certificate presented by a client has been signed by
 *  this CA. Certificate Authorities  are used only for mTLS validation only and
 *  thus a private key is not included in the resource.
 *
 * ## Example Usage
 *
 * ```typescript
 * import * as pulumi from "@pulumi/pulumi";
 * import * as ngrok from "@pulumi/ngrok";
 *
 * const example = new ngrok.CertificateAuthority("example", {
 *     caPem: `-----BEGIN CERTIFICATE-----
 * MIIEETCCAvmgAwIBAgIUU3N6lNzPqar4400cLQMcVHFl+mEwDQYJKoZIhvcNAQEL
 * BQAwgZcxCzAJBgNVBAYTAkFVMQwwCgYDVQQIDANOU1cxDzANBgNVBAcMBlN5ZG5l
 * eTEZMBcGA1UECgwQRHJvcGJlYXIgUHR5IEx0ZDEkMCIGA1UEAwwbSW50cmFuZXQg
 * U2VydmljZXMgQXV0aG9yaXR5MSgwJgYJKoZIhvcNAQkBFhlzZWN1cml0eUBkcm9w
 * YmVhci5leGFtcGxlMB4XDTIwMDUwMTE2Mjc1OVoXDTIxMDUwMTE2Mjc1OVowgZcx
 * CzAJBgNVBAYTAkFVMQwwCgYDVQQIDANOU1cxDzANBgNVBAcMBlN5ZG5leTEZMBcG
 * A1UECgwQRHJvcGJlYXIgUHR5IEx0ZDEkMCIGA1UEAwwbSW50cmFuZXQgU2Vydmlj
 * ZXMgQXV0aG9yaXR5MSgwJgYJKoZIhvcNAQkBFhlzZWN1cml0eUBkcm9wYmVhci5l
 * eGFtcGxlMIIBIjANBgkqhkiG9w0BAQEFAAOCAQ8AMIIBCgKCAQEA7y/EAN0yZkA0
 * nRpMBfomnnS8KMWHb90kvGfhkCDR8WCQz5mX7eDEYDthRQrEgp63qtJ7IoCM5f0A
 * UD6J2m/mZecP7SfA8OuTAZ7UyRixpZh0zJQSgj24Sh1LQuYci0DNXrei+R1qBvd+
 * pmpZwkKygNrbZYe3oY1PZ3jEYPSAQzIObDF7LhdhLLrcfWa9BHOGMLnALNMY558b
 * voijTCEmRrSavdvrAS9LDRipEXT8EQOWZZT9VbPtgSBalvStdoupAptmPIWjXftf
 * Wi1kry+P0xVFZG9iZwUeAT6fSJ+gJD8M1UXWaQbocYrctESP0sZEFM3rzdWqrZb7
 * 3cH3K5OCvwIDAQABo1MwUTAdBgNVHQ4EFgQUsZdchgUimRHLiPRWw51+DGBmlfMw
 * HwYDVR0jBBgwFoAUsZdchgUimRHLiPRWw51+DGBmlfMwDwYDVR0TAQH/BAUwAwEB
 * /zANBgkqhkiG9w0BAQsFAAOCAQEANk25tt8sSfn6Qu1bbhWRbjKgS5z+j9LqyCna
 * v3fbSchMthaQR7w0vL69ayroeYdqDZkRMmHjuYKY4NyqyXkkaqVO63wEicCo55d9
 * pIKuPzc/7xwdRephosjGTQ4QaQ4OnrdpJZieI92m9ODexgsab84AYmwNpbGOI/tK
 * nPsQr8x1RfLs2gbBwQ4MYVM3tQQbX0o+yve5nz/NCOq4vdG+eKON5u6VYMkOOg9F
 * VyNY1iISQkpNk/AF6Vi9BGuDb5Hg0phEl1Q0ntCO7ZHAUHjy0ucqXZiXoXdXZcs3
 * 3zKKLUKva59EDBZ5TUucvXh8VemBtNc6hd1mX4Tq7lAreG9pjQ==
 * -----END CERTIFICATE-----`,
 *     description: "Internal Coprorates Services Authority",
 *     metadata: "{\"internal_id\": \"7d2caeee-cdc3-4b26-b2c2-b280b8287552\"}",
 * });
 * ```
 */
export class CertificateAuthority extends pulumi.CustomResource {
    /**
     * Get an existing CertificateAuthority resource's state with the given name, ID, and optional extra
     * properties used to qualify the lookup.
     *
     * @param name The _unique_ name of the resulting resource.
     * @param id The _unique_ provider ID of the resource to lookup.
     * @param state Any extra arguments used during the lookup.
     * @param opts Optional settings to control the behavior of the CustomResource.
     */
    public static get(name: string, id: pulumi.Input<pulumi.ID>, state?: CertificateAuthorityState, opts?: pulumi.CustomResourceOptions): CertificateAuthority {
        return new CertificateAuthority(name, <any>state, { ...opts, id: id });
    }

    /** @internal */
    public static readonly __pulumiType = 'ngrok:index/certificateAuthority:CertificateAuthority';

    /**
     * Returns true if the given object is an instance of CertificateAuthority.  This is designed to work even
     * when multiple copies of the Pulumi SDK have been loaded into the same process.
     */
    public static isInstance(obj: any): obj is CertificateAuthority {
        if (obj === undefined || obj === null) {
            return false;
        }
        return obj['__pulumiType'] === CertificateAuthority.__pulumiType;
    }

    /**
     * raw PEM of the Certificate Authority
     */
    public readonly caPem!: pulumi.Output<string>;
    /**
     * human-readable description of this Certificate Authority. optional, max 255 bytes.
     */
    public readonly description!: pulumi.Output<string | undefined>;
    /**
     * arbitrary user-defined machine-readable data of this Certificate Authority. optional, max 4096 bytes.
     */
    public readonly metadata!: pulumi.Output<string | undefined>;

    /**
     * Create a CertificateAuthority resource with the given unique name, arguments, and options.
     *
     * @param name The _unique_ name of the resource.
     * @param args The arguments to use to populate this resource's properties.
     * @param opts A bag of options that control this resource's behavior.
     */
    constructor(name: string, args: CertificateAuthorityArgs, opts?: pulumi.CustomResourceOptions)
    constructor(name: string, argsOrState?: CertificateAuthorityArgs | CertificateAuthorityState, opts?: pulumi.CustomResourceOptions) {
        let resourceInputs: pulumi.Inputs = {};
        opts = opts || {};
        if (opts.id) {
            const state = argsOrState as CertificateAuthorityState | undefined;
            resourceInputs["caPem"] = state ? state.caPem : undefined;
            resourceInputs["description"] = state ? state.description : undefined;
            resourceInputs["metadata"] = state ? state.metadata : undefined;
        } else {
            const args = argsOrState as CertificateAuthorityArgs | undefined;
            if ((!args || args.caPem === undefined) && !opts.urn) {
                throw new Error("Missing required property 'caPem'");
            }
            resourceInputs["caPem"] = args ? args.caPem : undefined;
            resourceInputs["description"] = args ? args.description : undefined;
            resourceInputs["metadata"] = args ? args.metadata : undefined;
        }
        opts = pulumi.mergeOptions(utilities.resourceOptsDefaults(), opts);
        super(CertificateAuthority.__pulumiType, name, resourceInputs, opts);
    }
}

/**
 * Input properties used for looking up and filtering CertificateAuthority resources.
 */
export interface CertificateAuthorityState {
    /**
     * raw PEM of the Certificate Authority
     */
    caPem?: pulumi.Input<string>;
    /**
     * human-readable description of this Certificate Authority. optional, max 255 bytes.
     */
    description?: pulumi.Input<string>;
    /**
     * arbitrary user-defined machine-readable data of this Certificate Authority. optional, max 4096 bytes.
     */
    metadata?: pulumi.Input<string>;
}

/**
 * The set of arguments for constructing a CertificateAuthority resource.
 */
export interface CertificateAuthorityArgs {
    /**
     * raw PEM of the Certificate Authority
     */
    caPem: pulumi.Input<string>;
    /**
     * human-readable description of this Certificate Authority. optional, max 255 bytes.
     */
    description?: pulumi.Input<string>;
    /**
     * arbitrary user-defined machine-readable data of this Certificate Authority. optional, max 4096 bytes.
     */
    metadata?: pulumi.Input<string>;
}
