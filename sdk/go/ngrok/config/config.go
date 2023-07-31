// Code generated by the Pulumi Terraform Bridge (tfgen) Tool DO NOT EDIT.
// *** WARNING: Do not edit by hand unless you're certain you know what you are doing! ***

package config

import (
	"github.com/pulumi/pulumi-ngrok/sdk/go/ngrok/internal"
	"github.com/pulumi/pulumi/sdk/v3/go/pulumi"
	"github.com/pulumi/pulumi/sdk/v3/go/pulumi/config"
)

var _ = internal.GetEnvOrDefault

// base URL for the ngrok API. only overridden for ngrok's internal testing purposes.
func GetApiBaseUrl(ctx *pulumi.Context) string {
	return config.Get(ctx, "ngrok:apiBaseUrl")
}

// ngrok API key used for authenticating to the API
func GetApiKey(ctx *pulumi.Context) string {
	return config.Get(ctx, "ngrok:apiKey")
}
