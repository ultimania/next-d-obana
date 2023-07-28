import { Suspense } from 'react';
import { Spinner } from '../components/elements/Spinner';
import {
  HistoryContainer,
  HistoryContainerItem,
} from '../components/elements/HistoryContainer';

export default function Skillset() {
  const histories: HistoryContainerItem[] = [
    {
      startDate: '2022/10/01',
      endDate: '2023/05/31',
      title: 'データ管理基盤ソリューションおよびパッケージ製品の企画・開発',
      description: '',
      positions: ['SE'],
      members: 2,
      skills: [],
    },
    {
      startDate: '2021/06/01',
      endDate: '2022/09/30',
      title: 'コンシューマー向け飲食店予約サービスの開発・保守',
      description: '',
      positions: ['SE', 'TL'],
      members: 20,
      skills: [
        'Java',
        'SpringBoot',
        'Thymeleaf',
        'Maven',
        'Spock',
        'Javascript',
        'Typescript',
        'HTML5',
        'CSS',
        'ShellScript',
        'AWS',
        'Terraform',
        'Docker',
        'Kubernetes',
        'Vuejs',
        'Nodejs',
        'ServerlessFramework',
        'Screwdriver',
        'SonarQube',
      ],
    },
    {
      startDate: '2020/10/01',
      endDate: '2021/05/31',
      title: 'DevOps最新動向に関する調査・検証と社内技術の推進',
      description: '',
      positions: ['PM'],
      members: 2,
      skills: [
        'Javascript',
        'Typescript',
        'HTML5',
        'CSS',
        'ShellScript',
        'AWS',
        'Terraform',
        'Docker',
        'Kubernetes',
        'Vuejs',
        'Nodejs',
        'ServerlessFramework',
        'Jenkins',
        'SonarQube',
      ],
    },
    {
      startDate: '2020/09/01',
      endDate: '2021/05/31',
      title: '共済団体様オンラインシステムの基盤更改プロジェクト',
      description: '',
      positions: ['PM'],
      members: 10,
      skills: [
        'Linux',
        'GitLab',
        'Oracle',
        'ShellScript',
        'PowerShell',
        'Catalyst',
        'ESXi',
      ],
    },
    {
      startDate: '2018/07/01',
      endDate: '2020/08/31',
      title: '各種共済システムの運用保守・基盤更改',
      description: '',
      positions: ['PM'],
      members: 10,
      skills: [
        'Linux',
        'AIX',
        'Oracle',
        'ShellScript',
        'PowerShell',
        'Catalyst',
        'ESXi',
        'Juniper',
        'Power',
      ],
    },
    {
      startDate: '2017/06/01',
      endDate: '2018/06/30',
      title: '生産管理パッケージの設計・開発',
      description: '',
      positions: ['SE'],
      members: 10,
      skills: ['Windows', 'Oracle', 'DotNET', 'VB', 'CSharp', 'PLSQL'],
    },
    {
      startDate: '2017/02/01',
      endDate: '2017/05/31',
      title: 'Oracle監視サービスの設計・開発',
      description:
        'OracleCloud上でPaaSとして提供するOracleDatabaseを監視するためのサービスの設計・構築',
      positions: ['TL'],
      members: 1,
      skills: ['Linux', 'PostgreSQL', 'Python', 'ShellScript', 'Zabbix'],
    },
    {
      startDate: '2016/10/01',
      endDate: '2017/01/31',
      title: '社内向けフェデレーションサービスの開発',
      description:
        'アクセス管理、フェデレーションサーバープラットフォームのOSSであるOpenAM, OpenIG, OpenDJをカスタマイズした、社内向けの認証基盤サービスの開発。',
      positions: ['SE'],
      members: 8,
      skills: ['Java', 'OpenAM', 'OpenIG', 'OpenDJ', 'jetty'],
    },
    {
      startDate: '2016/04/01',
      endDate: '2016/09/30',
      title: '企業向けパブリッククラウドサービスの開発',
      description:
        'OpenStackを使った大規模パブリッククラウドサービスの開発。主にKeyStoneコンポーネントをカスタマイズしたユーザー管理機能の開発を担当',
      positions: ['SE'],
      members: 10,
      skills: ['OpenStack', 'Linux', 'Python', 'Java', 'MySQL'],
    },
    {
      startDate: '2013/09/01',
      endDate: '2016/03/31',
      title: 'DB統合システムの設計・開発',
      description:
        'Oracle Databaseをベースとした大規模組織向けのデータベースサービス基盤の上流設計から開発・テストまで',
      positions: ['SE', 'TL'],
      members: 10,
      skills: ['Oracle', 'Linux', 'Solaris', 'ShellScript'],
    },
  ];

  return (
    <div className="flex flex-col p-10">
      {histories.map((history, index) => (
        <Suspense fallback={<Spinner />} key={history.title}>
          <HistoryContainer item={history} index={index} />
        </Suspense>
      ))}
    </div>
  );
}
