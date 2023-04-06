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

    public sealed class EndpointConfigurationMutualTlGetArgs : global::Pulumi.ResourceArgs
    {
        [Input("certificateAuthorities")]
        private InputList<Inputs.EndpointConfigurationMutualTlCertificateAuthorityGetArgs>? _certificateAuthorities;

        /// <summary>
        /// PEM-encoded CA certificates that will be used to validate. Multiple CAs may be provided by concatenating them together.
        /// </summary>
        public InputList<Inputs.EndpointConfigurationMutualTlCertificateAuthorityGetArgs> CertificateAuthorities
        {
            get => _certificateAuthorities ?? (_certificateAuthorities = new InputList<Inputs.EndpointConfigurationMutualTlCertificateAuthorityGetArgs>());
            set => _certificateAuthorities = value;
        }

        /// <summary>
        /// `true` if the module will be applied to traffic, `false` to disable. default `true` if unspecified
        /// </summary>
        [Input("enabled")]
        public Input<bool>? Enabled { get; set; }

        public EndpointConfigurationMutualTlGetArgs()
        {
        }
        public static new EndpointConfigurationMutualTlGetArgs Empty => new EndpointConfigurationMutualTlGetArgs();
    }
}
