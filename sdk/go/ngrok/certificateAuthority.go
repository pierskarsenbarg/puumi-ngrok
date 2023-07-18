// Code generated by the Pulumi Terraform Bridge (tfgen) Tool DO NOT EDIT.
// *** WARNING: Do not edit by hand unless you're certain you know what you are doing! ***

package ngrok

import (
	"context"
	"reflect"

	"errors"
	"github.com/pulumi/pulumi/sdk/v3/go/pulumi"
)

// Certificate Authorities are x509 certificates that are used to sign other
//
//	x509 certificates. Attach a Certificate Authority to the Mutual TLS module
//	to verify that the TLS certificate presented by a client has been signed by
//	this CA. Certificate Authorities  are used only for mTLS validation only and
//	thus a private key is not included in the resource.
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
//			_, err := ngrok.NewCertificateAuthority(ctx, "example", &ngrok.CertificateAuthorityArgs{
//				CaPem: pulumi.String(`-----BEGIN CERTIFICATE-----
//
// MIIEETCCAvmgAwIBAgIUU3N6lNzPqar4400cLQMcVHFl+mEwDQYJKoZIhvcNAQEL
// BQAwgZcxCzAJBgNVBAYTAkFVMQwwCgYDVQQIDANOU1cxDzANBgNVBAcMBlN5ZG5l
// eTEZMBcGA1UECgwQRHJvcGJlYXIgUHR5IEx0ZDEkMCIGA1UEAwwbSW50cmFuZXQg
// U2VydmljZXMgQXV0aG9yaXR5MSgwJgYJKoZIhvcNAQkBFhlzZWN1cml0eUBkcm9w
// YmVhci5leGFtcGxlMB4XDTIwMDUwMTE2Mjc1OVoXDTIxMDUwMTE2Mjc1OVowgZcx
// CzAJBgNVBAYTAkFVMQwwCgYDVQQIDANOU1cxDzANBgNVBAcMBlN5ZG5leTEZMBcG
// A1UECgwQRHJvcGJlYXIgUHR5IEx0ZDEkMCIGA1UEAwwbSW50cmFuZXQgU2Vydmlj
// ZXMgQXV0aG9yaXR5MSgwJgYJKoZIhvcNAQkBFhlzZWN1cml0eUBkcm9wYmVhci5l
// eGFtcGxlMIIBIjANBgkqhkiG9w0BAQEFAAOCAQ8AMIIBCgKCAQEA7y/EAN0yZkA0
// nRpMBfomnnS8KMWHb90kvGfhkCDR8WCQz5mX7eDEYDthRQrEgp63qtJ7IoCM5f0A
// UD6J2m/mZecP7SfA8OuTAZ7UyRixpZh0zJQSgj24Sh1LQuYci0DNXrei+R1qBvd+
// pmpZwkKygNrbZYe3oY1PZ3jEYPSAQzIObDF7LhdhLLrcfWa9BHOGMLnALNMY558b
// voijTCEmRrSavdvrAS9LDRipEXT8EQOWZZT9VbPtgSBalvStdoupAptmPIWjXftf
// Wi1kry+P0xVFZG9iZwUeAT6fSJ+gJD8M1UXWaQbocYrctESP0sZEFM3rzdWqrZb7
// 3cH3K5OCvwIDAQABo1MwUTAdBgNVHQ4EFgQUsZdchgUimRHLiPRWw51+DGBmlfMw
// HwYDVR0jBBgwFoAUsZdchgUimRHLiPRWw51+DGBmlfMwDwYDVR0TAQH/BAUwAwEB
// /zANBgkqhkiG9w0BAQsFAAOCAQEANk25tt8sSfn6Qu1bbhWRbjKgS5z+j9LqyCna
// v3fbSchMthaQR7w0vL69ayroeYdqDZkRMmHjuYKY4NyqyXkkaqVO63wEicCo55d9
// pIKuPzc/7xwdRephosjGTQ4QaQ4OnrdpJZieI92m9ODexgsab84AYmwNpbGOI/tK
// nPsQr8x1RfLs2gbBwQ4MYVM3tQQbX0o+yve5nz/NCOq4vdG+eKON5u6VYMkOOg9F
// VyNY1iISQkpNk/AF6Vi9BGuDb5Hg0phEl1Q0ntCO7ZHAUHjy0ucqXZiXoXdXZcs3
// 3zKKLUKva59EDBZ5TUucvXh8VemBtNc6hd1mX4Tq7lAreG9pjQ==
// -----END CERTIFICATE-----
// `),
//
//				Description: pulumi.String("Internal Coprorates Services Authority"),
//				Metadata:    pulumi.String("{\"internal_id\": \"7d2caeee-cdc3-4b26-b2c2-b280b8287552\"}"),
//			})
//			if err != nil {
//				return err
//			}
//			return nil
//		})
//	}
//
// ```
type CertificateAuthority struct {
	pulumi.CustomResourceState

	// raw PEM of the Certificate Authority
	CaPem pulumi.StringOutput `pulumi:"caPem"`
	// human-readable description of this Certificate Authority. optional, max 255 bytes.
	Description pulumi.StringPtrOutput `pulumi:"description"`
	// arbitrary user-defined machine-readable data of this Certificate Authority. optional, max 4096 bytes.
	Metadata pulumi.StringPtrOutput `pulumi:"metadata"`
}

// NewCertificateAuthority registers a new resource with the given unique name, arguments, and options.
func NewCertificateAuthority(ctx *pulumi.Context,
	name string, args *CertificateAuthorityArgs, opts ...pulumi.ResourceOption) (*CertificateAuthority, error) {
	if args == nil {
		return nil, errors.New("missing one or more required arguments")
	}

	if args.CaPem == nil {
		return nil, errors.New("invalid value for required argument 'CaPem'")
	}
	opts = pkgResourceDefaultOpts(opts)
	var resource CertificateAuthority
	err := ctx.RegisterResource("ngrok:index/certificateAuthority:CertificateAuthority", name, args, &resource, opts...)
	if err != nil {
		return nil, err
	}
	return &resource, nil
}

// GetCertificateAuthority gets an existing CertificateAuthority resource's state with the given name, ID, and optional
// state properties that are used to uniquely qualify the lookup (nil if not required).
func GetCertificateAuthority(ctx *pulumi.Context,
	name string, id pulumi.IDInput, state *CertificateAuthorityState, opts ...pulumi.ResourceOption) (*CertificateAuthority, error) {
	var resource CertificateAuthority
	err := ctx.ReadResource("ngrok:index/certificateAuthority:CertificateAuthority", name, id, state, &resource, opts...)
	if err != nil {
		return nil, err
	}
	return &resource, nil
}

// Input properties used for looking up and filtering CertificateAuthority resources.
type certificateAuthorityState struct {
	// raw PEM of the Certificate Authority
	CaPem *string `pulumi:"caPem"`
	// human-readable description of this Certificate Authority. optional, max 255 bytes.
	Description *string `pulumi:"description"`
	// arbitrary user-defined machine-readable data of this Certificate Authority. optional, max 4096 bytes.
	Metadata *string `pulumi:"metadata"`
}

type CertificateAuthorityState struct {
	// raw PEM of the Certificate Authority
	CaPem pulumi.StringPtrInput
	// human-readable description of this Certificate Authority. optional, max 255 bytes.
	Description pulumi.StringPtrInput
	// arbitrary user-defined machine-readable data of this Certificate Authority. optional, max 4096 bytes.
	Metadata pulumi.StringPtrInput
}

func (CertificateAuthorityState) ElementType() reflect.Type {
	return reflect.TypeOf((*certificateAuthorityState)(nil)).Elem()
}

type certificateAuthorityArgs struct {
	// raw PEM of the Certificate Authority
	CaPem string `pulumi:"caPem"`
	// human-readable description of this Certificate Authority. optional, max 255 bytes.
	Description *string `pulumi:"description"`
	// arbitrary user-defined machine-readable data of this Certificate Authority. optional, max 4096 bytes.
	Metadata *string `pulumi:"metadata"`
}

// The set of arguments for constructing a CertificateAuthority resource.
type CertificateAuthorityArgs struct {
	// raw PEM of the Certificate Authority
	CaPem pulumi.StringInput
	// human-readable description of this Certificate Authority. optional, max 255 bytes.
	Description pulumi.StringPtrInput
	// arbitrary user-defined machine-readable data of this Certificate Authority. optional, max 4096 bytes.
	Metadata pulumi.StringPtrInput
}

func (CertificateAuthorityArgs) ElementType() reflect.Type {
	return reflect.TypeOf((*certificateAuthorityArgs)(nil)).Elem()
}

type CertificateAuthorityInput interface {
	pulumi.Input

	ToCertificateAuthorityOutput() CertificateAuthorityOutput
	ToCertificateAuthorityOutputWithContext(ctx context.Context) CertificateAuthorityOutput
}

func (*CertificateAuthority) ElementType() reflect.Type {
	return reflect.TypeOf((**CertificateAuthority)(nil)).Elem()
}

func (i *CertificateAuthority) ToCertificateAuthorityOutput() CertificateAuthorityOutput {
	return i.ToCertificateAuthorityOutputWithContext(context.Background())
}

func (i *CertificateAuthority) ToCertificateAuthorityOutputWithContext(ctx context.Context) CertificateAuthorityOutput {
	return pulumi.ToOutputWithContext(ctx, i).(CertificateAuthorityOutput)
}

// CertificateAuthorityArrayInput is an input type that accepts CertificateAuthorityArray and CertificateAuthorityArrayOutput values.
// You can construct a concrete instance of `CertificateAuthorityArrayInput` via:
//
//	CertificateAuthorityArray{ CertificateAuthorityArgs{...} }
type CertificateAuthorityArrayInput interface {
	pulumi.Input

	ToCertificateAuthorityArrayOutput() CertificateAuthorityArrayOutput
	ToCertificateAuthorityArrayOutputWithContext(context.Context) CertificateAuthorityArrayOutput
}

type CertificateAuthorityArray []CertificateAuthorityInput

func (CertificateAuthorityArray) ElementType() reflect.Type {
	return reflect.TypeOf((*[]*CertificateAuthority)(nil)).Elem()
}

func (i CertificateAuthorityArray) ToCertificateAuthorityArrayOutput() CertificateAuthorityArrayOutput {
	return i.ToCertificateAuthorityArrayOutputWithContext(context.Background())
}

func (i CertificateAuthorityArray) ToCertificateAuthorityArrayOutputWithContext(ctx context.Context) CertificateAuthorityArrayOutput {
	return pulumi.ToOutputWithContext(ctx, i).(CertificateAuthorityArrayOutput)
}

// CertificateAuthorityMapInput is an input type that accepts CertificateAuthorityMap and CertificateAuthorityMapOutput values.
// You can construct a concrete instance of `CertificateAuthorityMapInput` via:
//
//	CertificateAuthorityMap{ "key": CertificateAuthorityArgs{...} }
type CertificateAuthorityMapInput interface {
	pulumi.Input

	ToCertificateAuthorityMapOutput() CertificateAuthorityMapOutput
	ToCertificateAuthorityMapOutputWithContext(context.Context) CertificateAuthorityMapOutput
}

type CertificateAuthorityMap map[string]CertificateAuthorityInput

func (CertificateAuthorityMap) ElementType() reflect.Type {
	return reflect.TypeOf((*map[string]*CertificateAuthority)(nil)).Elem()
}

func (i CertificateAuthorityMap) ToCertificateAuthorityMapOutput() CertificateAuthorityMapOutput {
	return i.ToCertificateAuthorityMapOutputWithContext(context.Background())
}

func (i CertificateAuthorityMap) ToCertificateAuthorityMapOutputWithContext(ctx context.Context) CertificateAuthorityMapOutput {
	return pulumi.ToOutputWithContext(ctx, i).(CertificateAuthorityMapOutput)
}

type CertificateAuthorityOutput struct{ *pulumi.OutputState }

func (CertificateAuthorityOutput) ElementType() reflect.Type {
	return reflect.TypeOf((**CertificateAuthority)(nil)).Elem()
}

func (o CertificateAuthorityOutput) ToCertificateAuthorityOutput() CertificateAuthorityOutput {
	return o
}

func (o CertificateAuthorityOutput) ToCertificateAuthorityOutputWithContext(ctx context.Context) CertificateAuthorityOutput {
	return o
}

// raw PEM of the Certificate Authority
func (o CertificateAuthorityOutput) CaPem() pulumi.StringOutput {
	return o.ApplyT(func(v *CertificateAuthority) pulumi.StringOutput { return v.CaPem }).(pulumi.StringOutput)
}

// human-readable description of this Certificate Authority. optional, max 255 bytes.
func (o CertificateAuthorityOutput) Description() pulumi.StringPtrOutput {
	return o.ApplyT(func(v *CertificateAuthority) pulumi.StringPtrOutput { return v.Description }).(pulumi.StringPtrOutput)
}

// arbitrary user-defined machine-readable data of this Certificate Authority. optional, max 4096 bytes.
func (o CertificateAuthorityOutput) Metadata() pulumi.StringPtrOutput {
	return o.ApplyT(func(v *CertificateAuthority) pulumi.StringPtrOutput { return v.Metadata }).(pulumi.StringPtrOutput)
}

type CertificateAuthorityArrayOutput struct{ *pulumi.OutputState }

func (CertificateAuthorityArrayOutput) ElementType() reflect.Type {
	return reflect.TypeOf((*[]*CertificateAuthority)(nil)).Elem()
}

func (o CertificateAuthorityArrayOutput) ToCertificateAuthorityArrayOutput() CertificateAuthorityArrayOutput {
	return o
}

func (o CertificateAuthorityArrayOutput) ToCertificateAuthorityArrayOutputWithContext(ctx context.Context) CertificateAuthorityArrayOutput {
	return o
}

func (o CertificateAuthorityArrayOutput) Index(i pulumi.IntInput) CertificateAuthorityOutput {
	return pulumi.All(o, i).ApplyT(func(vs []interface{}) *CertificateAuthority {
		return vs[0].([]*CertificateAuthority)[vs[1].(int)]
	}).(CertificateAuthorityOutput)
}

type CertificateAuthorityMapOutput struct{ *pulumi.OutputState }

func (CertificateAuthorityMapOutput) ElementType() reflect.Type {
	return reflect.TypeOf((*map[string]*CertificateAuthority)(nil)).Elem()
}

func (o CertificateAuthorityMapOutput) ToCertificateAuthorityMapOutput() CertificateAuthorityMapOutput {
	return o
}

func (o CertificateAuthorityMapOutput) ToCertificateAuthorityMapOutputWithContext(ctx context.Context) CertificateAuthorityMapOutput {
	return o
}

func (o CertificateAuthorityMapOutput) MapIndex(k pulumi.StringInput) CertificateAuthorityOutput {
	return pulumi.All(o, k).ApplyT(func(vs []interface{}) *CertificateAuthority {
		return vs[0].(map[string]*CertificateAuthority)[vs[1].(string)]
	}).(CertificateAuthorityOutput)
}

func init() {
	pulumi.RegisterInputType(reflect.TypeOf((*CertificateAuthorityInput)(nil)).Elem(), &CertificateAuthority{})
	pulumi.RegisterInputType(reflect.TypeOf((*CertificateAuthorityArrayInput)(nil)).Elem(), CertificateAuthorityArray{})
	pulumi.RegisterInputType(reflect.TypeOf((*CertificateAuthorityMapInput)(nil)).Elem(), CertificateAuthorityMap{})
	pulumi.RegisterOutputType(CertificateAuthorityOutput{})
	pulumi.RegisterOutputType(CertificateAuthorityArrayOutput{})
	pulumi.RegisterOutputType(CertificateAuthorityMapOutput{})
}
