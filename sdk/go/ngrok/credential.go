// Code generated by the Pulumi Terraform Bridge (tfgen) Tool DO NOT EDIT.
// *** WARNING: Do not edit by hand unless you're certain you know what you are doing! ***

package ngrok

import (
	"context"
	"reflect"

	"github.com/pulumi/pulumi/sdk/v3/go/pulumi"
)

// Tunnel Credentials are ngrok agent authtokens. They authorize the ngrok
//
//	agent to connect the ngrok service as your account. They are installed with
//	the `ngrok authtoken` command or by specifying it in the `ngrok.yml`
//	configuration file with the `authtoken` property.
//
// ## Example Usage
//
// ```go
// package main
//
// import (
//
//	"github.com/pulumi/pulumi-ngrok/sdk/go/ngrok"
//	"github.com/pulumi/pulumi/sdk/v3/go/pulumi"
//
// )
//
//	func main() {
//		pulumi.Run(func(ctx *pulumi.Context) error {
//			_, err := ngrok.NewCredential(ctx, "example", &ngrok.CredentialArgs{
//				Description: pulumi.String("development cred for alan@example.com"),
//			})
//			if err != nil {
//				return err
//			}
//			return nil
//		})
//	}
//
// ```
type Credential struct {
	pulumi.CustomResourceState

	// optional list of ACL rules. If unspecified, the credential will have no restrictions. The only allowed ACL rule at this time is the `bind` rule. The `bind` rule allows the caller to restrict what domains and addresses the token is allowed to bind. For example, to allow the token to open a tunnel on example.ngrok.io your ACL would include the rule `bind:example.ngrok.io`. Bind rules may specify a leading wildcard to match multiple domains with a common suffix. For example, you may specify a rule of `bind:*.example.com` which will allow `x.example.com`, `y.example.com`, `*.example.com`, etc. A rule of `'*'` is equivalent to no acl at all and will explicitly permit all actions.
	Acls pulumi.StringArrayOutput `pulumi:"acls"`
	// human-readable description of who or what will use the credential to authenticate. Optional, max 255 bytes.
	Description pulumi.StringPtrOutput `pulumi:"description"`
	// arbitrary user-defined machine-readable data of this credential. Optional, max 4096 bytes.
	Metadata pulumi.StringPtrOutput `pulumi:"metadata"`
	// the credential's authtoken that can be used to authenticate an ngrok client. **This value is only available one time, on the API response from credential creation, otherwise it is null.**
	Token pulumi.StringOutput `pulumi:"token"`
}

// NewCredential registers a new resource with the given unique name, arguments, and options.
func NewCredential(ctx *pulumi.Context,
	name string, args *CredentialArgs, opts ...pulumi.ResourceOption) (*Credential, error) {
	if args == nil {
		args = &CredentialArgs{}
	}

	secrets := pulumi.AdditionalSecretOutputs([]string{
		"token",
	})
	opts = append(opts, secrets)
	opts = pkgResourceDefaultOpts(opts)
	var resource Credential
	err := ctx.RegisterResource("ngrok:index/credential:Credential", name, args, &resource, opts...)
	if err != nil {
		return nil, err
	}
	return &resource, nil
}

// GetCredential gets an existing Credential resource's state with the given name, ID, and optional
// state properties that are used to uniquely qualify the lookup (nil if not required).
func GetCredential(ctx *pulumi.Context,
	name string, id pulumi.IDInput, state *CredentialState, opts ...pulumi.ResourceOption) (*Credential, error) {
	var resource Credential
	err := ctx.ReadResource("ngrok:index/credential:Credential", name, id, state, &resource, opts...)
	if err != nil {
		return nil, err
	}
	return &resource, nil
}

// Input properties used for looking up and filtering Credential resources.
type credentialState struct {
	// optional list of ACL rules. If unspecified, the credential will have no restrictions. The only allowed ACL rule at this time is the `bind` rule. The `bind` rule allows the caller to restrict what domains and addresses the token is allowed to bind. For example, to allow the token to open a tunnel on example.ngrok.io your ACL would include the rule `bind:example.ngrok.io`. Bind rules may specify a leading wildcard to match multiple domains with a common suffix. For example, you may specify a rule of `bind:*.example.com` which will allow `x.example.com`, `y.example.com`, `*.example.com`, etc. A rule of `'*'` is equivalent to no acl at all and will explicitly permit all actions.
	Acls []string `pulumi:"acls"`
	// human-readable description of who or what will use the credential to authenticate. Optional, max 255 bytes.
	Description *string `pulumi:"description"`
	// arbitrary user-defined machine-readable data of this credential. Optional, max 4096 bytes.
	Metadata *string `pulumi:"metadata"`
	// the credential's authtoken that can be used to authenticate an ngrok client. **This value is only available one time, on the API response from credential creation, otherwise it is null.**
	Token *string `pulumi:"token"`
}

type CredentialState struct {
	// optional list of ACL rules. If unspecified, the credential will have no restrictions. The only allowed ACL rule at this time is the `bind` rule. The `bind` rule allows the caller to restrict what domains and addresses the token is allowed to bind. For example, to allow the token to open a tunnel on example.ngrok.io your ACL would include the rule `bind:example.ngrok.io`. Bind rules may specify a leading wildcard to match multiple domains with a common suffix. For example, you may specify a rule of `bind:*.example.com` which will allow `x.example.com`, `y.example.com`, `*.example.com`, etc. A rule of `'*'` is equivalent to no acl at all and will explicitly permit all actions.
	Acls pulumi.StringArrayInput
	// human-readable description of who or what will use the credential to authenticate. Optional, max 255 bytes.
	Description pulumi.StringPtrInput
	// arbitrary user-defined machine-readable data of this credential. Optional, max 4096 bytes.
	Metadata pulumi.StringPtrInput
	// the credential's authtoken that can be used to authenticate an ngrok client. **This value is only available one time, on the API response from credential creation, otherwise it is null.**
	Token pulumi.StringPtrInput
}

func (CredentialState) ElementType() reflect.Type {
	return reflect.TypeOf((*credentialState)(nil)).Elem()
}

type credentialArgs struct {
	// optional list of ACL rules. If unspecified, the credential will have no restrictions. The only allowed ACL rule at this time is the `bind` rule. The `bind` rule allows the caller to restrict what domains and addresses the token is allowed to bind. For example, to allow the token to open a tunnel on example.ngrok.io your ACL would include the rule `bind:example.ngrok.io`. Bind rules may specify a leading wildcard to match multiple domains with a common suffix. For example, you may specify a rule of `bind:*.example.com` which will allow `x.example.com`, `y.example.com`, `*.example.com`, etc. A rule of `'*'` is equivalent to no acl at all and will explicitly permit all actions.
	Acls []string `pulumi:"acls"`
	// human-readable description of who or what will use the credential to authenticate. Optional, max 255 bytes.
	Description *string `pulumi:"description"`
	// arbitrary user-defined machine-readable data of this credential. Optional, max 4096 bytes.
	Metadata *string `pulumi:"metadata"`
}

// The set of arguments for constructing a Credential resource.
type CredentialArgs struct {
	// optional list of ACL rules. If unspecified, the credential will have no restrictions. The only allowed ACL rule at this time is the `bind` rule. The `bind` rule allows the caller to restrict what domains and addresses the token is allowed to bind. For example, to allow the token to open a tunnel on example.ngrok.io your ACL would include the rule `bind:example.ngrok.io`. Bind rules may specify a leading wildcard to match multiple domains with a common suffix. For example, you may specify a rule of `bind:*.example.com` which will allow `x.example.com`, `y.example.com`, `*.example.com`, etc. A rule of `'*'` is equivalent to no acl at all and will explicitly permit all actions.
	Acls pulumi.StringArrayInput
	// human-readable description of who or what will use the credential to authenticate. Optional, max 255 bytes.
	Description pulumi.StringPtrInput
	// arbitrary user-defined machine-readable data of this credential. Optional, max 4096 bytes.
	Metadata pulumi.StringPtrInput
}

func (CredentialArgs) ElementType() reflect.Type {
	return reflect.TypeOf((*credentialArgs)(nil)).Elem()
}

type CredentialInput interface {
	pulumi.Input

	ToCredentialOutput() CredentialOutput
	ToCredentialOutputWithContext(ctx context.Context) CredentialOutput
}

func (*Credential) ElementType() reflect.Type {
	return reflect.TypeOf((**Credential)(nil)).Elem()
}

func (i *Credential) ToCredentialOutput() CredentialOutput {
	return i.ToCredentialOutputWithContext(context.Background())
}

func (i *Credential) ToCredentialOutputWithContext(ctx context.Context) CredentialOutput {
	return pulumi.ToOutputWithContext(ctx, i).(CredentialOutput)
}

// CredentialArrayInput is an input type that accepts CredentialArray and CredentialArrayOutput values.
// You can construct a concrete instance of `CredentialArrayInput` via:
//
//	CredentialArray{ CredentialArgs{...} }
type CredentialArrayInput interface {
	pulumi.Input

	ToCredentialArrayOutput() CredentialArrayOutput
	ToCredentialArrayOutputWithContext(context.Context) CredentialArrayOutput
}

type CredentialArray []CredentialInput

func (CredentialArray) ElementType() reflect.Type {
	return reflect.TypeOf((*[]*Credential)(nil)).Elem()
}

func (i CredentialArray) ToCredentialArrayOutput() CredentialArrayOutput {
	return i.ToCredentialArrayOutputWithContext(context.Background())
}

func (i CredentialArray) ToCredentialArrayOutputWithContext(ctx context.Context) CredentialArrayOutput {
	return pulumi.ToOutputWithContext(ctx, i).(CredentialArrayOutput)
}

// CredentialMapInput is an input type that accepts CredentialMap and CredentialMapOutput values.
// You can construct a concrete instance of `CredentialMapInput` via:
//
//	CredentialMap{ "key": CredentialArgs{...} }
type CredentialMapInput interface {
	pulumi.Input

	ToCredentialMapOutput() CredentialMapOutput
	ToCredentialMapOutputWithContext(context.Context) CredentialMapOutput
}

type CredentialMap map[string]CredentialInput

func (CredentialMap) ElementType() reflect.Type {
	return reflect.TypeOf((*map[string]*Credential)(nil)).Elem()
}

func (i CredentialMap) ToCredentialMapOutput() CredentialMapOutput {
	return i.ToCredentialMapOutputWithContext(context.Background())
}

func (i CredentialMap) ToCredentialMapOutputWithContext(ctx context.Context) CredentialMapOutput {
	return pulumi.ToOutputWithContext(ctx, i).(CredentialMapOutput)
}

type CredentialOutput struct{ *pulumi.OutputState }

func (CredentialOutput) ElementType() reflect.Type {
	return reflect.TypeOf((**Credential)(nil)).Elem()
}

func (o CredentialOutput) ToCredentialOutput() CredentialOutput {
	return o
}

func (o CredentialOutput) ToCredentialOutputWithContext(ctx context.Context) CredentialOutput {
	return o
}

// optional list of ACL rules. If unspecified, the credential will have no restrictions. The only allowed ACL rule at this time is the `bind` rule. The `bind` rule allows the caller to restrict what domains and addresses the token is allowed to bind. For example, to allow the token to open a tunnel on example.ngrok.io your ACL would include the rule `bind:example.ngrok.io`. Bind rules may specify a leading wildcard to match multiple domains with a common suffix. For example, you may specify a rule of `bind:*.example.com` which will allow `x.example.com`, `y.example.com`, `*.example.com`, etc. A rule of `'*'` is equivalent to no acl at all and will explicitly permit all actions.
func (o CredentialOutput) Acls() pulumi.StringArrayOutput {
	return o.ApplyT(func(v *Credential) pulumi.StringArrayOutput { return v.Acls }).(pulumi.StringArrayOutput)
}

// human-readable description of who or what will use the credential to authenticate. Optional, max 255 bytes.
func (o CredentialOutput) Description() pulumi.StringPtrOutput {
	return o.ApplyT(func(v *Credential) pulumi.StringPtrOutput { return v.Description }).(pulumi.StringPtrOutput)
}

// arbitrary user-defined machine-readable data of this credential. Optional, max 4096 bytes.
func (o CredentialOutput) Metadata() pulumi.StringPtrOutput {
	return o.ApplyT(func(v *Credential) pulumi.StringPtrOutput { return v.Metadata }).(pulumi.StringPtrOutput)
}

// the credential's authtoken that can be used to authenticate an ngrok client. **This value is only available one time, on the API response from credential creation, otherwise it is null.**
func (o CredentialOutput) Token() pulumi.StringOutput {
	return o.ApplyT(func(v *Credential) pulumi.StringOutput { return v.Token }).(pulumi.StringOutput)
}

type CredentialArrayOutput struct{ *pulumi.OutputState }

func (CredentialArrayOutput) ElementType() reflect.Type {
	return reflect.TypeOf((*[]*Credential)(nil)).Elem()
}

func (o CredentialArrayOutput) ToCredentialArrayOutput() CredentialArrayOutput {
	return o
}

func (o CredentialArrayOutput) ToCredentialArrayOutputWithContext(ctx context.Context) CredentialArrayOutput {
	return o
}

func (o CredentialArrayOutput) Index(i pulumi.IntInput) CredentialOutput {
	return pulumi.All(o, i).ApplyT(func(vs []interface{}) *Credential {
		return vs[0].([]*Credential)[vs[1].(int)]
	}).(CredentialOutput)
}

type CredentialMapOutput struct{ *pulumi.OutputState }

func (CredentialMapOutput) ElementType() reflect.Type {
	return reflect.TypeOf((*map[string]*Credential)(nil)).Elem()
}

func (o CredentialMapOutput) ToCredentialMapOutput() CredentialMapOutput {
	return o
}

func (o CredentialMapOutput) ToCredentialMapOutputWithContext(ctx context.Context) CredentialMapOutput {
	return o
}

func (o CredentialMapOutput) MapIndex(k pulumi.StringInput) CredentialOutput {
	return pulumi.All(o, k).ApplyT(func(vs []interface{}) *Credential {
		return vs[0].(map[string]*Credential)[vs[1].(string)]
	}).(CredentialOutput)
}

func init() {
	pulumi.RegisterInputType(reflect.TypeOf((*CredentialInput)(nil)).Elem(), &Credential{})
	pulumi.RegisterInputType(reflect.TypeOf((*CredentialArrayInput)(nil)).Elem(), CredentialArray{})
	pulumi.RegisterInputType(reflect.TypeOf((*CredentialMapInput)(nil)).Elem(), CredentialMap{})
	pulumi.RegisterOutputType(CredentialOutput{})
	pulumi.RegisterOutputType(CredentialArrayOutput{})
	pulumi.RegisterOutputType(CredentialMapOutput{})
}
