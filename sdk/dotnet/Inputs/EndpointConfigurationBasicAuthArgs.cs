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

    public sealed class EndpointConfigurationBasicAuthArgs : global::Pulumi.ResourceArgs
    {
        /// <summary>
        /// true or false indicating whether to allow OPTIONS requests through without authentication which is necessary for CORS. default is `false`
        /// </summary>
        [Input("allowOptions")]
        public Input<bool>? AllowOptions { get; set; }

        /// <summary>
        /// determines how the basic auth credentials are validated. Currently only the value `agent` is supported which means that credentials will be validated against the username and password specified by the ngrok agent's `--basic-auth` flag, if any.
        /// </summary>
        [Input("authProviderId")]
        public Input<string>? AuthProviderId { get; set; }

        /// <summary>
        /// `true` if the module will be applied to traffic, `false` to disable. default `true` if unspecified
        /// </summary>
        [Input("enabled")]
        public Input<bool>? Enabled { get; set; }

        /// <summary>
        /// an arbitrary string to be specified in as the 'realm' value in the `WWW-Authenticate` header. default is `ngrok`
        /// </summary>
        [Input("realm")]
        public Input<string>? Realm { get; set; }

        public EndpointConfigurationBasicAuthArgs()
        {
        }
        public static new EndpointConfigurationBasicAuthArgs Empty => new EndpointConfigurationBasicAuthArgs();
    }
}
