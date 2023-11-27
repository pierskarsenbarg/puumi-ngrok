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

    public sealed class EventDestinationTargetCloudwatchLogAuthCredGetArgs : global::Pulumi.ResourceArgs
    {
        /// <summary>
        /// The ID portion of an AWS access key.
        /// </summary>
        [Input("awsAccessKeyId", required: true)]
        public Input<string> AwsAccessKeyId { get; set; } = null!;

        /// <summary>
        /// The secret portion of an AWS access key.
        /// </summary>
        [Input("awsSecretAccessKey", required: true)]
        public Input<string> AwsSecretAccessKey { get; set; } = null!;

        public EventDestinationTargetCloudwatchLogAuthCredGetArgs()
        {
        }
        public static new EventDestinationTargetCloudwatchLogAuthCredGetArgs Empty => new EventDestinationTargetCloudwatchLogAuthCredGetArgs();
    }
}
