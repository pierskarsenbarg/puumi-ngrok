// *** WARNING: this file was generated by the Pulumi Terraform Bridge (tfgen) Tool. ***
// *** Do not edit by hand unless you're certain you know what you are doing! ***

using System;
using System.Collections.Generic;
using System.Collections.Immutable;
using System.Threading.Tasks;
using Pulumi.Serialization;
using Pulumi;

namespace PiersKarsenbarg.Ngrok.Inputs
{

    public sealed class EventDestinationTargetDebugArgs : global::Pulumi.ResourceArgs
    {
        /// <summary>
        /// URL to send events to.
        /// </summary>
        [Input("callbackUrl")]
        public Input<string>? CallbackUrl { get; set; }

        /// <summary>
        /// Whether or not to output to publisher service logs.
        /// </summary>
        [Input("log")]
        public Input<bool>? Log { get; set; }

        public EventDestinationTargetDebugArgs()
        {
        }
        public static new EventDestinationTargetDebugArgs Empty => new EventDestinationTargetDebugArgs();
    }
}
