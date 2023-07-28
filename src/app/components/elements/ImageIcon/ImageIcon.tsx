import Image from 'next/image';

const imageIconSource = {
  Java: 'https://github.com/devicons/devicon/raw/master/icons/java/java-original-wordmark.svg',
  OpenAM: '/icon/openam.svg',
  OpenStack:
    'https://github.com/devicons/devicon/raw/develop/icons/openstack/openstack-original.svg',
  Linux:
    'https://github.com/devicons/devicon/raw/develop/icons/linux/linux-original.svg',
  Python:
    'https://github.com/devicons/devicon/raw/master/icons/python/python-original-wordmark.svg',
  MySQL:
    'https://github.com/devicons/devicon/raw/develop/icons/mysql/mysql-original.svg',
  Oracle:
    'https://github.com/devicons/devicon/raw/develop/icons/oracle/oracle-original.svg',
  Solaris: '/icon/solaris.svg',
  ShellScript:
    'https://github.com/devicons/devicon/raw/master/icons/bash/bash-original.svg',
  PostgreSQL:
    'https://github.com/devicons/devicon/raw/master/icons/postgresql/postgresql-original.svg',
  Zabbix: '/icon/zabbix.svg',
  SpringBoot:
    'https://github.com/devicons/devicon/raw/master/icons/spring/spring-original-wordmark.svg',
  Thymeleaf: '',
  Maven: '',
  Spock: '',
  Javascript:
    'https://raw.githubusercontent.com/devicons/devicon/master/icons/javascript/javascript-original.svg',
  Typescript:
    'https://github.com/devicons/devicon/raw/master/icons/typescript/typescript-original.svg',
  HTML5:
    'https://raw.githubusercontent.com/devicons/devicon/master/icons/html5/html5-original-wordmark.svg',
  CSS: 'https://raw.githubusercontent.com/devicons/devicon/master/icons/css3/css3-original-wordmark.svg',
  AWS: 'https://github.com/devicons/devicon/raw/develop/icons/amazonwebservices/amazonwebservices-original-wordmark.svg',
  Terraform:
    'https://github.com/devicons/devicon/raw/master/icons/terraform/terraform-original.svg',
  Docker:
    'https://github.com/devicons/devicon/raw/develop/icons/docker/docker-original.svg',
  Kubernetes:
    'https://github.com/devicons/devicon/raw/develop/icons/kubernetes/kubernetes-plain.svg',
  Vuejs:
    'https://raw.githubusercontent.com/devicons/devicon/master/icons/vuejs/vuejs-original-wordmark.svg',
  Nodejs:
    'https://raw.githubusercontent.com/devicons/devicon/master/icons/nodejs/nodejs-original-wordmark.svg',
  ServerlessFramework: '',
  Screwdriver: '',
  SonarQube: '',
  Jenkins:
    'https://github.com/devicons/devicon/raw/master/icons/jenkins/jenkins-original.svg',
  GitLab:
    'https://github.com/devicons/devicon/raw/master/icons/gitlab/gitlab-original.svg',
  PowerShell: '',
  Catalyst: '',
  ESXi: '',
  AIX: '',
  Juniper: '',
  Power: '',
  Windows:
    'https://github.com/devicons/devicon/raw/develop/icons/windows8/windows8-original.svg',
  DotNET:
    'https://github.com/devicons/devicon/raw/master/icons/dot-net/dot-net-original.svg',
  VB: '',
  CSharp: '',
  PLSQL: '',
} as const;

export type ImageIconType = keyof typeof imageIconSource;

type ImageIconProps = {
  id: ImageIconType;
  size: number;
  // eslint-disable-next-line react/require-default-props
  className?: string;
};

export const ImageIcon = (props: ImageIconProps) => {
  const { id, size, className } = props;

  return (
    <Image
      src={imageIconSource[id]}
      alt={id}
      width={size}
      height={size}
      className={className}
    />
  );
};
