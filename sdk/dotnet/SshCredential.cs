// *** WARNING: this file was generated by the Pulumi Terraform Bridge (tfgen) Tool. ***
// *** Do not edit by hand unless you're certain you know what you are doing! ***

using System;
using System.Collections.Generic;
using System.Collections.Immutable;
using System.Threading.Tasks;
using Pulumi.Serialization;
using Pulumi;

namespace PiersKarsenbarg.Ngrok
{
    /// <summary>
    /// SSH Credentials are SSH public keys that can be used to start SSH tunnels
    ///  via the ngrok SSH tunnel gateway.
    /// 
    /// ## Example Usage
    /// 
    /// ```csharp
    /// using System.Collections.Generic;
    /// using Pulumi;
    /// using Ngrok = PiersKarsenbarg.Ngrok;
    /// 
    /// return await Deployment.RunAsync(() =&gt; 
    /// {
    ///     var example = new Ngrok.SshCredential("example", new()
    ///     {
    ///         Acls = new[]
    ///         {
    ///             "bind:1.tcp.ngrok.io:20002",
    ///             "bind:132.devices.company.com",
    ///         },
    ///         Description = "for device #132",
    ///         PublicKey = "ssh-rsa AAAAB3NzaC1yc2EAAAADAQABAAABAQDmGS49FkSODAcKhn3+/47DW2zEn19BZvzRQ8RZjL3v6hCIX2qXfsFK35EGxNI0wV23H4xXC2gVRPHKU71YnCb50tad3yMBTM6+2yfGsEDasEH/anmBLclChKvuGiT547RskZlpbAbdq3GvbzmY+R/2EBRMOiObpc8XmSzKAd05j28kqN0+rZO65SWId0MXdvJdSCSAnuRqBNd/aXKlu8hBPDcgwbT2lMkuR+ApoBS2FLRBOiQyt2Ol0T7Uuf7lTLlazpGB3uTw5zFYUNXkuuI6cAP8QYuY1Bne/hNrG8t3Aw9a1yc2C4Fz1hJ/4OMRxTQ8SUQf+Rmxs8DryMlMFJ8r device132@example.com",
    ///     });
    /// 
    /// });
    /// ```
    /// </summary>
    [NgrokResourceType("ngrok:index/sshCredential:SshCredential")]
    public partial class SshCredential : global::Pulumi.CustomResource
    {
        /// <summary>
        /// optional list of ACL rules. If unspecified, the credential will have no restrictions. The only allowed ACL rule at this time is the `bind` rule. The `bind` rule allows the caller to restrict what domains and addresses the token is allowed to bind. For example, to allow the token to open a tunnel on example.ngrok.io your ACL would include the rule `bind:example.ngrok.io`. Bind rules may specify a leading wildcard to match multiple domains with a common suffix. For example, you may specify a rule of `bind:*.example.com` which will allow `x.example.com`, `y.example.com`, `*.example.com`, etc. A rule of `'*'` is equivalent to no acl at all and will explicitly permit all actions.
        /// </summary>
        [Output("acls")]
        public Output<ImmutableArray<string>> Acls { get; private set; } = null!;

        /// <summary>
        /// human-readable description of who or what will use the ssh credential to authenticate. Optional, max 255 bytes.
        /// </summary>
        [Output("description")]
        public Output<string?> Description { get; private set; } = null!;

        /// <summary>
        /// arbitrary user-defined machine-readable data of this ssh credential. Optional, max 4096 bytes.
        /// </summary>
        [Output("metadata")]
        public Output<string?> Metadata { get; private set; } = null!;

        /// <summary>
        /// the PEM-encoded public key of the SSH keypair that will be used to authenticate
        /// </summary>
        [Output("publicKey")]
        public Output<string> PublicKey { get; private set; } = null!;


        /// <summary>
        /// Create a SshCredential resource with the given unique name, arguments, and options.
        /// </summary>
        ///
        /// <param name="name">The unique name of the resource</param>
        /// <param name="args">The arguments used to populate this resource's properties</param>
        /// <param name="options">A bag of options that control this resource's behavior</param>
        public SshCredential(string name, SshCredentialArgs args, CustomResourceOptions? options = null)
            : base("ngrok:index/sshCredential:SshCredential", name, args ?? new SshCredentialArgs(), MakeResourceOptions(options, ""))
        {
        }

        private SshCredential(string name, Input<string> id, SshCredentialState? state = null, CustomResourceOptions? options = null)
            : base("ngrok:index/sshCredential:SshCredential", name, state, MakeResourceOptions(options, id))
        {
        }

        private static CustomResourceOptions MakeResourceOptions(CustomResourceOptions? options, Input<string>? id)
        {
            var defaultOptions = new CustomResourceOptions
            {
                Version = Utilities.Version,
            };
            var merged = CustomResourceOptions.Merge(defaultOptions, options);
            // Override the ID if one was specified for consistency with other language SDKs.
            merged.Id = id ?? merged.Id;
            return merged;
        }
        /// <summary>
        /// Get an existing SshCredential resource's state with the given name, ID, and optional extra
        /// properties used to qualify the lookup.
        /// </summary>
        ///
        /// <param name="name">The unique name of the resulting resource.</param>
        /// <param name="id">The unique provider ID of the resource to lookup.</param>
        /// <param name="state">Any extra arguments used during the lookup.</param>
        /// <param name="options">A bag of options that control this resource's behavior</param>
        public static SshCredential Get(string name, Input<string> id, SshCredentialState? state = null, CustomResourceOptions? options = null)
        {
            return new SshCredential(name, id, state, options);
        }
    }

    public sealed class SshCredentialArgs : global::Pulumi.ResourceArgs
    {
        [Input("acls")]
        private InputList<string>? _acls;

        /// <summary>
        /// optional list of ACL rules. If unspecified, the credential will have no restrictions. The only allowed ACL rule at this time is the `bind` rule. The `bind` rule allows the caller to restrict what domains and addresses the token is allowed to bind. For example, to allow the token to open a tunnel on example.ngrok.io your ACL would include the rule `bind:example.ngrok.io`. Bind rules may specify a leading wildcard to match multiple domains with a common suffix. For example, you may specify a rule of `bind:*.example.com` which will allow `x.example.com`, `y.example.com`, `*.example.com`, etc. A rule of `'*'` is equivalent to no acl at all and will explicitly permit all actions.
        /// </summary>
        public InputList<string> Acls
        {
            get => _acls ?? (_acls = new InputList<string>());
            set => _acls = value;
        }

        /// <summary>
        /// human-readable description of who or what will use the ssh credential to authenticate. Optional, max 255 bytes.
        /// </summary>
        [Input("description")]
        public Input<string>? Description { get; set; }

        /// <summary>
        /// arbitrary user-defined machine-readable data of this ssh credential. Optional, max 4096 bytes.
        /// </summary>
        [Input("metadata")]
        public Input<string>? Metadata { get; set; }

        /// <summary>
        /// the PEM-encoded public key of the SSH keypair that will be used to authenticate
        /// </summary>
        [Input("publicKey", required: true)]
        public Input<string> PublicKey { get; set; } = null!;

        public SshCredentialArgs()
        {
        }
        public static new SshCredentialArgs Empty => new SshCredentialArgs();
    }

    public sealed class SshCredentialState : global::Pulumi.ResourceArgs
    {
        [Input("acls")]
        private InputList<string>? _acls;

        /// <summary>
        /// optional list of ACL rules. If unspecified, the credential will have no restrictions. The only allowed ACL rule at this time is the `bind` rule. The `bind` rule allows the caller to restrict what domains and addresses the token is allowed to bind. For example, to allow the token to open a tunnel on example.ngrok.io your ACL would include the rule `bind:example.ngrok.io`. Bind rules may specify a leading wildcard to match multiple domains with a common suffix. For example, you may specify a rule of `bind:*.example.com` which will allow `x.example.com`, `y.example.com`, `*.example.com`, etc. A rule of `'*'` is equivalent to no acl at all and will explicitly permit all actions.
        /// </summary>
        public InputList<string> Acls
        {
            get => _acls ?? (_acls = new InputList<string>());
            set => _acls = value;
        }

        /// <summary>
        /// human-readable description of who or what will use the ssh credential to authenticate. Optional, max 255 bytes.
        /// </summary>
        [Input("description")]
        public Input<string>? Description { get; set; }

        /// <summary>
        /// arbitrary user-defined machine-readable data of this ssh credential. Optional, max 4096 bytes.
        /// </summary>
        [Input("metadata")]
        public Input<string>? Metadata { get; set; }

        /// <summary>
        /// the PEM-encoded public key of the SSH keypair that will be used to authenticate
        /// </summary>
        [Input("publicKey")]
        public Input<string>? PublicKey { get; set; }

        public SshCredentialState()
        {
        }
        public static new SshCredentialState Empty => new SshCredentialState();
    }
}
