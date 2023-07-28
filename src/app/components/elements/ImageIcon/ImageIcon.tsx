import Image from 'next/image';

const imageIconSource = {
  Java: 'https://github.com/devicons/devicon/raw/master/icons/java/java-original-wordmark.svg',
  OpenAM: '',
  OpenIG: '',
  OpenDJ: '',
  jetty: '',
  OpenStack: '',
  Linux: '',
  Python: '',
  MySQL: '',
  Oracle: '',
  Solaris: '',
  ShellScript: '',
  PostgreSQL: '',
  Zabbix: '',
  SpringBoot: '',
  Thymeleaf: '',
  Maven: '',
  Spock: '',
  Javascript: '',
  Typescript: '',
  HTML5: '',
  CSS: '',
  AWS: '',
  Terraform: '',
  Docker: '',
  Kubernetes: '',
  Vuejs: '',
  Nodejs: '',
  ServerlessFramework: '',
  Screwdriver: '',
  SonarQube: '',
  Jenkins: '',
  GitLab: '',
  PowerShell: '',
  Catalyst: '',
  ESXi: '',
  AIX: '',
  Juniper: '',
  Power: '',
  Windows: '',
  DotNET: '',
  VB: '',
  CSharp: '',
  PLSQL: '',
} as const;

export type ImageIconType = keyof typeof imageIconSource;

type ImageIconProps = {
  id: ImageIconType;
  size: number;
};

export const ImageIcon = (props: ImageIconProps) => {
  const { id, size } = props;

  return (
    <Image
      src={imageIconSource[id]}
      alt={id}
      width={size}
      height={size}
      className="mx-8"
    />
  );
};
