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

    public sealed class EndpointConfigurationResponseHeaderGetArgs : global::Pulumi.ResourceArgs
    {
        [Input("add")]
        private InputMap<string>? _add;

        /// <summary>
        /// a map of header key to header value that will be injected into the HTTP Response returned to the HTTP client
        /// </summary>
        public InputMap<string> Add
        {
            get => _add ?? (_add = new InputMap<string>());
            set => _add = value;
        }

        /// <summary>
        /// `true` if the module will be applied to traffic, `false` to disable. default `true` if unspecified
        /// </summary>
        [Input("enabled")]
        public Input<bool>? Enabled { get; set; }

        [Input("removes")]
        private InputList<string>? _removes;

        /// <summary>
        /// a list of header names that will be removed from the HTTP Response returned to the HTTP client
        /// </summary>
        public InputList<string> Removes
        {
            get => _removes ?? (_removes = new InputList<string>());
            set => _removes = value;
        }

        public EndpointConfigurationResponseHeaderGetArgs()
        {
        }
        public static new EndpointConfigurationResponseHeaderGetArgs Empty => new EndpointConfigurationResponseHeaderGetArgs();
    }
}
