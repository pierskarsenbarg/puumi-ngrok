// *** WARNING: this file was generated by the Pulumi Terraform Bridge (tfgen) Tool. ***
// *** Do not edit by hand unless you're certain you know what you are doing! ***

import * as pulumi from "@pulumi/pulumi";
import * as inputs from "./types/input";
import * as outputs from "./types/output";
import * as utilities from "./utilities";

export class EventSubscription extends pulumi.CustomResource {
    /**
     * Get an existing EventSubscription resource's state with the given name, ID, and optional extra
     * properties used to qualify the lookup.
     *
     * @param name The _unique_ name of the resulting resource.
     * @param id The _unique_ provider ID of the resource to lookup.
     * @param state Any extra arguments used during the lookup.
     * @param opts Optional settings to control the behavior of the CustomResource.
     */
    public static get(name: string, id: pulumi.Input<pulumi.ID>, state?: EventSubscriptionState, opts?: pulumi.CustomResourceOptions): EventSubscription {
        return new EventSubscription(name, <any>state, { ...opts, id: id });
    }

    /** @internal */
    public static readonly __pulumiType = 'ngrok:index/eventSubscription:EventSubscription';

    /**
     * Returns true if the given object is an instance of EventSubscription.  This is designed to work even
     * when multiple copies of the Pulumi SDK have been loaded into the same process.
     */
    public static isInstance(obj: any): obj is EventSubscription {
        if (obj === undefined || obj === null) {
            return false;
        }
        return obj['__pulumiType'] === EventSubscription.__pulumiType;
    }

    /**
     * Arbitrary customer supplied information intended to be human readable. Optional, max 255 chars.
     */
    public readonly description!: pulumi.Output<string | undefined>;
    /**
     * A list of Event Destination IDs which should be used for this Event Subscription.
     */
    public readonly destinationIds!: pulumi.Output<string[] | undefined>;
    /**
     * Arbitrary customer supplied information intended to be machine readable. Optional, max 4096 chars.
     */
    public readonly metadata!: pulumi.Output<string | undefined>;
    /**
     * Sources containing the types for which this event subscription will trigger
     */
    public readonly sources!: pulumi.Output<outputs.EventSubscriptionSource[] | undefined>;

    /**
     * Create a EventSubscription resource with the given unique name, arguments, and options.
     *
     * @param name The _unique_ name of the resource.
     * @param args The arguments to use to populate this resource's properties.
     * @param opts A bag of options that control this resource's behavior.
     */
    constructor(name: string, args?: EventSubscriptionArgs, opts?: pulumi.CustomResourceOptions)
    constructor(name: string, argsOrState?: EventSubscriptionArgs | EventSubscriptionState, opts?: pulumi.CustomResourceOptions) {
        let resourceInputs: pulumi.Inputs = {};
        opts = opts || {};
        if (opts.id) {
            const state = argsOrState as EventSubscriptionState | undefined;
            resourceInputs["description"] = state ? state.description : undefined;
            resourceInputs["destinationIds"] = state ? state.destinationIds : undefined;
            resourceInputs["metadata"] = state ? state.metadata : undefined;
            resourceInputs["sources"] = state ? state.sources : undefined;
        } else {
            const args = argsOrState as EventSubscriptionArgs | undefined;
            resourceInputs["description"] = args ? args.description : undefined;
            resourceInputs["destinationIds"] = args ? args.destinationIds : undefined;
            resourceInputs["metadata"] = args ? args.metadata : undefined;
            resourceInputs["sources"] = args ? args.sources : undefined;
        }
        opts = pulumi.mergeOptions(utilities.resourceOptsDefaults(), opts);
        super(EventSubscription.__pulumiType, name, resourceInputs, opts);
    }
}

/**
 * Input properties used for looking up and filtering EventSubscription resources.
 */
export interface EventSubscriptionState {
    /**
     * Arbitrary customer supplied information intended to be human readable. Optional, max 255 chars.
     */
    description?: pulumi.Input<string>;
    /**
     * A list of Event Destination IDs which should be used for this Event Subscription.
     */
    destinationIds?: pulumi.Input<pulumi.Input<string>[]>;
    /**
     * Arbitrary customer supplied information intended to be machine readable. Optional, max 4096 chars.
     */
    metadata?: pulumi.Input<string>;
    /**
     * Sources containing the types for which this event subscription will trigger
     */
    sources?: pulumi.Input<pulumi.Input<inputs.EventSubscriptionSource>[]>;
}

/**
 * The set of arguments for constructing a EventSubscription resource.
 */
export interface EventSubscriptionArgs {
    /**
     * Arbitrary customer supplied information intended to be human readable. Optional, max 255 chars.
     */
    description?: pulumi.Input<string>;
    /**
     * A list of Event Destination IDs which should be used for this Event Subscription.
     */
    destinationIds?: pulumi.Input<pulumi.Input<string>[]>;
    /**
     * Arbitrary customer supplied information intended to be machine readable. Optional, max 4096 chars.
     */
    metadata?: pulumi.Input<string>;
    /**
     * Sources containing the types for which this event subscription will trigger
     */
    sources?: pulumi.Input<pulumi.Input<inputs.EventSubscriptionSource>[]>;
}
