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

    public sealed class EndpointConfigurationBackendBackendArgs : global::Pulumi.ResourceArgs
    {
        /// <summary>
        /// a resource identifier
        /// </summary>
        [Input("id")]
        public Input<string>? Id { get; set; }

        /// <summary>
        /// a uri for locating a resource
        /// </summary>
        [Input("uri")]
        public Input<string>? Uri { get; set; }

        public EndpointConfigurationBackendBackendArgs()
        {
        }
        public static new EndpointConfigurationBackendBackendArgs Empty => new EndpointConfigurationBackendBackendArgs();
    }
}
