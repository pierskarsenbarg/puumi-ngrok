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
    public sealed class TlsCertificateSubjectAlternativeName
    {
        /// <summary>
        /// set of additional domains (including wildcards) this TLS certificate is valid for
        /// </summary>
        public readonly ImmutableArray<string> DnsNames;
        /// <summary>
        /// set of IP addresses this TLS certificate is also valid for
        /// </summary>
        public readonly ImmutableArray<string> Ips;

        [OutputConstructor]
        private TlsCertificateSubjectAlternativeName(
            ImmutableArray<string> dnsNames,

            ImmutableArray<string> ips)
        {
            DnsNames = dnsNames;
            Ips = ips;
        }
    }
}
