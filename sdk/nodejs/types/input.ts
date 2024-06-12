// *** WARNING: this file was generated by the Pulumi Terraform Bridge (tfgen) Tool. ***
// *** Do not edit by hand unless you're certain you know what you are doing! ***

import * as pulumi from "@pulumi/pulumi";
import * as inputs from "../types/input";
import * as outputs from "../types/output";

export interface EndpointConfigurationBackend {
    /**
     * backend to be used to back this endpoint
     */
    backends?: pulumi.Input<pulumi.Input<inputs.EndpointConfigurationBackendBackend>[]>;
    /**
     * `true` if the module will be applied to traffic, `false` to disable. default `true` if unspecified
     */
    enabled?: pulumi.Input<boolean>;
}

export interface EndpointConfigurationBackendBackend {
    /**
     * a resource identifier
     */
    id?: pulumi.Input<string>;
    /**
     * a uri for locating a resource
     */
    uri?: pulumi.Input<string>;
}

export interface EndpointConfigurationBasicAuth {
    /**
     * true or false indicating whether to allow OPTIONS requests through without authentication which is necessary for CORS. default is `false`
     */
    allowOptions?: pulumi.Input<boolean>;
    /**
     * determines how the basic auth credentials are validated. Currently only the value `agent` is supported which means that credentials will be validated against the username and password specified by the ngrok agent's `--basic-auth` flag, if any.
     */
    authProviderId?: pulumi.Input<string>;
    /**
     * `true` if the module will be applied to traffic, `false` to disable. default `true` if unspecified
     */
    enabled?: pulumi.Input<boolean>;
    /**
     * an arbitrary string to be specified in as the 'realm' value in the `WWW-Authenticate` header. default is `ngrok`
     */
    realm?: pulumi.Input<string>;
}

export interface EndpointConfigurationCircuitBreaker {
    /**
     * `true` if the module will be applied to traffic, `false` to disable. default `true` if unspecified
     */
    enabled?: pulumi.Input<boolean>;
    /**
     * Error threshold percentage should be between 0 - 1.0, not 0-100.0
     */
    errorThresholdPercentage?: pulumi.Input<number>;
    /**
     * Integer number of buckets into which metrics are retained. Max 128.
     */
    numBuckets?: pulumi.Input<number>;
    /**
     * Integer number of seconds in the statistical rolling window that metrics are retained for.
     */
    rollingWindow?: pulumi.Input<number>;
    /**
     * Integer number of seconds after which the circuit is tripped to wait before re-evaluating upstream health
     */
    trippedDuration?: pulumi.Input<number>;
    /**
     * Integer number of requests in a rolling window that will trip the circuit. Helpful if traffic volume is low.
     */
    volumeThreshold?: pulumi.Input<number>;
}

export interface EndpointConfigurationCompression {
    /**
     * `true` if the module will be applied to traffic, `false` to disable. default `true` if unspecified
     */
    enabled?: pulumi.Input<boolean>;
}

export interface EndpointConfigurationIpPolicy {
    /**
     * `true` if the module will be applied to traffic, `false` to disable. default `true` if unspecified
     */
    enabled?: pulumi.Input<boolean>;
    ipPolicies?: pulumi.Input<pulumi.Input<inputs.EndpointConfigurationIpPolicyIpPolicy>[]>;
}

export interface EndpointConfigurationIpPolicyIpPolicy {
    /**
     * a resource identifier
     */
    id?: pulumi.Input<string>;
    /**
     * a uri for locating a resource
     */
    uri?: pulumi.Input<string>;
}

export interface EndpointConfigurationLogging {
    /**
     * `true` if the module will be applied to traffic, `false` to disable. default `true` if unspecified
     */
    enabled?: pulumi.Input<boolean>;
    /**
     * list of all EventStreams that will be used to configure and export this endpoint's logs
     */
    eventStreams?: pulumi.Input<pulumi.Input<inputs.EndpointConfigurationLoggingEventStream>[]>;
}

export interface EndpointConfigurationLoggingEventStream {
    /**
     * a resource identifier
     */
    id?: pulumi.Input<string>;
    /**
     * a uri for locating a resource
     */
    uri?: pulumi.Input<string>;
}

export interface EndpointConfigurationMutualTl {
    /**
     * PEM-encoded CA certificates that will be used to validate. Multiple CAs may be provided by concatenating them together.
     */
    certificateAuthorities?: pulumi.Input<pulumi.Input<inputs.EndpointConfigurationMutualTlCertificateAuthority>[]>;
    /**
     * `true` if the module will be applied to traffic, `false` to disable. default `true` if unspecified
     */
    enabled?: pulumi.Input<boolean>;
}

export interface EndpointConfigurationMutualTlCertificateAuthority {
    /**
     * a resource identifier
     */
    id?: pulumi.Input<string>;
    /**
     * a uri for locating a resource
     */
    uri?: pulumi.Input<string>;
}

export interface EndpointConfigurationOauth {
    /**
     * Integer number of seconds after which ngrok guarantees it will refresh user state from the identity provider and recheck whether the user is still authorized to access the endpoint. This is the preferred tunable to use to enforce a minimum amount of time after which a revoked user will no longer be able to access the resource.
     */
    authCheckInterval?: pulumi.Input<number>;
    /**
     * the prefix of the session cookie that ngrok sets on the http client to cache authentication. default is 'ngrok.'
     */
    cookiePrefix?: pulumi.Input<string>;
    /**
     * `true` if the module will be applied to traffic, `false` to disable. default `true` if unspecified
     */
    enabled?: pulumi.Input<boolean>;
    /**
     * Integer number of seconds of inactivity after which if the user has not accessed the endpoint, their session will time out and they will be forced to reauthenticate.
     */
    inactivityTimeout?: pulumi.Input<number>;
    /**
     * Integer number of seconds of the maximum duration of an authenticated session. After this period is exceeded, a user must reauthenticate.
     */
    maximumDuration?: pulumi.Input<number>;
    /**
     * Do not enforce authentication on HTTP OPTIONS requests. necessary if you are supporting CORS.
     */
    optionsPassthrough?: pulumi.Input<boolean>;
    /**
     * an object which defines the identity provider to use for authentication and configuration for who may access the endpoint
     */
    providers?: pulumi.Input<pulumi.Input<inputs.EndpointConfigurationOauthProvider>[]>;
}

export interface EndpointConfigurationOauthProvider {
    /**
     * configuration for using facebook as the identity provider
     */
    facebooks?: pulumi.Input<pulumi.Input<inputs.EndpointConfigurationOauthProviderFacebook>[]>;
    /**
     * configuration for using github as the identity provider
     */
    githubs?: pulumi.Input<pulumi.Input<inputs.EndpointConfigurationOauthProviderGithub>[]>;
    /**
     * configuration for using google as the identity provider
     */
    googles?: pulumi.Input<pulumi.Input<inputs.EndpointConfigurationOauthProviderGoogle>[]>;
    /**
     * configuration for using microsoft as the identity provider
     */
    microsofts?: pulumi.Input<pulumi.Input<inputs.EndpointConfigurationOauthProviderMicrosoft>[]>;
}

export interface EndpointConfigurationOauthProviderFacebook {
    /**
     * the OAuth app client ID. retrieve it from the identity provider's dashboard where you created your own OAuth app. optional. if unspecified, ngrok will use its own managed oauth application which has additional restrictions. see the OAuth module docs for more details. if present, clientSecret must be present as well.
     */
    clientId?: pulumi.Input<string>;
    /**
     * the OAuth app client secret. retrieve if from the identity provider's dashboard where you created your own OAuth app. optional, see all of the caveats in the docs for `clientId`.
     */
    clientSecret?: pulumi.Input<string>;
    /**
     * a list of email addresses of users authenticated by identity provider who are allowed access to the endpoint
     */
    emailAddresses?: pulumi.Input<pulumi.Input<string>[]>;
    /**
     * a list of email domains of users authenticated by identity provider who are allowed access to the endpoint
     */
    emailDomains?: pulumi.Input<pulumi.Input<string>[]>;
    /**
     * a list of provider-specific OAuth scopes with the permissions your OAuth app would like to ask for. these may not be set if you are using the ngrok-managed oauth app (i.e. you must pass both `clientId` and `clientSecret` to set scopes)
     */
    scopes?: pulumi.Input<pulumi.Input<string>[]>;
}

export interface EndpointConfigurationOauthProviderGithub {
    /**
     * the OAuth app client ID. retrieve it from the identity provider's dashboard where you created your own OAuth app. optional. if unspecified, ngrok will use its own managed oauth application which has additional restrictions. see the OAuth module docs for more details. if present, clientSecret must be present as well.
     */
    clientId?: pulumi.Input<string>;
    /**
     * the OAuth app client secret. retrieve if from the identity provider's dashboard where you created your own OAuth app. optional, see all of the caveats in the docs for `clientId`.
     */
    clientSecret?: pulumi.Input<string>;
    /**
     * a list of email addresses of users authenticated by identity provider who are allowed access to the endpoint
     */
    emailAddresses?: pulumi.Input<pulumi.Input<string>[]>;
    /**
     * a list of email domains of users authenticated by identity provider who are allowed access to the endpoint
     */
    emailDomains?: pulumi.Input<pulumi.Input<string>[]>;
    /**
     * a list of github org identifiers. users who are members of any of the listed organizations will be allowed access. identifiers should be the organization's 'slug'
     */
    organizations?: pulumi.Input<pulumi.Input<string>[]>;
    /**
     * a list of provider-specific OAuth scopes with the permissions your OAuth app would like to ask for. these may not be set if you are using the ngrok-managed oauth app (i.e. you must pass both `clientId` and `clientSecret` to set scopes)
     */
    scopes?: pulumi.Input<pulumi.Input<string>[]>;
    /**
     * a list of github teams identifiers. users will be allowed access to the endpoint if they are a member of any of these teams. identifiers should be in the 'slug' format qualified with the org name, e.g. `org-name/team-name`
     */
    teams?: pulumi.Input<pulumi.Input<string>[]>;
}

export interface EndpointConfigurationOauthProviderGoogle {
    /**
     * the OAuth app client ID. retrieve it from the identity provider's dashboard where you created your own OAuth app. optional. if unspecified, ngrok will use its own managed oauth application which has additional restrictions. see the OAuth module docs for more details. if present, clientSecret must be present as well.
     */
    clientId?: pulumi.Input<string>;
    /**
     * the OAuth app client secret. retrieve if from the identity provider's dashboard where you created your own OAuth app. optional, see all of the caveats in the docs for `clientId`.
     */
    clientSecret?: pulumi.Input<string>;
    /**
     * a list of email addresses of users authenticated by identity provider who are allowed access to the endpoint
     */
    emailAddresses?: pulumi.Input<pulumi.Input<string>[]>;
    /**
     * a list of email domains of users authenticated by identity provider who are allowed access to the endpoint
     */
    emailDomains?: pulumi.Input<pulumi.Input<string>[]>;
    /**
     * a list of provider-specific OAuth scopes with the permissions your OAuth app would like to ask for. these may not be set if you are using the ngrok-managed oauth app (i.e. you must pass both `clientId` and `clientSecret` to set scopes)
     */
    scopes?: pulumi.Input<pulumi.Input<string>[]>;
}

export interface EndpointConfigurationOauthProviderMicrosoft {
    /**
     * the OAuth app client ID. retrieve it from the identity provider's dashboard where you created your own OAuth app. optional. if unspecified, ngrok will use its own managed oauth application which has additional restrictions. see the OAuth module docs for more details. if present, clientSecret must be present as well.
     */
    clientId?: pulumi.Input<string>;
    /**
     * the OAuth app client secret. retrieve if from the identity provider's dashboard where you created your own OAuth app. optional, see all of the caveats in the docs for `clientId`.
     */
    clientSecret?: pulumi.Input<string>;
    /**
     * a list of email addresses of users authenticated by identity provider who are allowed access to the endpoint
     */
    emailAddresses?: pulumi.Input<pulumi.Input<string>[]>;
    /**
     * a list of email domains of users authenticated by identity provider who are allowed access to the endpoint
     */
    emailDomains?: pulumi.Input<pulumi.Input<string>[]>;
    /**
     * a list of provider-specific OAuth scopes with the permissions your OAuth app would like to ask for. these may not be set if you are using the ngrok-managed oauth app (i.e. you must pass both `clientId` and `clientSecret` to set scopes)
     */
    scopes?: pulumi.Input<pulumi.Input<string>[]>;
}

export interface EndpointConfigurationOidc {
    /**
     * The OIDC app's client ID and OIDC audience.
     */
    clientId?: pulumi.Input<string>;
    /**
     * The OIDC app's client secret.
     */
    clientSecret?: pulumi.Input<string>;
    /**
     * the prefix of the session cookie that ngrok sets on the http client to cache authentication. default is 'ngrok.'
     */
    cookiePrefix?: pulumi.Input<string>;
    /**
     * `true` if the module will be applied to traffic, `false` to disable. default `true` if unspecified
     */
    enabled?: pulumi.Input<boolean>;
    /**
     * Integer number of seconds of inactivity after which if the user has not accessed the endpoint, their session will time out and they will be forced to reauthenticate.
     */
    inactivityTimeout?: pulumi.Input<number>;
    /**
     * URL of the OIDC "OpenID provider". This is the base URL used for discovery.
     */
    issuer?: pulumi.Input<string>;
    /**
     * Integer number of seconds of the maximum duration of an authenticated session. After this period is exceeded, a user must reauthenticate.
     */
    maximumDuration?: pulumi.Input<number>;
    /**
     * Do not enforce authentication on HTTP OPTIONS requests. necessary if you are supporting CORS.
     */
    optionsPassthrough?: pulumi.Input<boolean>;
    /**
     * The set of scopes to request from the OIDC identity provider.
     */
    scopes?: pulumi.Input<pulumi.Input<string>[]>;
}

export interface EndpointConfigurationRequestHeader {
    /**
     * a map of header key to header value that will be injected into the HTTP Request before being sent to the upstream application server
     */
    add?: pulumi.Input<{[key: string]: pulumi.Input<string>}>;
    /**
     * `true` if the module will be applied to traffic, `false` to disable. default `true` if unspecified
     */
    enabled?: pulumi.Input<boolean>;
    /**
     * a list of header names that will be removed from the HTTP Request before being sent to the upstream application server
     */
    removes?: pulumi.Input<pulumi.Input<string>[]>;
}

export interface EndpointConfigurationResponseHeader {
    /**
     * a map of header key to header value that will be injected into the HTTP Response returned to the HTTP client
     */
    add?: pulumi.Input<{[key: string]: pulumi.Input<string>}>;
    /**
     * `true` if the module will be applied to traffic, `false` to disable. default `true` if unspecified
     */
    enabled?: pulumi.Input<boolean>;
    /**
     * a list of header names that will be removed from the HTTP Response returned to the HTTP client
     */
    removes?: pulumi.Input<pulumi.Input<string>[]>;
}

export interface EndpointConfigurationSaml {
    /**
     * If true, the IdP may initiate a login directly (e.g. the user does not need to visit the endpoint first and then be redirected). The IdP should set the `RelayState` parameter to the target URL of the resource they want the user to be redirected to after the SAML login assertion has been processed.
     */
    allowIdpInitiated?: pulumi.Input<boolean>;
    /**
     * The public URL of the SP's Assertion Consumer Service. This is where the IdP will redirect to during an authentication flow. This will need to be specified to the IdP as configuration.
     */
    assertionConsumerServiceUrl?: pulumi.Input<string>;
    /**
     * If present, only users who are a member of one of the listed groups may access the target endpoint.
     */
    authorizedGroups?: pulumi.Input<pulumi.Input<string>[]>;
    /**
     * the prefix of the session cookie that ngrok sets on the http client to cache authentication. default is 'ngrok.'
     */
    cookiePrefix?: pulumi.Input<string>;
    /**
     * `true` if the module will be applied to traffic, `false` to disable. default `true` if unspecified
     */
    enabled?: pulumi.Input<boolean>;
    /**
     * The SP Entity's unique ID. This always takes the form of a URL. In ngrok's implementation, this URL is the same as the metadata URL. This will need to be specified to the IdP as configuration.
     */
    entityId?: pulumi.Input<string>;
    /**
     * If true, indicates that whenever we redirect a user to the IdP for authentication that the IdP must prompt the user for authentication credentials even if the user already has a valid session with the IdP.
     */
    forceAuthn?: pulumi.Input<boolean>;
    /**
     * The full XML IdP EntityDescriptor. Your IdP may provide this to you as a a file to download or as a URL.
     */
    idpMetadata?: pulumi.Input<string>;
    /**
     * The IdP's metadata URL which returns the XML IdP EntityDescriptor. The IdP's metadata URL specifies how to connect to the IdP as well as its public key which is then used to validate the signature on incoming SAML assertions to the ACS endpoint.
     */
    idpMetadataUrl?: pulumi.Input<string>;
    /**
     * Integer number of seconds of inactivity after which if the user has not accessed the endpoint, their session will time out and they will be forced to reauthenticate.
     */
    inactivityTimeout?: pulumi.Input<number>;
    /**
     * Integer number of seconds of the maximum duration of an authenticated session. After this period is exceeded, a user must reauthenticate.
     */
    maximumDuration?: pulumi.Input<number>;
    /**
     * A public URL where the SP's metadata is hosted. If an IdP supports dynamic configuration, this is the URL it can use to retrieve the SP metadata.
     */
    metadataUrl?: pulumi.Input<string>;
    /**
     * Defines the name identifier format the SP expects the IdP to use in its assertions to identify subjects. If unspecified, a default value of `urn:oasis:names:tc:SAML:2.0:nameid-format:persistent` will be used. A subset of the allowed values enumerated by the SAML specification are supported.
     */
    nameidFormat?: pulumi.Input<string>;
    /**
     * Do not enforce authentication on HTTP OPTIONS requests. necessary if you are supporting CORS.
     */
    optionsPassthrough?: pulumi.Input<boolean>;
    /**
     * PEM-encoded x.509 certificate of the key pair that is used to sign all SAML requests that the ngrok SP makes to the IdP. Many IdPs do not support request signing verification, but we highly recommend specifying this in the IdP's configuration if it is supported.
     */
    requestSigningCertificatePem?: pulumi.Input<string>;
    /**
     * The public URL of the SP's Single Logout Service. This is where the IdP will redirect to during a single logout flow. This will optionally need to be specified to the IdP as configuration.
     */
    singleLogoutUrl?: pulumi.Input<string>;
}

export interface EndpointConfigurationTlsTermination {
    /**
     * `true` if the module will be applied to traffic, `false` to disable. default `true` if unspecified
     */
    enabled?: pulumi.Input<boolean>;
    /**
     * The minimum TLS version used for termination and advertised to the client during the TLS handshake. if unspecified, ngrok will choose an industry-safe default. This value must be null if `terminateAt` is set to `upstream`.
     */
    minVersion?: pulumi.Input<string>;
    /**
     * `edge` if the ngrok edge should terminate TLS traffic, `upstream` if TLS traffic should be passed through to the upstream ngrok agent / application server for termination. if `upstream` is chosen, most other modules will be disallowed because they rely on the ngrok edge being able to access the underlying traffic.
     */
    terminateAt?: pulumi.Input<string>;
}

export interface EndpointConfigurationWebhookValidation {
    /**
     * `true` if the module will be applied to traffic, `false` to disable. default `true` if unspecified
     */
    enabled?: pulumi.Input<boolean>;
    /**
     * a string indicating which webhook provider will be sending webhooks to this endpoint. Value must be one of the supported providers: `SLACK`, `SNS`, `STRIPE`, `GITHUB`, `TWILIO`, `SHOPIFY`, `GITLAB`, `INTERCOM`, `SENDGRID`, `XERO`, `PAGERDUTY`.
     */
    provider?: pulumi.Input<string>;
    /**
     * a string secret used to validate requests from the given provider. All providers except AWS SNS require a secret
     */
    secret?: pulumi.Input<string>;
}

export interface EventDestinationTarget {
    /**
     * Configuration used to send events to Amazon CloudWatch Logs.
     */
    cloudwatchLogs?: pulumi.Input<pulumi.Input<inputs.EventDestinationTargetCloudwatchLog>[]>;
    /**
     * Configuration used for internal debugging.
     */
    debugs?: pulumi.Input<pulumi.Input<inputs.EventDestinationTargetDebug>[]>;
    /**
     * Configuration used to send events to Amazon Kinesis Data Firehose.
     */
    firehoses?: pulumi.Input<pulumi.Input<inputs.EventDestinationTargetFirehose>[]>;
    /**
     * Configuration used to send events to Amazon Kinesis.
     */
    kineses?: pulumi.Input<pulumi.Input<inputs.EventDestinationTargetKinese>[]>;
}

export interface EventDestinationTargetCloudwatchLog {
    /**
     * Configuration for how to authenticate into your AWS account. Exactly one of `role` or `creds` should be configured.
     */
    auths?: pulumi.Input<pulumi.Input<inputs.EventDestinationTargetCloudwatchLogAuth>[]>;
    /**
     * An Amazon Resource Name specifying the CloudWatch Logs group to deposit events into.
     */
    logGroupArn?: pulumi.Input<string>;
}

export interface EventDestinationTargetCloudwatchLogAuth {
    /**
     * Credentials to your AWS account if you prefer ngrok to sign in with long-term access keys.
     */
    creds?: pulumi.Input<pulumi.Input<inputs.EventDestinationTargetCloudwatchLogAuthCred>[]>;
    /**
     * A role for ngrok to assume on your behalf to deposit events into your AWS account.
     */
    roles?: pulumi.Input<pulumi.Input<inputs.EventDestinationTargetCloudwatchLogAuthRole>[]>;
}

export interface EventDestinationTargetCloudwatchLogAuthCred {
    /**
     * The ID portion of an AWS access key.
     */
    awsAccessKeyId: pulumi.Input<string>;
    /**
     * The secret portion of an AWS access key.
     */
    awsSecretAccessKey: pulumi.Input<string>;
}

export interface EventDestinationTargetCloudwatchLogAuthRole {
    /**
     * An ARN that specifies the role that ngrok should use to deliver to the configured target.
     */
    roleArn: pulumi.Input<string>;
}

export interface EventDestinationTargetDebug {
    /**
     * URL to send events to.
     */
    callbackUrl?: pulumi.Input<string>;
    /**
     * Whether or not to output to publisher service logs.
     */
    log?: pulumi.Input<boolean>;
}

export interface EventDestinationTargetFirehose {
    /**
     * Configuration for how to authenticate into your AWS account. Exactly one of `role` or `creds` should be configured.
     */
    auths?: pulumi.Input<pulumi.Input<inputs.EventDestinationTargetFirehoseAuth>[]>;
    /**
     * An Amazon Resource Name specifying the Firehose delivery stream to deposit events into.
     */
    deliveryStreamArn?: pulumi.Input<string>;
}

export interface EventDestinationTargetFirehoseAuth {
    /**
     * Credentials to your AWS account if you prefer ngrok to sign in with long-term access keys.
     */
    creds?: pulumi.Input<pulumi.Input<inputs.EventDestinationTargetFirehoseAuthCred>[]>;
    /**
     * A role for ngrok to assume on your behalf to deposit events into your AWS account.
     */
    roles?: pulumi.Input<pulumi.Input<inputs.EventDestinationTargetFirehoseAuthRole>[]>;
}

export interface EventDestinationTargetFirehoseAuthCred {
    /**
     * The ID portion of an AWS access key.
     */
    awsAccessKeyId: pulumi.Input<string>;
    /**
     * The secret portion of an AWS access key.
     */
    awsSecretAccessKey: pulumi.Input<string>;
}

export interface EventDestinationTargetFirehoseAuthRole {
    /**
     * An ARN that specifies the role that ngrok should use to deliver to the configured target.
     */
    roleArn: pulumi.Input<string>;
}

export interface EventDestinationTargetKinese {
    /**
     * Configuration for how to authenticate into your AWS account. Exactly one of `role` or `creds` should be configured.
     */
    auths?: pulumi.Input<pulumi.Input<inputs.EventDestinationTargetKineseAuth>[]>;
    /**
     * An Amazon Resource Name specifying the Kinesis stream to deposit events into.
     */
    streamArn?: pulumi.Input<string>;
}

export interface EventDestinationTargetKineseAuth {
    /**
     * Credentials to your AWS account if you prefer ngrok to sign in with long-term access keys.
     */
    creds?: pulumi.Input<pulumi.Input<inputs.EventDestinationTargetKineseAuthCred>[]>;
    /**
     * A role for ngrok to assume on your behalf to deposit events into your AWS account.
     */
    roles?: pulumi.Input<pulumi.Input<inputs.EventDestinationTargetKineseAuthRole>[]>;
}

export interface EventDestinationTargetKineseAuthCred {
    /**
     * The ID portion of an AWS access key.
     */
    awsAccessKeyId: pulumi.Input<string>;
    /**
     * The secret portion of an AWS access key.
     */
    awsSecretAccessKey: pulumi.Input<string>;
}

export interface EventDestinationTargetKineseAuthRole {
    /**
     * An ARN that specifies the role that ngrok should use to deliver to the configured target.
     */
    roleArn: pulumi.Input<string>;
}

export interface EventSubscriptionSource {
    /**
     * TODO
     */
    fields?: pulumi.Input<pulumi.Input<string>[]>;
    /**
     * TODO
     */
    filter?: pulumi.Input<string>;
    /**
     * Type of event for which an event subscription will trigger
     */
    type?: pulumi.Input<string>;
    /**
     * URI of the Event Source API resource.
     */
    uri?: pulumi.Input<string>;
}

export interface ReservedDomainCertificateManagementPolicy {
    /**
     * certificate authority to request certificates from. The only supported value is letsencrypt.
     */
    authority?: pulumi.Input<string>;
    /**
     * type of private key to use when requesting certificates. Defaults to rsa, can be either rsa or ecdsa.
     */
    privateKeyType?: pulumi.Input<string>;
}

export interface TlsCertificateSubjectAlternativeName {
    /**
     * set of additional domains (including wildcards) this TLS certificate is valid for
     */
    dnsNames?: pulumi.Input<pulumi.Input<string>[]>;
    /**
     * set of IP addresses this TLS certificate is also valid for
     */
    ips?: pulumi.Input<pulumi.Input<string>[]>;
}
