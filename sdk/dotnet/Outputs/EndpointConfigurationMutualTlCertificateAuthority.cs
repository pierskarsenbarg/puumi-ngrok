// *** WARNING: this file was generated by the Pulumi Terraform Bridge (tfgen) Tool. ***
// *** Do not edit by hand unless you're certain you know what you are doing! ***

using System;
using System.Collections.Generic;
using System.Collections.Immutable;
using System.Threading.Tasks;
using Pulumi.Serialization;
using Pulumi;

namespace PiersKarsenbarg.Ngrok.Outputs
{

    [OutputType]
    public sealed class EndpointConfigurationMutualTlCertificateAuthority
    {
        /// <summary>
        /// a resource identifier
        /// </summary>
        public readonly string? Id;
        /// <summary>
        /// a uri for locating a resource
        /// </summary>
        public readonly string? Uri;

        [OutputConstructor]
        private EndpointConfigurationMutualTlCertificateAuthority(
            string? id,

            string? uri)
        {
            Id = id;
            Uri = uri;
        }
    }
}
