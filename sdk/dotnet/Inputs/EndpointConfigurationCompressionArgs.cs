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

    public sealed class EndpointConfigurationCompressionArgs : global::Pulumi.ResourceArgs
    {
        /// <summary>
        /// `true` if the module will be applied to traffic, `false` to disable. default `true` if unspecified
        /// </summary>
        [Input("enabled")]
        public Input<bool>? Enabled { get; set; }

        public EndpointConfigurationCompressionArgs()
        {
        }
        public static new EndpointConfigurationCompressionArgs Empty => new EndpointConfigurationCompressionArgs();
    }
}
