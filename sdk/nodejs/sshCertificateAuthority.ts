// *** WARNING: this file was generated by the Pulumi Terraform Bridge (tfgen) Tool. ***
// *** Do not edit by hand unless you're certain you know what you are doing! ***

import * as pulumi from "@pulumi/pulumi";
import * as utilities from "./utilities";

/**
 * An SSH Certificate Authority is a pair of an SSH Certificate and its private
 *  key that can be used to sign other SSH host and user certificates.
 *
 * ## Example Usage
 *
 * ```typescript
 * import * as pulumi from "@pulumi/pulumi";
 * import * as ngrok from "@pulumi/ngrok";
 *
 * const example = new ngrok.SshCertificateAuthority("example", {
 *     description: "Staging Environment Hosts",
 *     privateKeyType: "ed25519",
 * });
 * ```
 */
export class SshCertificateAuthority extends pulumi.CustomResource {
    /**
     * Get an existing SshCertificateAuthority resource's state with the given name, ID, and optional extra
     * properties used to qualify the lookup.
     *
     * @param name The _unique_ name of the resulting resource.
     * @param id The _unique_ provider ID of the resource to lookup.
     * @param state Any extra arguments used during the lookup.
     * @param opts Optional settings to control the behavior of the CustomResource.
     */
    public static get(name: string, id: pulumi.Input<pulumi.ID>, state?: SshCertificateAuthorityState, opts?: pulumi.CustomResourceOptions): SshCertificateAuthority {
        return new SshCertificateAuthority(name, <any>state, { ...opts, id: id });
    }

    /** @internal */
    public static readonly __pulumiType = 'ngrok:index/sshCertificateAuthority:SshCertificateAuthority';

    /**
     * Returns true if the given object is an instance of SshCertificateAuthority.  This is designed to work even
     * when multiple copies of the Pulumi SDK have been loaded into the same process.
     */
    public static isInstance(obj: any): obj is SshCertificateAuthority {
        if (obj === undefined || obj === null) {
            return false;
        }
        return obj['__pulumiType'] === SshCertificateAuthority.__pulumiType;
    }

    /**
     * human-readable description of this SSH Certificate Authority. optional, max 255 bytes.
     */
    public readonly description!: pulumi.Output<string | undefined>;
    /**
     * the type of elliptic curve to use when creating an ECDSA key
     */
    public readonly ellipticCurve!: pulumi.Output<string | undefined>;
    /**
     * the key size to use when creating an RSA key. one of `2048` or `4096`
     */
    public readonly keySize!: pulumi.Output<number | undefined>;
    /**
     * the type of private key for this SSH Certificate Authority
     */
    public readonly keyType!: pulumi.Output<string>;
    /**
     * arbitrary user-defined machine-readable data of this SSH Certificate Authority. optional, max 4096 bytes.
     */
    public readonly metadata!: pulumi.Output<string | undefined>;
    /**
     * the type of private key to generate. one of `rsa`, `ecdsa`, `ed25519`
     */
    public readonly privateKeyType!: pulumi.Output<string | undefined>;
    /**
     * raw public key for this SSH Certificate Authority
     */
    public readonly publicKey!: pulumi.Output<string>;

    /**
     * Create a SshCertificateAuthority resource with the given unique name, arguments, and options.
     *
     * @param name The _unique_ name of the resource.
     * @param args The arguments to use to populate this resource's properties.
     * @param opts A bag of options that control this resource's behavior.
     */
    constructor(name: string, args?: SshCertificateAuthorityArgs, opts?: pulumi.CustomResourceOptions)
    constructor(name: string, argsOrState?: SshCertificateAuthorityArgs | SshCertificateAuthorityState, opts?: pulumi.CustomResourceOptions) {
        let resourceInputs: pulumi.Inputs = {};
        opts = opts || {};
        if (opts.id) {
            const state = argsOrState as SshCertificateAuthorityState | undefined;
            resourceInputs["description"] = state ? state.description : undefined;
            resourceInputs["ellipticCurve"] = state ? state.ellipticCurve : undefined;
            resourceInputs["keySize"] = state ? state.keySize : undefined;
            resourceInputs["keyType"] = state ? state.keyType : undefined;
            resourceInputs["metadata"] = state ? state.metadata : undefined;
            resourceInputs["privateKeyType"] = state ? state.privateKeyType : undefined;
            resourceInputs["publicKey"] = state ? state.publicKey : undefined;
        } else {
            const args = argsOrState as SshCertificateAuthorityArgs | undefined;
            resourceInputs["description"] = args ? args.description : undefined;
            resourceInputs["ellipticCurve"] = args ? args.ellipticCurve : undefined;
            resourceInputs["keySize"] = args ? args.keySize : undefined;
            resourceInputs["keyType"] = args ? args.keyType : undefined;
            resourceInputs["metadata"] = args ? args.metadata : undefined;
            resourceInputs["privateKeyType"] = args ? args.privateKeyType : undefined;
            resourceInputs["publicKey"] = args ? args.publicKey : undefined;
        }
        opts = pulumi.mergeOptions(utilities.resourceOptsDefaults(), opts);
        super(SshCertificateAuthority.__pulumiType, name, resourceInputs, opts);
    }
}

/**
 * Input properties used for looking up and filtering SshCertificateAuthority resources.
 */
export interface SshCertificateAuthorityState {
    /**
     * human-readable description of this SSH Certificate Authority. optional, max 255 bytes.
     */
    description?: pulumi.Input<string>;
    /**
     * the type of elliptic curve to use when creating an ECDSA key
     */
    ellipticCurve?: pulumi.Input<string>;
    /**
     * the key size to use when creating an RSA key. one of `2048` or `4096`
     */
    keySize?: pulumi.Input<number>;
    /**
     * the type of private key for this SSH Certificate Authority
     */
    keyType?: pulumi.Input<string>;
    /**
     * arbitrary user-defined machine-readable data of this SSH Certificate Authority. optional, max 4096 bytes.
     */
    metadata?: pulumi.Input<string>;
    /**
     * the type of private key to generate. one of `rsa`, `ecdsa`, `ed25519`
     */
    privateKeyType?: pulumi.Input<string>;
    /**
     * raw public key for this SSH Certificate Authority
     */
    publicKey?: pulumi.Input<string>;
}

/**
 * The set of arguments for constructing a SshCertificateAuthority resource.
 */
export interface SshCertificateAuthorityArgs {
    /**
     * human-readable description of this SSH Certificate Authority. optional, max 255 bytes.
     */
    description?: pulumi.Input<string>;
    /**
     * the type of elliptic curve to use when creating an ECDSA key
     */
    ellipticCurve?: pulumi.Input<string>;
    /**
     * the key size to use when creating an RSA key. one of `2048` or `4096`
     */
    keySize?: pulumi.Input<number>;
    /**
     * the type of private key for this SSH Certificate Authority
     */
    keyType?: pulumi.Input<string>;
    /**
     * arbitrary user-defined machine-readable data of this SSH Certificate Authority. optional, max 4096 bytes.
     */
    metadata?: pulumi.Input<string>;
    /**
     * the type of private key to generate. one of `rsa`, `ecdsa`, `ed25519`
     */
    privateKeyType?: pulumi.Input<string>;
    /**
     * raw public key for this SSH Certificate Authority
     */
    publicKey?: pulumi.Input<string>;
}
