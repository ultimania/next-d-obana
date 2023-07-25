import {
  ContentContainer,
  ContentContainerItem,
} from '../components/elements/ContentContainer';

export default function Skillset() {
  const ipa: ContentContainerItem[] = [
    {
      id: '情報処理技術者試験',
      iconUrl: '',
      subtitle: '基本情報技術者',
    },
    {
      id: '情報処理技術者試験',
      iconUrl: '',
      subtitle: '応用情報技術者',
    },
    {
      id: '情報処理技術者試験',
      iconUrl: '',
      subtitle: 'データベーススペシャリスト',
    },
    {
      id: '情報処理技術者試験',
      iconUrl: '',
      subtitle: 'ネットワークスペシャリスト',
    },
  ];
  const snowflake: ContentContainerItem[] = [
    {
      id: 'SnowPro Certification',
      iconUrl: '',
      subtitle: 'Core',
    },
  ];
  const oracle: ContentContainerItem[] = [
    {
      id: 'Oracle Certified Java Programmer',
      iconUrl: '',
      subtitle: 'Silver SE 8',
    },
    {
      id: 'ORACLE MASTER',
      iconUrl: '',
      subtitle: 'Platinum DBA 11g',
    },
  ];

  const lpic: ContentContainerItem[] = [
    {
      id: 'Linux技術者認定試験',
      iconUrl: '',
      subtitle: 'Level 1',
    },
    {
      id: 'Linux技術者認定試験',
      iconUrl: '',
      subtitle: 'Level 2',
    },
  ];
  const azure: ContentContainerItem[] = [
    {
      id: 'Microsoft Certified: Azure',
      iconUrl: '',
      subtitle: 'Fundamentals',
    },
  ];
  const aws: ContentContainerItem[] = [
    {
      id: 'aws certified Solutions Architect',
      iconUrl:
        'https://10pearls.com/wp-content/uploads/2023/04/aws-solution-architect.svg',
      subtitle: 'Associate',
    },
    {
      id: 'aws certified SysOpsAdministrator',
      iconUrl: 'https://10pearls.com/wp-content/uploads/2023/04/aws-sysops.svg',
      subtitle: 'Associate',
    },
    {
      id: 'aws certified Developer',
      iconUrl: 'https://10pearls.com/wp-content/uploads/2023/04/aws-sysops.svg',
      subtitle: 'Associate',
    },
  ];

  return (
    <div className="flex flex-col p-10">
      <ContentContainer title="AWS" items={aws} />
      <ContentContainer title="Azure" items={azure} />
      <ContentContainer title="LPIC" items={lpic} />
      <ContentContainer title="Oracle" items={oracle} />
      <ContentContainer title="Snowflake" items={snowflake} />
      <ContentContainer title="情報処理技術者試験" items={ipa} />
    </div>
  );
}
