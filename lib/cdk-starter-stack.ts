import * as ec2 from 'aws-cdk-lib/aws-ec2';
import * as cdk from 'aws-cdk-lib';

export class CdkStarterStack extends cdk.Stack {
  constructor(scope: cdk.App, id: string, props?: cdk.StackProps) {
    super(scope, id, props);

    const importedSecurityGroup = ec2.SecurityGroup.fromSecurityGroupId(
      this,
      'imported-security-group',
      'YOUR_SG_ID',
      {allowAllOutbound: true, mutable: true},
    );

    console.log('security group id 👉', importedSecurityGroup.securityGroupId);

    // // 👇 `mutable` is `true`, so we can add ingress rules
    // importedSecurityGroup.addIngressRule(
    //   ec2.Peer.anyIpv4(),
    //   ec2.Port.tcp(22),
    //   'allow SSH access from anywhere',
    // );

    // // 👇 can only add egress rules if `allowAllOutbound` is set to false
    // // and `mutable` is set to `true`
    // importedSecurityGroup.addEgressRule(
    //   ec2.Peer.ipv4('10.0.0.0/16'),
    //   ec2.Port.tcp(3306),
    //   'allow outgoing traffic on port 3306',
    // );
  }
}
