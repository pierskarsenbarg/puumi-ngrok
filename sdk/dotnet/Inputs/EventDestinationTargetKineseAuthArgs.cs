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

    public sealed class EventDestinationTargetKineseAuthArgs : global::Pulumi.ResourceArgs
    {
        [Input("creds")]
        private InputList<Inputs.EventDestinationTargetKineseAuthCredArgs>? _creds;
        public InputList<Inputs.EventDestinationTargetKineseAuthCredArgs> Creds
        {
            get => _creds ?? (_creds = new InputList<Inputs.EventDestinationTargetKineseAuthCredArgs>());
            set => _creds = value;
        }

        [Input("roles")]
        private InputList<Inputs.EventDestinationTargetKineseAuthRoleArgs>? _roles;
        public InputList<Inputs.EventDestinationTargetKineseAuthRoleArgs> Roles
        {
            get => _roles ?? (_roles = new InputList<Inputs.EventDestinationTargetKineseAuthRoleArgs>());
            set => _roles = value;
        }

        public EventDestinationTargetKineseAuthArgs()
        {
        }
        public static new EventDestinationTargetKineseAuthArgs Empty => new EventDestinationTargetKineseAuthArgs();
    }
}
