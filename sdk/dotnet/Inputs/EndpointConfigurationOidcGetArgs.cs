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

    public sealed class EndpointConfigurationOidcGetArgs : global::Pulumi.ResourceArgs
    {
        /// <summary>
        /// The OIDC app's client ID and OIDC audience.
        /// </summary>
        [Input("clientId")]
        public Input<string>? ClientId { get; set; }

        [Input("clientSecret")]
        private Input<string>? _clientSecret;

        /// <summary>
        /// The OIDC app's client secret.
        /// </summary>
        public Input<string>? ClientSecret
        {
            get => _clientSecret;
            set
            {
                var emptySecret = Output.CreateSecret(0);
                _clientSecret = Output.Tuple<Input<string>?, int>(value, emptySecret).Apply(t => t.Item1);
            }
        }

        /// <summary>
        /// the prefix of the session cookie that ngrok sets on the http client to cache authentication. default is 'ngrok.'
        /// </summary>
        [Input("cookiePrefix")]
        public Input<string>? CookiePrefix { get; set; }

        /// <summary>
        /// `true` if the module will be applied to traffic, `false` to disable. default `true` if unspecified
        /// </summary>
        [Input("enabled")]
        public Input<bool>? Enabled { get; set; }

        /// <summary>
        /// Integer number of seconds of inactivity after which if the user has not accessed the endpoint, their session will time out and they will be forced to reauthenticate.
        /// </summary>
        [Input("inactivityTimeout")]
        public Input<int>? InactivityTimeout { get; set; }

        /// <summary>
        /// URL of the OIDC "OpenID provider". This is the base URL used for discovery.
        /// </summary>
        [Input("issuer")]
        public Input<string>? Issuer { get; set; }

        /// <summary>
        /// Integer number of seconds of the maximum duration of an authenticated session. After this period is exceeded, a user must reauthenticate.
        /// </summary>
        [Input("maximumDuration")]
        public Input<int>? MaximumDuration { get; set; }

        /// <summary>
        /// Do not enforce authentication on HTTP OPTIONS requests. necessary if you are supporting CORS.
        /// </summary>
        [Input("optionsPassthrough")]
        public Input<bool>? OptionsPassthrough { get; set; }

        [Input("scopes")]
        private InputList<string>? _scopes;

        /// <summary>
        /// The set of scopes to request from the OIDC identity provider.
        /// </summary>
        public InputList<string> Scopes
        {
            get => _scopes ?? (_scopes = new InputList<string>());
            set => _scopes = value;
        }

        public EndpointConfigurationOidcGetArgs()
        {
        }
        public static new EndpointConfigurationOidcGetArgs Empty => new EndpointConfigurationOidcGetArgs();
    }
}
