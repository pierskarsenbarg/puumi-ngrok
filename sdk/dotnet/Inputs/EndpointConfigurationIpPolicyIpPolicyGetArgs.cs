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

    public sealed class EndpointConfigurationIpPolicyIpPolicyGetArgs : global::Pulumi.ResourceArgs
    {
        /// <summary>
        /// unique identifier of this endpoint configuration
        /// </summary>
        [Input("id")]
        public Input<string>? Id { get; set; }

        [Input("uri")]
        public Input<string>? Uri { get; set; }

        public EndpointConfigurationIpPolicyIpPolicyGetArgs()
        {
        }
        public static new EndpointConfigurationIpPolicyIpPolicyGetArgs Empty => new EndpointConfigurationIpPolicyIpPolicyGetArgs();
    }
}
