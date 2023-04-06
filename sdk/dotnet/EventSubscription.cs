// *** WARNING: this file was generated by the Pulumi Terraform Bridge (tfgen) Tool. ***
// *** Do not edit by hand unless you're certain you know what you are doing! ***

using System;
using System.Collections.Generic;
using System.Collections.Immutable;
using System.Threading.Tasks;
using Pulumi.Serialization;
using Pulumi;

namespace PiersKarsenbarg.Ngrok
{
    [NgrokResourceType("ngrok:index/eventSubscription:EventSubscription")]
    public partial class EventSubscription : global::Pulumi.CustomResource
    {
        /// <summary>
        /// Arbitrary customer supplied information intended to be human readable. Optional, max 255 chars.
        /// </summary>
        [Output("description")]
        public Output<string?> Description { get; private set; } = null!;

        /// <summary>
        /// A list of Event Destination IDs which should be used for this Event Subscription.
        /// </summary>
        [Output("destinationIds")]
        public Output<ImmutableArray<string>> DestinationIds { get; private set; } = null!;

        /// <summary>
        /// Arbitrary customer supplied information intended to be machine readable. Optional, max 4096 chars.
        /// </summary>
        [Output("metadata")]
        public Output<string?> Metadata { get; private set; } = null!;

        /// <summary>
        /// Sources containing the types for which this event subscription will trigger
        /// </summary>
        [Output("sources")]
        public Output<ImmutableArray<Outputs.EventSubscriptionSource>> Sources { get; private set; } = null!;


        /// <summary>
        /// Create a EventSubscription resource with the given unique name, arguments, and options.
        /// </summary>
        ///
        /// <param name="name">The unique name of the resource</param>
        /// <param name="args">The arguments used to populate this resource's properties</param>
        /// <param name="options">A bag of options that control this resource's behavior</param>
        public EventSubscription(string name, EventSubscriptionArgs? args = null, CustomResourceOptions? options = null)
            : base("ngrok:index/eventSubscription:EventSubscription", name, args ?? new EventSubscriptionArgs(), MakeResourceOptions(options, ""))
        {
        }

        private EventSubscription(string name, Input<string> id, EventSubscriptionState? state = null, CustomResourceOptions? options = null)
            : base("ngrok:index/eventSubscription:EventSubscription", name, state, MakeResourceOptions(options, id))
        {
        }

        private static CustomResourceOptions MakeResourceOptions(CustomResourceOptions? options, Input<string>? id)
        {
            var defaultOptions = new CustomResourceOptions
            {
                Version = Utilities.Version,
            };
            var merged = CustomResourceOptions.Merge(defaultOptions, options);
            // Override the ID if one was specified for consistency with other language SDKs.
            merged.Id = id ?? merged.Id;
            return merged;
        }
        /// <summary>
        /// Get an existing EventSubscription resource's state with the given name, ID, and optional extra
        /// properties used to qualify the lookup.
        /// </summary>
        ///
        /// <param name="name">The unique name of the resulting resource.</param>
        /// <param name="id">The unique provider ID of the resource to lookup.</param>
        /// <param name="state">Any extra arguments used during the lookup.</param>
        /// <param name="options">A bag of options that control this resource's behavior</param>
        public static EventSubscription Get(string name, Input<string> id, EventSubscriptionState? state = null, CustomResourceOptions? options = null)
        {
            return new EventSubscription(name, id, state, options);
        }
    }

    public sealed class EventSubscriptionArgs : global::Pulumi.ResourceArgs
    {
        /// <summary>
        /// Arbitrary customer supplied information intended to be human readable. Optional, max 255 chars.
        /// </summary>
        [Input("description")]
        public Input<string>? Description { get; set; }

        [Input("destinationIds")]
        private InputList<string>? _destinationIds;

        /// <summary>
        /// A list of Event Destination IDs which should be used for this Event Subscription.
        /// </summary>
        public InputList<string> DestinationIds
        {
            get => _destinationIds ?? (_destinationIds = new InputList<string>());
            set => _destinationIds = value;
        }

        /// <summary>
        /// Arbitrary customer supplied information intended to be machine readable. Optional, max 4096 chars.
        /// </summary>
        [Input("metadata")]
        public Input<string>? Metadata { get; set; }

        [Input("sources")]
        private InputList<Inputs.EventSubscriptionSourceArgs>? _sources;

        /// <summary>
        /// Sources containing the types for which this event subscription will trigger
        /// </summary>
        public InputList<Inputs.EventSubscriptionSourceArgs> Sources
        {
            get => _sources ?? (_sources = new InputList<Inputs.EventSubscriptionSourceArgs>());
            set => _sources = value;
        }

        public EventSubscriptionArgs()
        {
        }
        public static new EventSubscriptionArgs Empty => new EventSubscriptionArgs();
    }

    public sealed class EventSubscriptionState : global::Pulumi.ResourceArgs
    {
        /// <summary>
        /// Arbitrary customer supplied information intended to be human readable. Optional, max 255 chars.
        /// </summary>
        [Input("description")]
        public Input<string>? Description { get; set; }

        [Input("destinationIds")]
        private InputList<string>? _destinationIds;

        /// <summary>
        /// A list of Event Destination IDs which should be used for this Event Subscription.
        /// </summary>
        public InputList<string> DestinationIds
        {
            get => _destinationIds ?? (_destinationIds = new InputList<string>());
            set => _destinationIds = value;
        }

        /// <summary>
        /// Arbitrary customer supplied information intended to be machine readable. Optional, max 4096 chars.
        /// </summary>
        [Input("metadata")]
        public Input<string>? Metadata { get; set; }

        [Input("sources")]
        private InputList<Inputs.EventSubscriptionSourceGetArgs>? _sources;

        /// <summary>
        /// Sources containing the types for which this event subscription will trigger
        /// </summary>
        public InputList<Inputs.EventSubscriptionSourceGetArgs> Sources
        {
            get => _sources ?? (_sources = new InputList<Inputs.EventSubscriptionSourceGetArgs>());
            set => _sources = value;
        }

        public EventSubscriptionState()
        {
        }
        public static new EventSubscriptionState Empty => new EventSubscriptionState();
    }
}
