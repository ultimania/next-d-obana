import {
  ContentContainer,
  ContentContainerItem,
} from '../components/containers/ContentContainer';

export default function Skillset() {
  const ipa: ContentContainerItem[] = [
    {
      id: '情報処理技術者試験',
      iconUrl: '/icon/ipa_fe.svg',
      subtitle: '基本情報技術者',
    },
    {
      id: '情報処理技術者試験',
      iconUrl: '/icon/ipa_ap.svg',
      subtitle: '応用情報技術者',
    },
    {
      id: '情報処理技術者試験',
      iconUrl: '/icon/ipa_nw.svg',
      subtitle: 'データベーススペシャリスト',
    },
    {
      id: '情報処理技術者試験',
      iconUrl: '/icon/ipa_db.svg',
      subtitle: 'ネットワークスペシャリスト',
    },
  ];
  const snowflake: ContentContainerItem[] = [
    {
      id: 'SnowPro Certification',
      iconUrl: '/icon/snowflake_core.svg',
      subtitle: 'Core',
    },
  ];
  const oracle: ContentContainerItem[] = [
    {
      id: 'Oracle Certified Java Programmer',
      iconUrl: '/icon/oracle_java_silver.svg',
      subtitle: 'Silver SE 8',
    },
    {
      id: 'ORACLE MASTER',
      iconUrl: '/icon/oracle_master_platinum.svg',
      subtitle: 'Platinum DBA 11g',
    },
  ];

  const lpic: ContentContainerItem[] = [
    {
      id: 'Linux技術者認定試験',
      iconUrl: '/icon/lpic_lv1.svg',
      subtitle: 'Level 1',
    },
    {
      id: 'Linux技術者認定試験',
      iconUrl: '/icon/lpic_lv2.svg',
      subtitle: 'Level 2',
    },
  ];
  const azure: ContentContainerItem[] = [
    {
      id: 'Microsoft Certified: Azure',
      iconUrl: '/icon/azure_az900.svg',
      subtitle: 'Fundamentals',
    },
  ];
  const aws: ContentContainerItem[] = [
    {
      id: 'aws certified Solutions Architect',
      iconUrl: '/icon/aws_ss_associate.svg',
      subtitle: 'Associate',
    },
    {
      id: 'aws certified SysOpsAdministrator',
      iconUrl: '/icon/aws_sa_associate.svg',
      subtitle: 'Associate',
    },
    {
      id: 'aws certified Developer',
      iconUrl: '/icon/aws_dev_associate.svg',
      subtitle: 'Associate',
    },
  ];

  const contents = [
    { title: 'AWS', content: aws },
    { title: 'Azure', content: azure },
    { title: 'LPIC', content: lpic },
    { title: 'Oracle', content: oracle },
    { title: 'Snowflake', content: snowflake },
    { title: '情報処理技術者試験', content: ipa },
  ];

  return (
    <div className="flex flex-col p-10 mt-52">
      {contents.map((content, index) => (
        <ContentContainer
          title={content.title}
          items={content.content}
          key={content.title}
          fadeIndex={index}
        />
      ))}
    </div>
  );
}
