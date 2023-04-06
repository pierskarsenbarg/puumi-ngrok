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

    public sealed class EndpointConfigurationOauthProviderGithubGetArgs : global::Pulumi.ResourceArgs
    {
        [Input("clientId")]
        public Input<string>? ClientId { get; set; }

        [Input("clientSecret")]
        public Input<string>? ClientSecret { get; set; }

        [Input("emailAddresses")]
        private InputList<string>? _emailAddresses;
        public InputList<string> EmailAddresses
        {
            get => _emailAddresses ?? (_emailAddresses = new InputList<string>());
            set => _emailAddresses = value;
        }

        [Input("emailDomains")]
        private InputList<string>? _emailDomains;
        public InputList<string> EmailDomains
        {
            get => _emailDomains ?? (_emailDomains = new InputList<string>());
            set => _emailDomains = value;
        }

        [Input("organizations")]
        private InputList<string>? _organizations;
        public InputList<string> Organizations
        {
            get => _organizations ?? (_organizations = new InputList<string>());
            set => _organizations = value;
        }

        [Input("scopes")]
        private InputList<string>? _scopes;
        public InputList<string> Scopes
        {
            get => _scopes ?? (_scopes = new InputList<string>());
            set => _scopes = value;
        }

        [Input("teams")]
        private InputList<string>? _teams;
        public InputList<string> Teams
        {
            get => _teams ?? (_teams = new InputList<string>());
            set => _teams = value;
        }

        public EndpointConfigurationOauthProviderGithubGetArgs()
        {
        }
        public static new EndpointConfigurationOauthProviderGithubGetArgs Empty => new EndpointConfigurationOauthProviderGithubGetArgs();
    }
}
